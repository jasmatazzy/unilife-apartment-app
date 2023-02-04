import React, { useEffect, useState } from 'react'

const ApiGetCities = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://unilife-server.herokuapp.com/cities")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.response);
          console.log(result.response)
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>{items}</div>
    );
  }
}

export default ApiGetCities