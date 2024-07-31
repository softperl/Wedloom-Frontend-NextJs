import axios from "axios";
import { getCookie, setCookie } from "cookies-next";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

API.interceptors.request.use((req: any) => {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  req.headers.Authorization = `Bearer ${accessToken}`;
  req.headers["x-refresh-token"] = refreshToken;
  return req;
});

API.interceptors.response.use(
  (res) => {
    const newAccessToken = res.headers["x-access-token"];
    if (newAccessToken) {
      setCookie("accessToken", newAccessToken);
    }
    return res;
  },
  async (error) => {
    if (error.response.status === 401) {
      setCookie("accessToken", "");
      setCookie("refreshToken", "");
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

//Auth
export const logout = () => API.delete("/auth/logout");
export const getRoleFe = () => API.get("/auth/get-role");
export const signIn = (formData: any) => API.post("/auth/login", formData);
export const signUp = (formData: any) => API.post("/auth/register", formData);
export const renewAccessToken = (formData: { refreshToken: string }) =>
  API.post("/auth/renew", formData);
export const changePasswordVendor = (formData: any) =>
  API.post("/auth/vendor-changePassword", formData);

//Blogs
export const getPosts = ({
  q,
  page,
  perPage,
  sortBy,
  sortOrder,
}: {
  q?: string;
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortOrder?: string;
}) => API.get(`/blog/post/get-all?q=${q}&page=${page}&perPage=${perPage}`);
export const getCategories = () => API.get("/blog/category/get-all");

//Questions
export const getQuestions = () => API.get("/question/get-all");

//Plans
export const getAllPlan = () => API.get("/site/plans");
export const deletePlan = (id: string) =>
  API.delete(`/site/plans/delete/${id}`);
export const createPlan = (formData: any) =>
  API.post("/site/plans/new", formData);
