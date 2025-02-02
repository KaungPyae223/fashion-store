import { getCookie } from "react-use-cookie";

export const makePromotion = (id, startDate, endDate, discount) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/product/promotion/" + id, {
    method: "PUT",
    body: JSON.stringify({
      start: startDate,
      end: endDate,
      discount: discount,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
