import axios from "../config/axios";

export const createBooking = input =>
  axios.post("/bookings/:guideId", input);

export const deleteBooking = bookingId =>
  axios.delete("/bookings/" + bookingId);

export const getBooking = userId =>
  axios.get("/bookings/" + userId);
