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