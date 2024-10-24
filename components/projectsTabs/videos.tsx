"use client";

import {
  createVideo,
  getVideos,
  getVideosAdmin,
  removeVideoById,
} from "@/lib/api";
import { useProjects } from "@/lib/hooks/useProjects";
import { cn, extractVideoId, handelError, isYouTubeUrl } from "@/lib/utils";
import { set } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaX } from "react-icons/fa6";

const Videos = () => {
  const params = useParams();
  const [data, setData] = useState<any>([]);
  const { refresh, setRefresh } = useProjects();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<any>(null);
  const [createNew, setCreateNew] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [isValidUrl, setIsValidUrl] = useState(false);

  const fetchVideos = async () => {
    if (params?.vendorId) {
      try {
        const { data } = await getVideosAdmin(params?.vendorId);
        setData(data?.videos);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await getVideos();
        setData(data?.videos);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [refresh]);

  // get video id from videoUrl and validate URL
  useEffect(() => {
    if (videoUrl) {
      const id = extractVideoId(videoUrl);
      setVideoId(id || "");
      setIsValidUrl(isYouTubeUrl(videoUrl));
    } else {
      setIsValidUrl(false);
    }
  }, [videoUrl]);

  const handleAddVideo = async (event: any) => {
    event.preventDefault();

    if (!isValidUrl) {
      toast.error("Please enter a valid YouTube URL.");
      return;
    }
    try {
      await createVideo({
        video: videoId,
      });
      toast.success("Video Added Successfully.");
      setRefresh(!refresh);
      setCreateNew(false);
      setVideoUrl("");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };

  const deleteVideo = async (id: string) => {
    try {
      await removeVideoById(id);
      setRefresh(!refresh);
      setOpen(false);
      setDeleteId(null);
      toast.success("Video Deleted Successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete video.");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="m-0 font-medium text-lg">
          {data?.length === 0
            ? "No Video Found"
            : `You Added ${data?.length} Videos`}
        </h2>
        <button
          className="block py-2 px-4 rounded-md border border-textPrimary-900 text-textPrimary-900 transition-all hover:bg-textPrimary-900 hover:text-white"
          onClick={() => setCreateNew(true)}>
          Add New
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {data?.map((item: any, i: number) => {
          return (
            <div
              key={i}
              className="relative rounded-md overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${item?.video}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
              <div
                className="absolute top-2 right-2 w-8 h-8 bg-textPrimary-900 flex items-center justify-center rounded-full cursor-pointer"
                onClick={() => {
                  setDeleteId(item?.id);
                  setOpen(true);
                }}>
                <FaX className="w-4 h-4 text-white" />
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
        <div className="bg-white w-2/6 rounded-md">
          <div>
            <h3 className="py-3 px-5 border-b font-semibold text-xl">
              Add New Video
            </h3>
          </div>

          <div className="flex items-center justify-center gap-10 px-5 py-3 w-full">
            <form className="w-full" onSubmit={handleAddVideo}>
              <input
                type="url"
                className="border rounded-md w-full inline-block py-2 px-4 outline-none focus:ring-pink-600 border-gray-300 focus:border-none mb-4"
                placeholder="Enter Youtube Video URL"
                required
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />

              <div
                className={`transition-all w-full duration-300 ${
                  isValidUrl ? "h-full " : "h-0"
                } px-5 rounded-md overflow-hidden aspect-video`}>
                {isValidUrl && (
                  <iframe
                    className="w-full h-full"
                    style={{ borderRadius: "6px" }}
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
                )}
              </div>
              <div className="flex items-center gap-5 mt-5 px-5 pb-5">
                <button
                  className="block py-2 px-4 bg-textPrimary-900 text-white rounded-md"
                  type="submit">
                  Add Video
                </button>
                <button
                  type="button"
                  className="block py-2 px-4 border rounded-md"
                  onClick={() => {
                    setCreateNew(false);
                    setVideoUrl("");
                    setCreateNew(false);
                  }}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* delete video */}
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
              src="/exclamation-mark.png"
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
                onClick={() => deleteVideo(deleteId)}
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

export default Videos;
