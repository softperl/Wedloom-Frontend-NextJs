import { create } from "zustand";

interface ImageStore {
  projects: any;
  setProjects: (val: any) => void;
  albums: any;
  setAlbums: (val: any) => void;
  videosFile: any;
  setVideosFile: (val: any) => void;
  refresh: boolean;
  setRefresh: (val: boolean) => void;
}

export const useProjects = create<ImageStore>((set, get) => ({
  projects: [],
  setProjects: (val) => set({ projects: val }),
  albums: [],
  setAlbums: (val) => set({ albums: val }),
  videosFile: [],
  setVideosFile: (val) => set({ videosFile: val }),
  refresh: false,
  setRefresh: (val) => set({ refresh: val }),
}));
