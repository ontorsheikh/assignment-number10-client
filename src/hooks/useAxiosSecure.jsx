import axios from "axios";
import { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const instanceSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user } = use(AuthContext);
  instanceSecure.interceptors.request.use((config) => {
    config.headers.Authorization = user.authToken;
    return config;
  });
  return instanceSecure;
};

export default useAxiosSecure;
