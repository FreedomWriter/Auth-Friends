import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://family-and-friends-server.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
