import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeCardComponent.css";

const HomeCardComponent = ({ city }) => {
  //activate navigate
  const navigate = useNavigate();
  return (
      <div onClick={()=>navigate(`/citydetails/${city?._id}`)}
        className="home-card-component-container"
        style={{
          backgroundImage: `url(${city?.image_url})`,
        }}
      >
        <h2>{city?.name}</h2>
        {city?.property_count} properties
      </div>
  );
};

export default HomeCardComponent;
