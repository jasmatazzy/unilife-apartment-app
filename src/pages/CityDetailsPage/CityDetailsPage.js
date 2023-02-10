import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./CityDetailsPage.css";
import useFetch from "../../utils/useFetch";

const CityDetailsPage = () => {
  //I need the city ID from the URL, so I'll import useParams

  const { cityID } = useParams();

  //now that I know the cityID, I need to call the city details data
  const [cityInfo, setCityInfo] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [cityHomeCount, setCityHomeCount] = useState([]);
  useEffect(() => {
    fetch(`https://unilife-server.herokuapp.com/properties/city/${cityID}`)
      .then((res) => res.json())
      .then((results) => {
        setAllResults(results);
        setCityHomeCount(results?.total);
        setCityInfo(results?.response);
        console.log(results);
        console.log(results.response[0].address);
      });
  }, []);

  return (
    <div className="city-details-page-container">
      {cityInfo.map((city) => (
        <div>
          Available: {city.availability} <br/>
          Deposit cost: {city.deposit}<br/>
          Description:{city.property_description}
          <br/>
          <br/>
          <br/>
          </div>
      ))}
      <Banner
        header="Search Accomodation"
        description="Whatever you’re after, we can help you find the right student accommodation for you."
      />
      <SearchBox />
    </div>
  );
};

export default CityDetailsPage;
