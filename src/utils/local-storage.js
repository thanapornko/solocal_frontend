const ACCESS_TOKEN = "ACCESS_TOKEN";

// fnc read local storage
export const getAccessToken = () =>
  localStorage.getItem(ACCESS_TOKEN);

export const setAccessToken = accessToken =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

export const removeAccessToken = () =>
  localStorage.removeItem(ACCESS_TOKEN);
