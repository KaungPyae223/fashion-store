import { getCookie } from "react-use-cookie";

export const storeCarousel = (data) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("subtitle", data.sub_title);
  formData.append("image", data.image);
  formData.append("link", data.link);
  formData.append("link_title", data.link_title);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/create-carousel", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updateAds = (ads) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/ads-change ", {
    method: "PUT",
    body: JSON.stringify({
      ads: ads,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const fetchPage = async (url) =>
  await fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const deleteCarousel = async (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/delete-carousel/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
