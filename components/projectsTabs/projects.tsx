import {
  getProjects,
  getProjectsAdmin,
  makeFeatured,
  removeProjectById,
} from "@/lib/api";
import { useProjects } from "@/lib/hooks/useProjects";
import { cn, handelError } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa6";

const Projects = () => {
  const params = useParams();
  const { projects, setProjects, refresh, setRefresh } = useProjects();
  const [featured, setFeatured] = useState<any>();
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<any>(null);

  const getProjectsFn = async () => {
    if (params?.vendorId) {
      try {
        const { data } = await getProjectsAdmin(params?.vendorId);
        setProjects(data?.projects);
        setFeatured(data?.featured);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await getProjects();
        setProjects(data?.projects);
        setFeatured(data?.featured);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeProjectByIdFn = async (id: any) => {
    try {
      await removeProjectById(id);
      getProjectsFn();
      toast.success("Project deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectsFn();
  }, [refresh]);

  const makeFeaturedFn = async (id: any) => {
    try {
      await makeFeatured(id);
      setRefresh(!refresh);
      toast.success("Project made featured successfully");
    } catch (error) {
      console.log(error);
      handelError(error);
    }
  };
  return (
    <div>
      {/* Image */}
      <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {featured && (
          <div className="w-full aspect-square flex justify-center items-center cursor-pointer rounded-md relative project-item overflow-hidden border-4 border-textPrimary-900 group">
            <Image
              fill
              className="object-cover"
              src={featured?.photo}
              alt="project"
            />
            <div className="transition-all duration-300 absolute -top-[100%] group-hover:top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80">
              <FaTrash
                onClick={() => {
                  setDeleteId(featured?.id);
                  setOpen(true);
                }}
                className="w-6 h-6 text-white bg-red-500 p-1 rounded-md absolute top-2 right-2"
              />
              <div className="transition-all duration-300 flex flex-col gap-2 px-5 pb-2 absolute bottom-0 left-0 right-0">
                <button className="py-1 px-3 transition-all text-white border-2 bg-emerald-600 border-emerald-600 rounded-md text-sm">
                  Featured
                </button>
              </div>
            </div>
          </div>
        )}
        {projects?.map((img: any, i: number) => {
          return (
            img?.isFeatured !== true && (
              <div
                key={i}
                className="w-full aspect-square flex justify-center items-center cursor-pointer rounded-md relative project-item overflow-hidden group">
                <Image
                  fill
                  className="object-cover"
                  src={img?.photo}
                  alt="project"
                />
                <div className="transition-all duration-300 absolute -top-[100%] group-hover:top-0 left-0 right-0 bottom-0 w-full h-full bg-black/80">
                  <FaTrash
                    onClick={() => {
                      setDeleteId(img?.id);
                      setOpen(true);
                    }}
                    className="w-6 h-6 text-white bg-red-500 p-1 rounded-md absolute top-2 right-2"
                  />
                  <div className="transition-all duration-300 absolute bottom-0 left-0 right-0 px-5 flex flex-col gap-2 pb-2">
                    <button
                      className={`py-1 px-3 transition-all text-white border text-sm ${
                        img?.isFeatured
                          ? "bg-emerald-600 border-emerald-600"
                          : "border-emerald-600 hover:bg-emerald-600"
                      } rounded-md`}
                      onClick={() => makeFeaturedFn(img?.id)}>
                      {img?.isFeatured ? "Featured" : "Make Featured"}
                    </button>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <>
        {/* Navlinks */}
        <div className="inline-flex">
          <Link href={`/vendor/profile/projects/portfolio`}>
            <div
              className="lg:w-72 w-full h-56 flex justify-center items-center cursor-pointer rounded-md"
              style={{
                background:
                  "radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('https://img.freepik.com/free-photo/abstract-blur-wedding-hall_74190-5229.jpg?w=1380&t=st=1670178252~exp=1670178852~hmac=c1f6d7158f8e07a88aafb0278bf8ddab3cb1da46714147cc1983a74b8ff52247')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
              <span className="text-xl lg:text-2xl text-white font-medium">
                ADD IMAGES
              </span>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="mt-6">
          <Link href="/imageupload/guideline">
            <span className="text-sm font-medium text-textPrimary-900 cursor-pointer">
              View image upload guidelines
            </span>
          </Link>
        </div>
      </>

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
                  removeProjectByIdFn(deleteId);
                  setOpen(false);
                  setDeleteId(null);
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

export default Projects;
