import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    error: null,
    isLoaded: false,
    data: {},
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setState({
            isLoaded: true,
            data: result.response,
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
  }, []);

  return state;
};

export default useFetch;
