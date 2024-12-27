export const answerQuestion = (id,answer) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/answer-question", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      answer: answer
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
    },
  });
};

export const fetchCustomer_Support = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
      Accept: "application/json",
    },
  }).then((res) => res.json());
