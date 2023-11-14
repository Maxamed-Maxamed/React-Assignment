import { useEffect, useState } from "react";
import { getTvShow } from '../api/tmdb-api'

const useTV = id => {
  const [tv, setTV] = useState(null);
  useEffect(() => {
    getTvShow(id).then(tv => {
      setTV(tv);
    });
  }, [id]);
  return [tv, setTV];
};

export default useTV;
