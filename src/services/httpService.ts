import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  },
});

export const getData = async (path: string) => {
  const response = await api.get(path);
  return response.data;
};
