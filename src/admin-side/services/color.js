export const storeColor = (color) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/color", {
    method: "POST",
    body: JSON.stringify({
      color: color,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
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
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const deleteColor = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/color/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const fetchColor = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
