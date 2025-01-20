import { getCookie } from "react-use-cookie";

export const fetchOrder = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const fetchAllPayments = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/all-payment", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
    next: {
      tags: ["allPayments"],
    },
  });
  const json = await res.json();
  return json;
};
