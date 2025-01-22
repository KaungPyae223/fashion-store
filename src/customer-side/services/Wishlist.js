import { getCookie } from "react-use-cookie";

export const storeWishList = (product_id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/wishlist", {
    method: "POST",
    body: JSON.stringify({
      product_id: product_id,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("user_token")}`,
      Accept: "application/json",
    },
  });
};

export const deleteWishList = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/wishlist/"+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("user_token")}`,
      Accept: "application/json",
    },
  });
};
