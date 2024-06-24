import axios from "axios";

const API_BASE_URL = "https://expense-tracker-api-3puk.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
});
