import { RequestInit } from 'next/dist/server/web/spec-extension/request';

const api = process.env.NEXT_PUBLIC_API;

export const request = async (path: string, method: string, body?: object, headers?: object) => {
  const url = `${api}${path}`;
  const options: RequestInit = {
    method,
    body: JSON.stringify(body),
    headers: {
      ...headers,
    },
  };
  const res = await fetch(url, options);
  return res;
};
