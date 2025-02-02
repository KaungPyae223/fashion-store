export const registerAccount = (name, email,password) => {
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + "/register", {
    method: "POST",
    body: JSON.stringify({
        name: name,
        email: email,
        password: password
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};


