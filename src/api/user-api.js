import axios from "../config/axios";

export const updateProfileImage = formData => {
  return axios.patch("/users", formData);
};

export const updateUserName = input => {
  return axios.patch("/users", input);
};
