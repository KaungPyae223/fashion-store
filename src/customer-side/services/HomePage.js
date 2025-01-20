import { getCookie } from "react-use-cookie";

export const fetchHome = (url) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const fetchCustomer = (url) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("user_token")}`,
    },
  }).then((res) => res.json());
