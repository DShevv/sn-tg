import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData([]);
    setError(null);

    const source = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return [data, isLoading, error];
}
