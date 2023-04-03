import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const fetchData = async <T>(
  path: string,
  page: number = 1
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(
    `${path}/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}&include_adult=false`
  );
  return response.data;
};

export const fetchDataById = async <T>(
  path: string,
  id: string
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(
    `${path}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return response.data;
};
export const searchData = async <T>(
  path: string,
  query: any,
  page: number = 1
): Promise<T> => {
  const response: AxiosResponse<T> = await api.get(
    `${path}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}&page=${page}&include_adult=false`
  );
  return response.data;
};
