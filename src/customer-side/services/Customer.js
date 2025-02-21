import { getCookie } from "react-use-cookie";

export const updateCustomer = (data) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/update-customer", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("user_token")}`,
    },
    body: JSON.stringify(data),
  });
};

export const askQuestion = (data) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/ask-question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("user_token")}`,
    },

    body: JSON.stringify(data),
  });
};

export const updatePassword = (data) => {

  
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/customer/change-password", {
    method: "POST",
    body: JSON.stringify({
      old_password: data.oldPassword,
      new_password: data.newPassword,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("user_token")}`,
    },
  });
};
