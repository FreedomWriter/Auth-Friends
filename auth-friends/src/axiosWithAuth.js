import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: `http://localhost:5000/api`,

    // baseURL: "https://family-and-friends-server.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
