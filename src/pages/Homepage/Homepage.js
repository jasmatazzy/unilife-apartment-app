import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Banner from "../../components/Banner/Banner";
import SearchBox from "../../components/SearchBox/SearchBox";
import HomepageCompareSection from "../../components/HomepageCompareSection/HomepageCompareSection";
import searchIcon from "../../assets/icon-search.png";
import compareIcon from "../../assets/icon-compare.png";
import billsIcon from "../../assets/icon-bills.png";
import imageofMan from "../../assets/image-manOnPhone.png";
import { BsHeart } from "react-icons/bs";
import { MdRealEstateAgent } from "react-icons/md";
import HomeCardComponent from "../../components/HomeCardComponent/HomeCardComponent";
import useFetch from "../../utils/useFetch";

const Homepage = () => {
  const {
    isLoaded,
    error,
    data: cities,
  } = useFetch("https://unilife-server.herokuapp.com/cities?limit=35");

  const handleFindHomes = () => {
    console.log("home search handled");
  };

  return (
    <div className="homepage-container">
      <Banner
        header="Find student homes with bills included"
        description="A simple and faster way to search for student accommodation"
      />
      <SearchBox handleFindHomes={handleFindHomes} cities={cities} />
      <h2>Student accommodations in our top cities</h2>
      <div className="all-cities-container">
        <div>
          {error && <div>{error} error</div>}
          {!isLoaded && <div>Loading...</div>}
          {cities && <pre>{JSON.stringify(cities, null, 2)}</pre>}
        </div>
        <div>
          Meeeee
          {
            cities.map(
              (city)=> {
                return <HomeCardComponent 
                id={city._id}
                cityName={city.name}
                propCount={city.property_count}
                backgroundImage={city.image_url}
                />
              }
            )
          }
        </div>
        <button>
          <Link to={"/seeallcities"} className="link-to-button">
            See all cities
          </Link>
        </button>
      </div>
      <div className="homepage-compare-with-header">
        <h2>Compare all inclusive student homes.</h2>
        <div className="homepage-compare-section">
          <HomepageCompareSection
            image={searchIcon}
            callToAction="Search"
            description="Find your dream home in the perfect area near your university."
          />
          <HomepageCompareSection
            image={compareIcon}
            callToAction="Compare"
            description="Compare student accommodation to find the right home for you."
          />
          <HomepageCompareSection
            image={billsIcon}
            callToAction="Bills Included"
            description="Bills are included in all rent prices. No hidden fees.."
          />
        </div>
      </div>
      <div className="static-homepage-data">
        <div className="text-and-icons-div">
          <div className="icons-div">
            <span>
              <MdRealEstateAgent size={70} />
            </span>
            <span>
              <BsHeart size={70} />
            </span>
          </div>
          <div className="text-div">
            <h3>Best selection</h3>
            <p>
              Best selection of student accommodations. Never been easier to
              find a home that’s right for you.
            </p>
            <h3>Your favorite</h3>
            <p>
              Shortlist your favourite properties and send enquiries in one
              click.
            </p>
            <button>
              {" "}
              <Link to={"/citydetailspage"} className="link-to-button">
                Search & Compare
              </Link>
            </button>
          </div>
        </div>
        <img src={imageofMan} alt="man holding phone" />
      </div>
    </div>
  );
};

export default Homepage;
