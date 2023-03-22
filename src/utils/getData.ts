export const getData = async <T>(url: string): Promise<T> => {
  const data = await fetch(url, { cache: "no-cache" })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return data;
};
