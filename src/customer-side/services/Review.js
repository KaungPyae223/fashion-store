import { getCookie } from "react-use-cookie";

export const writeReview = (data) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/write-review", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("user_token")}`,
    },
  });
};


