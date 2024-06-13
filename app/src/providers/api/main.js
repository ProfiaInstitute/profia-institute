import axios from "axios";
import { useLocalStorage } from "@vueuse/core";

/** Import API URL from .env */
const ROOT_URL = import.meta.env.VITE_API_URL;

/** Capture the access token from local storage */
const access_token = useLocalStorage("x-token", null);

/** Create an axios instance */
const axiosInstance = axios.create({
  baseURL: ROOT_URL,
});

/** Create a request interceptor */
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token to header if exists
    if (access_token.value) {
      config.headers["Authorization"] = `Bearer ${access_token.value}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

/** Create a response interceptor */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized error
    if (error.response?.status === 401) {
      console.log("Unauthorized access. Logging out...");
      // Perform logout or redirect to login page
      // router.push("/login");
    }

    // Handle 403 Forbidden error
    if (error.response?.status === 403) {
      console.log("Access forbidden. Logging out...");
      // Perform logout or redirect to login page
      // router.push("/login");
    }

    return Promise.reject(error);
  }
);

/** Global method to get */
export const get = (uri) => axiosInstance.get(uri);

/** Global method to post */
export const post = (uri, payload) => axiosInstance.post(uri, payload);

/** Global method to delete */
export const deleteItem = (uri) => axiosInstance.delete(uri);
