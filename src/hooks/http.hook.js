import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false),
        [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, header = {'Content-Type': 'application/json'}) => {

    setLoading(true);

    try {
      const response = await fetch(url, {method, body, header});
      const data = await response.json();

      setLoading(false);
      return data;
    } catch(e) {
      setLoading(false);
      setError(true);
      throw e;
    }
  }, [])

  return {loading, error, request}
}