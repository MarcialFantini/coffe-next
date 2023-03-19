export const getData = async <T>(url: string): Promise<T> => {
  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));

  return data;
};
