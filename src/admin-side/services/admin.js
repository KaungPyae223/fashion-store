export const storeAdmin = (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("role", data.role);
  formData.append("photo", data.photo);
  formData.append("address", data.address);

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/admin", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer 6Is41MhZbTKtarHqYVvnxCp1rI7rTO4n6q3W1lQa00b8b1bd`,
    },
  });
};



export const fetchAdmin = async (url) =>
  await fetch(url, {
    headers: {
      Authorization: `Bearer 6Is41MhZbTKtarHqYVvnxCp1rI7rTO4n6q3W1lQa00b8b1bd`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
