export const storePayment = (payment) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/payment", {
    method: "POST",
    body: JSON.stringify({
      payment: payment,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
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
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};



export const deletePayment = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/payment/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const fetchPayment = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
