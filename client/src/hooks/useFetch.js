import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utills/api";

const useFetch = (endPoint) => {
  const [data, setData] = useState();

  useEffect(async () => {
    makeApiCall();
  }, [endPoint]);

  const makeApiCall = async () => {
    const res = await fetchDataFromApi(endPoint);
    setData(res);
  };

  return {data};
};

export default useFetch;
