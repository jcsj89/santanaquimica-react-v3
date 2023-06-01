import { useEffect, useState } from "react";
import { URL } from "../config/api";

// interface Props {
//   url: string;
//   method: "GET" | "HEAD" | "POST" | "DELETE" | "PUT" | "PATCH";
//   start: boolean;
// }

export const useData = (url: string) => {
  const [state, setState] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);

      let data: any; // alterar

      try {
        data = await fetch(URL + url);
      } catch (error) {
        console.log(error);
      }

      const resp = await data.json();

      setTimeout(() => {
        setState(resp);
      }, 700);
    };

    dataFetch();

    setLoading(false);
  }, [url]);

  return { data: state, loading };
};
