// hooks.js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ASYNC FUNCTION THAT WILL SEND RESPONSE BACK
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  // USE EFFECT 
  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
}

export { useFetch };