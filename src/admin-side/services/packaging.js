export const fetchDelivery = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/delivery", {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
    next: {
      tags: ["delivery"],
    },
  });
  const json = await res.json();
  return json;
};

export const deliveredPackage = (id, delivery_id) => {
  return fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/order/change-status/" + id,
    {
      method: "PUT",
      body: JSON.stringify({
        delivery_id: delivery_id,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    }
  );
};

export const fetchPackageData = async (url) =>
  await fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
