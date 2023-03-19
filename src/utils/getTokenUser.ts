export const getTokenUser = async (
  email: string,
  password: string,
  role: string
) => {
  const dataToSend = { email, password };
  const res = await fetch("http://localhost:5000/api/v1/login", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ ...dataToSend, role }),
  });
  const token: { token: string } = await res.json();

  return token;
};
