import { create } from "zustand";

export interface Album {
  name: string;
  images: File[];
}

interface ImageStore {
  projectsFiles: File[];
  setProjectsFiles: (files: File[]) => void;
  featuredImage: File | null;
  setFeaturedImage: (file: File | null) => void;
  handleDelete: (img: File) => void;
  albumsFiles: Album[];
  setAlbumsFiles: (files: Album[]) => void;
  videosFiles: string[];
  setVideosFiles: (val: string[]) => void;
  addVideo: (video: string) => void;
  removeVideo: (video: string) => void;
}

export const useProjects = create<ImageStore>((set, get) => ({
  projectsFiles: [],
  setProjectsFiles: (files) =>
    set((state) => ({
      projectsFiles: [...state.projectsFiles, ...files],
    })),
  featuredImage: null,
  setFeaturedImage: (file) => set({ featuredImage: file }),
  handleDelete: (img) => {
    const { projectsFiles, setProjectsFiles, featuredImage, setFeaturedImage } =
      get();
    const updatedFiles = projectsFiles.filter((file) => file !== img);
    setProjectsFiles(updatedFiles);

    if (featuredImage === img) {
      setFeaturedImage(updatedFiles[0] || null);
    }
  },
  albumsFiles: [],
  setAlbumsFiles: (files) => set({ albumsFiles: files }),
  videosFiles: [],
  setVideosFiles: (val) => set({ videosFiles: val }),
  addVideo: (video) =>
    set((state) => ({ videosFiles: [...state.videosFiles, video] })),
  removeVideo: (video) =>
    set((state) => ({
      videosFiles: state.videosFiles.filter((v) => v !== video),
    })),
}));
