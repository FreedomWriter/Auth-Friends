import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://with-friend.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
