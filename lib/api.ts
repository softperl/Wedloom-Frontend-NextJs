import { use } from "react";
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
export const getSteps = () => API.get("/site/get-all-steps");

//Chat
export const createConversation = (receiverId: string) =>
  API.post(`/chat/create-conversation/${receiverId}`);
export const getConversationsByUser = () => API.get("/chat/get-conversations");
export const createMessage = (formData: any) =>
  API.post("/chat/create-message", formData);
export const getMessage = (conversationId: string) =>
  API.get(`/chat/get-messages/${conversationId}`);
export const deleteConversation = (conversationId: string) =>
  API.delete(`/chat/delete-conversation/${conversationId}`);
export const addToFav = (conversationId: any) =>
  API.post(`/chat/add-to-fav/${conversationId}`);
export const removeFromFav = (conversationId: any) =>
  API.delete(`/chat/remove-from-fav/${conversationId}`);
export const getChatUsersByConversationId = (conversationId: string) =>
  API.get(`/chat/get-chat-user/${conversationId}`);
export const isFavoriteConversation = (conversationId: string) =>
  API.get(`/chat/favorite-conversation/${conversationId}`);
export const getUnReadConversationCount = () =>
  API.get(`/chat/get-unread-conversation-count`);
export const markAsUnread = () => API.get(`/chat/mark-as-unread`);

//Event
export const newEvent = (formData: any) => API.post(`/event/new`, formData);
export const getAllEventsByUserId = ({
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
}) =>
  API.get(
    `/event/get-events?q=${q}&page=${page}&perPage=${perPage}&sortBy=${sortBy}&sortOrder=${sortOrder}`
  );

//Vendor Profile Info
export const vendorProfileInfo = ({ formData }: { formData: any }) =>
  API.post(`/vendor/profile-info`, formData);
export const getVendorCategoryById = () =>
  API.get("/site/get-category/vendor-id");
