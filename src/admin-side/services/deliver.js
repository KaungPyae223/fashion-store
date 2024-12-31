export const storeDeliver = (name, email, phone, address) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/deliver", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      address: address,
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const updateDeliver = (id,name,email,phone,address,status) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/deliver/" + id, {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      address: address,
      status:status
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept" : "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const deleteDeliver = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/deliver/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const fetchDeliveries = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
