import { RequestInit } from 'next/dist/server/web/spec-extension/request';

const api = process.env.NEXT_PUBLIC_API;

export const request = async (path: string, method: string, headers?: object, body?: object) => {
  const url = `${api}${path}`;
  const options: RequestInit = {
    method,
    body: JSON.stringify(body),
    headers: {
      ...headers,
    },
    credentials: 'include',
  };
  const res = await fetch(url, options);
  return res;
};
