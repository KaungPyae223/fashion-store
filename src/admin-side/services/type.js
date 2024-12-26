export const storeType = (category_id, type) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/type", {
    method: "POST",
    body: JSON.stringify({
      category_id: category_id,
      type: type,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const deleteType = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/type/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const updateType = (id, category_id, type) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/type/" + id, {
    method: "PUT",
    body: JSON.stringify({
      category_id: category_id,
      type: type,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const fetchTypes = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
