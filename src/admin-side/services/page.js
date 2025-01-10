export const storeCarousel = (data) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("subtitle", data.sub_title);
  formData.append("image", data.image);
  formData.append("link", data.link);
  formData.append("link_title", data.link_title);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/create-carousel", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer 6Is41MhZbTKtarHqYVvnxCp1rI7rTO4n6q3W1lQa00b8b1bd`,
    },
  });
};

export const fetchAllAds = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/ads", {
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: 86400,
      tags: ["allAds"],
    },
  });
  const json = await res.json();
  return json;
};

export const fetchAllCarousels = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/carousels", {
    headers: {
      Accept: "application/json",
    },
  });
  const json = await res.json();
  return json;
};

export const updateAds = (ads) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/ads-change ", {
    method: "PUT",
    body: JSON.stringify({
      ads: ads,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer 6Is41MhZbTKtarHqYVvnxCp1rI7rTO4n6q3W1lQa00b8b1bd`,
    },
  });
};
