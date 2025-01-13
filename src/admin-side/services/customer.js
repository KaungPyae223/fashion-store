export const fetchCustomer = async (url) => {
  const data = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());

  return data;
};
