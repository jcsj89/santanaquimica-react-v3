import { useState } from "react";
import { URL } from "../config/api";

type FetchReturn = {
  data: Array<any> | undefined;
  loading: boolean;
  statusCode: number;
};

interface IHttpRequest {
  url: string;
  method: "GET" | "HEAD" | "POST" | "DELETE" | "PUT" | "PATCH";
  body?: any;
  action: (data: any) => void;
}

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  const sendHttpRequest = async ({
    url,
    method,
    body,
    action,
  }: IHttpRequest) => {
    if (loading === true) return;

    const headers =
      body === undefined ? undefined : { "Content-type": "application/json" };

    setLoading(true);

    let data: any = null; // alterar

    try {
      console.log("antes do fetch");

      data = await fetch(URL + url, {
        method: method.toUpperCase(),
        headers,
        body: JSON.stringify(body),
      });

      console.log("depois do fetch -- usePOst: ");

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }

    const resp = await data.json();

    action(resp);
  };

  return { error, sendHttpRequest, loading };
};
