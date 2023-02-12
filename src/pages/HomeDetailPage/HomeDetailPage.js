import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import "./HomeDetailPage.css";

const HomeDetailPage = () => {
  //functioning api call
  // https://unilife-server.herokuapp.com/properties/:homeID
  const { homeID } = useParams();

  const {
    isLoaded,
    error,
    data: homeDetails,
  } = useFetch("https://unilife-server.herokuapp.com/properties/6364c5fdfff841b8724bacc9");
console.log(JSON.stringify(homeDetails, null, 2))


  //from apartment, the component will get: mainImage, otherImages, address, bedrooms,
  // bathrooms, home type, price, furnishedType, availability, description, keyFeaturesArray,
  // bedroomPricesArray

  return <div> some stufff</div>;
};

export default HomeDetailPage;
