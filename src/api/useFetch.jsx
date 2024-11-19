import { useState, useEffect } from 'react';


/*
data : pour stocker les données récupérées.
isLoading : pour indiquer si les données sont en cours de chargement (valeur initiale true).
error : pour signaler s'il y a eu une erreur pendant la récupération.

*/
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
       
        if (window.sessionStorage.getItem(url) === null) {
          
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
          sessionStorage.setItem(url, JSON.stringify(data));
        } else {
         
          setData(JSON.parse(window.sessionStorage.getItem(url)));
        }
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}
