export const storeSize = (category_id, size) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/size", {
    method: "POST",
    body: JSON.stringify({
      category_id: category_id,
      size: size,
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const deleteSize = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/size/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const updateSize = (id, category_id, size) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/size/" + id, {
    method: "PUT",
    body: JSON.stringify({
      category_id: category_id,
      size: size,
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const fetchSizes = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
