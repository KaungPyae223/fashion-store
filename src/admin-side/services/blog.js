import { getCookie } from "react-use-cookie";

export const storeBlog = (data) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("photo", data.image);
  formData.append("content", data.content);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/blog", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updatePhoto = (id,image) => {
  const formData = new FormData();

  formData.append("photo", image);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/blog/update-photo/"+id, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updateBlog = (data) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/blog/" + data.id, {
    method: "PUT",
    body: JSON.stringify({
      title: data.title,
      content: data.content,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const deleteBlog = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/blog/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
