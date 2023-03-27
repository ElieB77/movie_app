import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // params: {
  //   api_key: process.env.NEXT_PUBLIC_API_KEY,
  // },
});

export const getData = async <T>(
  path: string,
  page: number = 1
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(
    `${path}/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`
  );
  return response.data;
};
