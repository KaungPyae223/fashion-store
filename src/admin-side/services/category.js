export const fetchCategory = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer 3BlHS7l6qKpEpCukKESpffk4Llg17LLfsGRUDEMT3ebb5733`,
        Accept: "application/json",
      },
    }).then((res) => res.json());