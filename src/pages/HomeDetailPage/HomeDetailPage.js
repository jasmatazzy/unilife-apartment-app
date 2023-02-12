import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bedroomIcon from "../../assets/icon-bedroom-blue.png";
import bathroomIcon from "../../assets/icon-bathroom-blue.png";
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
  } = useFetch(`https://unilife-server.herokuapp.com/properties/${homeID}`);
  // console.log(JSON.stringify(homeDetails?.address, null, 2));
  
  console.log(homeDetails);



  return (
    <div className="home-detail-page-container">
      <div className="main-div">
        <div className="home-detail-pictures">
          <img
            src={homeDetails?.images?.[0]}
            alt="main"
            id="home-detail-main-picture"
          />
          <div className="secondary-pictures-container">
            {homeDetails.images?.slice(1, 9).map((photoURL) => (
              <img src={photoURL} alt="add'l visual" />
            ))}
          </div>
        </div>
        <div className="address-and-buttons-container">
          <div className="address-info">
            <h1>
              {homeDetails.address?.street} {homeDetails.address?.city}{" "}
              {homeDetails.address?.postcode}
            </h1>
            <div className="home-detail-card-all">
              <div className="home-detail-card-div-top">
                <div>
                  <p>Bedrooms</p>
                  <img src={bedroomIcon} alt="bedroom" />
                  <span>{homeDetails?.bedroom_count}</span>
                </div>
                <div>
                  <p>Bathrooms</p>
                  <img src={bathroomIcon} alt="bath" />
                  <span>{homeDetails?.bathroom_count}</span>
                </div>
                <div>
                  <p>Property Type</p>
                  <span>{homeDetails?.property_type}</span>
                </div>
              </div>
              <div className="home-detail-card-div-bottom">
                <div>
                  <p>Price</p>
                  <span>£{homeDetails?.rent}</span>
                </div>
                <div>
                  <p>Furnished Type</p>
                  <span>{homeDetails?.furnished}</span>
                </div>
                <div>
                  <p>Available from</p>
                  <span>{homeDetails?.availability}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="address-buttons-container">
            <button className="shortlist-button">Shortlist</button>
            <button className="book-viewing-button">Book Viewing </button>
          </div>
        </div>
      </div>
      <div className="description-and-bedroom-prices-container">
        <div className="home-detail-description-container">
          <h2>Description</h2>
          <p>{homeDetails?.property_description}</p>
        </div>
        <div>
          <h2>Bedroom Prices</h2>
          <div className="home-detail-bedroom-prices">
            bedroom prices go here
          </div>
        </div>
      </div>
      <div className="key-features">
        <h2>Key Features</h2>
        {homeDetails.key_features?.map(
          (feature)=> <p>✔️{feature}</p>
        )}
      </div>
    </div>
  );
};

export default HomeDetailPage;
