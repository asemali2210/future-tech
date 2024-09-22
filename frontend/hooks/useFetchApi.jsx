import { useState, useEffect } from "react";

export default function useFetchApi(url) {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      async function fetchApi() {

        try {
            const req = await fetch(url);

            if (!req.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const res = await req.json();
            setData(res.data);
            setError(null); 
    
        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    fetchApi();

  }, [url])

  return { data, isLoading, error };
}