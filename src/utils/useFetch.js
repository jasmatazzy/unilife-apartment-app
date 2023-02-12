import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    parsedData: [],
    data: []
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setState({
            isLoaded: true,
            parsedData: result.response,
            data: result
          });
          console.log(result.response);
        },
        (error) => {
          setState({
            isLoaded: true,
            error: error,
          });
        }
      );
  }, [url]);

  return state;
};

export default useFetch;
