export const storeSize = (category_id, size) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/size", {
    method: "POST",
    body: JSON.stringify({
      category_id: category_id,
      size: size,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const deleteSize = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/size/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
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
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const fetchSizes = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
