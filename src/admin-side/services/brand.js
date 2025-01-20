import { getCookie } from "react-use-cookie";

export const storeBrand = (brand, photo) => {
  const formData = new FormData();

  formData.append("name", brand);
  formData.append("photo", photo);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/brand", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updateBrandName = (id, brand) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/brand/" + id, {
    method: "PUT",
    body: JSON.stringify({
      name: brand,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updateBrandPhoto = (id, photo) => {
  const formData = new FormData();

  formData.append("id", id);
  formData.append("photo", photo);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/brand/update-image", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const deleteBrand = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/brand/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const fetchBrand = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
