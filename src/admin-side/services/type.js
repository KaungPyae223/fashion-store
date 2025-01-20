import { getCookie } from "react-use-cookie";

export const storeType = (category_id, type, gender) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/type", {
    method: "POST",
    body: JSON.stringify({
      category_id: category_id,
      type: type,
      gender: gender,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const deleteType = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/type/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updateType = (id, category_id, type, gender) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/type/" + id, {
    method: "PUT",
    body: JSON.stringify({
      category_id: category_id,
      type: type,
      gender: gender,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const fetchTypes = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
