import { use } from "react";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { get } from "http";

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

//Site
export const getAllPlan = () => API.get("/site/plans");
export const deletePlan = (id: string) =>
  API.delete(`/site/plans/delete/${id}`);
export const createPlan = (formData: any) =>
  API.post("/site/plans/new", formData);
export const getSteps = () => API.get("/site/get-all-steps");

//Chat
export const createConversation = (receiverId: any) =>
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
export const vendorProfileInfo = (formData: any) =>
  API.post(`/vendor/profile-info`, formData);
export const createBanquet = (formData: any) =>
  API.post(`/vendor/banquet/new`, formData);
export const getBanquets = () => API.get("/vendor/get-all-banquet");
export const removeBanquet = (banquetId: string) =>
  API.delete(`/vendor/banquet/delete/${banquetId}`);

//Projects
export const uploadRulesPortfolio = () =>
  API.get("/vendor/upload-image-rules/portfolio");
export const createProject = (formData: any) =>
  API.post("/vendor/project-image/new", formData);
export const makeFeatured = (projectId: any) =>
  API.post(`/vendor/project-image/featured/${projectId}`);
export const getProjects = () => API.get("/vendor/project-image/get-all");
export const removeProjectById = (id: string) =>
  API.delete(`/vendor/project-image/delete/${id}`);
export const createAlbum = (formData: any) =>
  API.post("/vendor/project-album/new", formData);
export const getAlbums = () => API.get("/vendor/project-album/get-all");
export const removeAlbumById = (id: string) =>
  API.delete(`/vendor/project-album/delete/${id}`);
export const createVideo = (formData: any) =>
  API.post("/vendor/project-video/new", formData);
export const getVideos = () => API.get("/vendor/project-video/get-all");
export const removeVideoById = (id: string) =>
  API.delete(`/vendor/project-video/delete/${id}`);

//Food Menu
export const createFoodMenu = (formData: any) =>
  API.post("/vendor/food-menu/new", formData);
export const getFoodMenu = () => API.get("/vendor/food-menu/get-all");
export const removeFoodMenu = (menuId: string) =>
  API.delete(`/vendor/food-menu/delete/${menuId}`);
export const uploadRulesFoodMenu = () =>
  API.get("/vendor/upload-image-rules/foodMenu");
export const createFoodMenuPhotos = (formData: any) =>
  API.post("/vendor/food-menu-image/new", formData);

//Reviews
export const createReview = (formData: any) =>
  API.post("/review/new", formData);
export const replyReview = (formData: any) =>
  API.post("/review/reply", formData);
export const getReviews = () => API.get("/review/get-all");
export const getPublicReviews = (vendorId: any) =>
  API.get(`/review/public/get-all/${vendorId}`);
export const getReviewsDistribution = (vendorId: any) =>
  API.get(`/review/public/review-distribution/${vendorId}`);

//Public Vendors List
export const vendorsList = () => API.get(`/vendor/list/get-all`);
export const publicVendorProfileById = (profileId: any) =>
  API.get(`/vendor/get-vendor-profile/${profileId}`);
export const galleryPhotos = ({ profileId }: { profileId: any }) =>
  API.get(`/vendor/gallery/${profileId}`);

//Vendor Packages
export const createPackage = (formData: any) =>
  API.post("/vendor/package/new", formData);
export const getPackage = () => API.get(`/vendor/package/get-all`);
export const removePackage = (id: any) =>
  API.delete(`/vendor/package/delete/${id}`);

//Vendor Faq
export const createFaq = (formData: any) =>
  API.post("/vendor/faq/new", formData);
export const getFaq = (profileId: any) =>
  API.get(`/vendor/faq/get-all/${profileId}`);
export const removeFaq = (id: any) => API.delete(`/vendor/faq/delete/${id}`);

//Payment
export const createPayment = () => API.get(`/payment/create`);
