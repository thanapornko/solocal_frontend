import axios from "../config/axios";

export const updateProfileImage = formData => {
  // console.log(formData);
  return axios.patch("/users", formData);
};

export const updateUserName = input => {
  console.log("input----", input);
  return axios.patch("/users/name", input);
};
