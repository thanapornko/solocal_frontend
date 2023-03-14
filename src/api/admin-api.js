import axios from "../config/axios";

export const getAllBooking = () => axios.get("/admin");
export const getBkkBooking = () => axios.get("/admin/bkk");
export const getTaoBooking = () => axios.get("/admin/tao");
export const getCnxBooking = () => axios.get("/admin/cnx");
