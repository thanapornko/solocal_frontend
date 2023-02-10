import axios from "../config/axios";

export const addDestination = destinationId =>
  axios.get(`/destinations/${destinationId}`);

export const addAllDestination = () =>
  axios.get(`/destinations`);

// export const addDestinationImage = destinationId =>
//   axios.get(`destinations/image/${destinationId}`);
