import { useState, useEffect } from "react";

export default function useFetchBlogs(url) {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      async function fetchBlogs() {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setData(data.data);

    
        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    fetchBlogs();

  }, [])

  return { data, tags, isLoading, error }
}