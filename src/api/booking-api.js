import axios from "../config/axios";

export const createBooking = input =>
  axios.post("/bookings/:destinationId", input);
