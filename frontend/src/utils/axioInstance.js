import axios from "axios"
import { store } from "../redux/store"
import { signOutSuccess } from "../redux/slice/userSlice"


const BASE_URL = import.meta.env.VITE_BASE_URL || "https://task-manager-backend-8bmb.onrender.com/api"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

// Add a response interceptor to handle unauthorized errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear Redux state and redirect to login
      store.dispatch(signOutSuccess())
      window.location.href = "/login"
    }
    return Promise.reject(error)
  }
)


export default axiosInstance

