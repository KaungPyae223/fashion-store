export const fetchOrder = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
  }).then((res) => res.json());

export const fetchAllPayments = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/all-payment", {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
    next: {
      tags: ["allPayments"],
    },
  });
  const json = await res.json();
  return json;
};
