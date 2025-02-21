import { getCookie } from "react-use-cookie";

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
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updatePassword = (data) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/admin/change-password", {
    method: "POST",
    body: JSON.stringify({
      old_password: data.Old_Password,
      new_password: data.password,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const restartPassword = (id) => {
  return fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/admin/restart-password/" + id,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getCookie("token")}`,
      },
    }
  );
};

export const logOut = () => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/logout", {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updateAdmin = (data) => {
  try {
    const adminUpdate = fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/admin/" + data.id,
      {
        method: "PUT",
        body: JSON.stringify({
          name: data.name,
          role: data.role,
          phone: data.phone,
          email: data.email,
          address: data.address,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    );

    if (adminUpdate.status != 200) {
      return adminUpdate;
    }

    if (data.photo) {
      const coverUpdateFormData = new FormData();

      coverUpdateFormData.append("id", data.id);
      coverUpdateFormData.append("photo", data.photo);

      const CoverUpdate = fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `admin/change-photo`,
        {
          method: "POST",
          body: coverUpdateFormData,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      if (CoverUpdate.status != 200) {
        return CoverUpdate;
      }
    }
  } catch (error) {
    console.error("Error", error);
  }
};

export const fetchAdmin = async (url) =>
  await fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
