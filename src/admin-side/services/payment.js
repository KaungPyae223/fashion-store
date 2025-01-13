export const storePayment = (payment) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/payment", {
    method: "POST",
    body: JSON.stringify({
      payment: payment,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updatePayment = (id, payment, status) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/payment/" + id, {
    method: "PUT",
    body: JSON.stringify({
      payment: payment,
      status: status,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const deletePayment = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/payment/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const fetchPayment = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
