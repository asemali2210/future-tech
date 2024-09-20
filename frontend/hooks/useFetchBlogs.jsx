import { useState, useEffect } from "react";

export default function useFetchBlogs() {

  const [blogsData, setBlogsData] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      async function fetchBlogs() {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`);
            const data = await res.json();
            setBlogsData(data.data);
    
            // extract tags 
            const extractedTags = data.data.map(blog => blog.attributes.tags).flat().concat('All').reverse();
            setTags([...new Set(extractedTags)]); // Avoid duplicates

    
        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    fetchBlogs();

  }, [])

  return { blogsData, tags, isLoading, error }
}