export const storeProduct = (data) => {
  const formData = new FormData();

  formData.append("type_id", data.type_id);
  formData.append("brand_id", data.brand_id);
  formData.append("category_id", parseInt(data.category_id));
  formData.append("color_id", data.color_id);
  formData.append("name", data.name);
  formData.append("cover_photo", data.cover_photo);
  formData.append("price", parseInt(data.price));
  formData.append("description", data.description);
  formData.append("status", data.status);
  formData.append("gender", data.gender);
  formData.append("size_id", data.size_id);

  data.details_photos.forEach((file, index) => {
    formData.append(`details_photos[${index}]`, file);
  });

  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/product", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const updateProduct = (data) => {
  try {
    const productUpdate = fetch(
      process.env.NEXT_PUBLIC_BASE_URL + "/product/" + data.id,
      {
        method: "PUT",
        body: JSON.stringify({
          type_id: data.type_id,
          brand_id: data.brand_id,
          category_id: data.category_id,
          color_id: data.color_id,
          name: data.name,
          price: data.price,
          description: data.description,
          status: data.status,
          gender: data.gender,
          size_id: data.size_id,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }
    );

    if (productUpdate.status != 200) {
      return productUpdate;
    }

    if (data.cover_photo) {
      const coverUpdateFormData = new FormData();

      coverUpdateFormData.append("cover_photo", data.cover_photo);

      const CoverUpdate = fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `cover-update/${data.id}`,
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

    if (data.details_photos[0].file) {
      const detailsPhotoFormData = new FormData();

      data.details_photos.forEach((file, index) => {
        detailsPhotoFormData.append(`photos[${index}]`, file);
      });

      const detailsPhotoUpdate = fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `details-photo-update/${data.id}`,
        {
          method: "POST",
          body: coverUpdateFormData,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${getCookie("token")}`,
          },
        }
      );

      return detailsPhotoUpdate;
    }
  } catch (error) {
    console.error("Error", error);
  }
};

export const fetchProduct = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const deleteProduct = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/product/delete/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};

export const restoreProduct = (id) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/product/restore/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
};
