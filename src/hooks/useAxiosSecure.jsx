import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const instanceSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const { user, userLoading } = useContext(AuthContext);
  if (userLoading) return;
  instanceSecure.interceptors.request.use((config) => {
    config.headers.authorization = user?.accessToken;
    return config;
  });
  return instanceSecure;
};

export default useAxiosSecure;
