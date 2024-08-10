import { create } from "zustand";
import { jwtDecode } from "jwt-decode";
import { setCookie } from "cookies-next";
import { logout as signOut } from "../api";
import toast from "react-hot-toast";

export type TUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  session: string;
  exp: number;
};

interface Store {
  user: TUser | undefined;
  accessToken: string | undefined;
  setAccessToken: (val: string) => void;
  isAuthenticating: boolean;
  setIsAuthenticating: (val: boolean) => void;
  logout: () => void;
}

const useAuth = create<Store>((set) => ({
  isAuthenticating: true,
  setIsAuthenticating: (val) => set({ isAuthenticating: val }),
  user: undefined,
  accessToken: undefined,
  setAccessToken: (val) => {
    try {
      set({ isAuthenticating: true });
      const decodedUser: any = jwtDecode(`${val}`);
      setCookie("accessToken", val);
      set({ user: decodedUser });
      set({ accessToken: val });
    } catch (error) {
      toast.error("Invalid authentication!");
      set({ accessToken: undefined, user: undefined });
      setCookie("accessToken", "");
    } finally {
      set({ isAuthenticating: false });
    }
  },

  logout: async () => {
    try {
      set({ isAuthenticating: true });
      await signOut();
    } catch (error) {
    } finally {
      set({ accessToken: undefined, user: undefined });
      setCookie("accessToken", "");
      setCookie("refreshToken", "");
      window?.location.reload();
      set({ isAuthenticating: false });
    }
  },
}));

export default useAuth;
