import { useEffect, useState } from "react";
import { URL } from "../config/api";

export const useData = (url: string) => {
  const [state, setState] = useState<any[]>([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
        setisLoading(true);
      const data = await (await fetch(URL + url)).json();
      setState(data);
    };

    dataFetch();
    setisLoading(false);
  }, [url]);

  return { data: state, isLoading };
};
