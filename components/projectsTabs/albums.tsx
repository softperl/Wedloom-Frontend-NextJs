/* eslint-disable react-hooks/exhaustive-deps */
import { createAlbum, getAlbums, removeAlbumById } from "@/lib/api";
import { useProjects } from "@/lib/hooks/useProjects";
import { cn, handelError } from "@/lib/utils";
import { set } from "date-fns";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { FaImage, FaX } from "react-icons/fa6";

const Albums = () => {
  const { albums, setAlbums, projects, refresh, setRefresh } = useProjects();
  const [createNew, setCreateNew] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [albumName, setAlbumName] = useState("");
  const [errors, setErrors] = useState<{ name?: string; albumImages?: string }>(
    {}
  );
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<any>(null);

  const getAlbumsFn = async () => {
    try {
      const { data } = await getAlbums();
      setAlbums(data?.albums);
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  useEffect(() => {
    getAlbumsFn();
  }, [refresh]);

  const handleSelectImage = (image: File) => {
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(image)) {
        return prevSelectedImages.filter((img) => img !== image);
      } else {
        return [...prevSelectedImages, image];
      }
    });
  };

  const handleCreateAlbum = async () => {
    try {
      if (!albumName) {
        setErrors({ ...errors, name: "Album name is required" });
        return;
      }

      if (selectedImages.length === 0) {
        setErrors({
          ...errors,
          albumImages: "At least one image must be selected",
        });
        return;
      }

      // Check for duplicate album name
      const isDuplicate = albums?.some(
        (item: any) => item?.name.toLowerCase() === albumName.toLowerCase()
      );

      if (isDuplicate) {
        toast.error("Album with this name already exists.");
        setCreateNew(false);
        setAlbumName("");
        setSelectedImages([]);
        setErrors({});
        return;
      }
      await createAlbum({ name: albumName, photoIds: selectedImages });
      setRefresh(!refresh);
      setCreateNew(false);
      setAlbumName("");
      setSelectedImages([]);
      setErrors({});
      toast.success("Album created successfully!");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  const handleDeleteAlbum = async (id: string) => {
    try {
      await removeAlbumById(id);
      setRefresh(!refresh);
      setOpen(false);
      setDeleteId(null);
      toast.success("Album deleted successfully!");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="m-0 font-medium text-lg">
          {albums?.length === 0
            ? "No album found!"
            : `You Created ${albums?.length} Albums`}
        </h2>
        <button
          className="block py-2 px-4 rounded-md border border-textPrimary-900 text-textPrimary-900 transition-all hover:bg-textPrimary-900 hover:text-white"
          onClick={() => setCreateNew(true)}>
          Create New
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {albums?.map((item: any, index: number) => {
          return (
            <div key={index} className="relative w-full aspect-square">
              <Image
                fill
                src={item.photos[0].photo}
                className="w-full h-full object-cover"
                alt="album"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black/60">
                <div
                  className="absolute top-2 left-2 w-6 h-6 bg-textPrimary-900 flex items-center justify-center rounded-full cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setDeleteId(item?.id);
                  }}>
                  <FaX className="w-5 h-5 p-1 text-white" />
                </div>
                <div className="flex justify-end items-center text-white gap-2 mr-4 font-semibold mt-2">
                  <FaImage className="w-4 h-4 text-white" />
                  <span>{item?.images?.length}</span>
                </div>
                <h2 className="absolute bottom-1 left-2 text-white w-[60%]">
                  {item?.name}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* create new album box */}
      <div
        className={`transition-all duration-300 ${
          createNew ? "scale-100" : "scale-0"
        } fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/70 flex items-center justify-center`}>
        <div className="bg-white w-2/4 rounded-md">
          <div>
            <h3 className="py-3 px-5 border-b font-semibold text-xl">
              Create Your Album
            </h3>
          </div>

          <div className="flex items-center justify-between gap-10 px-5 py-3">
            <input
              type="text"
              className="border rounded-md w-full block py-2 px-4 outline-none focus:border-none focus:ring-pink-600 border-gray-300"
              placeholder="Enter Your Album Name"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
            />
            <span className="block py-2 px-4 border rounded-md w-64">
              Selected Image: {selectedImages.length}
            </span>
          </div>

          {errors.name && (
            <div className="ml-5">
              <span className="text-red-500 font-medium">{errors.name}</span>
            </div>
          )}

          <div className="py-3 px-5 grid grid-cols-none sm:grid-cols-2 md:grid-cols-4 gap-5 overflow-y-auto h-[calc(100vh-400px)]">
            {projects.map((project: any, i: number) => (
              <div
                key={i}
                className={`border-4 w-full aspect-square relative ${
                  selectedImages.includes(project)
                    ? "border-textPrimary-900"
                    : "border-transparent"
                }`}
                onClick={() => handleSelectImage(project)}>
                <Image
                  fill
                  className="object-cover"
                  src={project?.photo}
                  alt="project"
                />
              </div>
            ))}
          </div>

          {errors.albumImages && (
            <div className="ml-5 mt-2">
              <span className="text-red-500 font-medium">
                {errors.albumImages}
              </span>
            </div>
          )}

          <div className="flex items-center gap-5 my-5 px-5">
            <button
              className="block py-2 px-4 bg-textPrimary-900 text-white rounded-md"
              onClick={handleCreateAlbum}>
              Create New Album
            </button>
            <button
              className="block py-2 px-4 border rounded-md"
              onClick={() => setCreateNew(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* delete album */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80 transition-all duration-300",
          open ? "scale-100" : "scale-0"
        )}>
        <div className="flex items-center justify-center w-full h-full">
          <div className="bg-white p-4 rounded-md min-w-[440px] text-center">
            <Image
              width={500}
              height={500}
              className="mt-3 w-20 mx-auto block"
              src={`/exclamation-mark.png`}
              alt="icon"
            />
            <h3 className="text-[26px] text-[#595959] font-semibold mb-3 mt-3">
              Are you sure?
            </h3>
            <p className="text-base text-[#545454]">
              If Deleted, You won&apos;t be able to revert this!
            </p>
            <div className="flex items-center gap-2 justify-center mt-6">
              <button
                onClick={() => {
                  handleDeleteAlbum(deleteId);
                }}
                className="text-sm font-medium py-[8px] px-[14px] rounded-[4px] outline-none bg-[#3085D6] block text-white hover:bg-[#3085D6]/60">
                Yes, delete it!
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  setDeleteId(null);
                }}
                className="text-sm font-medium py-[8px] px-[14px] rounded-[4px] outline-none bg-[#DD3333] block text-white hover:bg-[#DD3333]/60">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;
