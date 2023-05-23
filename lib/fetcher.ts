import axios, { AxiosRequestConfig } from 'axios';

export const fetcher = async <T>(
  url: string,
  config?: AxiosRequestConfig | undefined,
) => {
  let res = await axios.request<T>({
    url: url,
    method: 'get',
    ...config,
  });

  return res.data;
};
