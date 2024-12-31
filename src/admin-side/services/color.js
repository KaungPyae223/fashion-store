export const storeColor = (color) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/color", {
    method: "POST",
    body: JSON.stringify({
      color: color,
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const updateColor = (id, color) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/color/" + id, {
    method: "PUT",
    body: JSON.stringify({
      color: color,
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const deleteColor = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/color/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const fetchColor = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
