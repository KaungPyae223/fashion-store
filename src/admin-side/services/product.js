export const storeProduct = (data) => {

  const formData = new FormData();
  
  formData.append('type_id', data.type_id);  
  formData.append('brand_id', data.brand_id);  
  formData.append('category_id', parseInt(data.category_id));  
  formData.append('color_id', data.color_id);  
  formData.append('name', data.name);  
  formData.append('cover_photo', data.cover_photo);  
  formData.append('price', parseInt(data.price));  
  formData.append('description', data.description);  
  formData.append('status', data.status);  
  formData.append('gender', data.gender); 
  formData.append('size_id', data.size_id); 

  data.details_photos.forEach((file, index) => {
    formData.append(`details_photos[${index}]`, file);
  });
  
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/product", {
    method: "POST",
    body: formData,
    headers: {
      "Accept": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const fetchProduct = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
