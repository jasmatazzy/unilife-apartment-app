import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import SearchBox from "../../components/SearchBox/SearchBox";
import HomeDetailCard from "../../components/HomeDetailCard/HomeDetailCard";
import "./CityDetailsPage.css";
import useFetch from "../../utils/useFetch";

const CityDetailsPage = () => {
  //I need the city ID from the URL, so I'll import useParams

  const { cityID } = useParams();

  //now that I know the cityID, I need to call the city details data
  const [home, setHome] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [cityHomeCount, setCityHomeCount] = useState([]);
  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/city/${cityID}`)
      .then((res) => res.json())
      .then((results) => {
        setAllResults(results);
        setCityHomeCount(results?.total);
        setHome(results?.response);
      });
  }, []);

  return (
    <div>
          {/* I need to use navigate here when view home element is clicked, something like this: <button onClick={()=>navigate(`/citydetails/${city?._id}`)}>{city.name}</button> */}
          <Banner
          key="2"
          header="Search Accomodation"
          description="Whatever you’re after, we can help you find the right student accommodation for you."
        />
        <SearchBox key="1" />
    <div className="city-details-page-container">
      {home.map((cityApartment) => (
        <HomeDetailCard 
        key= {cityApartment?.id}
        homeDetails={cityApartment} 
        />
      ))}
      
    </div>
    </div>
  )
};

export default CityDetailsPage;
