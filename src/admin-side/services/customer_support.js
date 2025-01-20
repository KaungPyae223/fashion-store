import { getCookie } from "react-use-cookie";

export const answerQuestion = (id, answer) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/answer-question", {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      answer: answer,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const fetchCustomer_Support = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
