import { getCookie } from "react-use-cookie";

export const logOut = (data) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("user_token")}`,
    },

    body: JSON.stringify(data),
  });
};
