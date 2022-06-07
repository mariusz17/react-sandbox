import { useState, useEffect } from "react";

function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const dataFetched = await response.json();

        setData(dataFetched);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}

export default useFetch;
