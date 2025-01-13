export const fetchHome = (url) =>
  fetch(url, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
