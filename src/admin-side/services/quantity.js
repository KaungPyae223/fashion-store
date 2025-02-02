import { getCookie } from "react-use-cookie";

export const fetchQuantity = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const updateQuantity = (id, quantity) => {
  return fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/product/update-quantity/" + id,
    {
      method: "PUT",
      body: JSON.stringify({
        qty: quantity,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    }
  );
};
