import React from "react";
import bedroomIcon from "../../assets/icon-bedroom.png";
import bathroomIcon from "../../assets/icon-bathroom.png";
import locationIcon from "../../assets/icon-location.png";
import homeIcon from "../../assets/icon-single-home.png";
import "./HomeDetailCard.css";
import { useNavigate } from "react-router-dom";


const HomeDetailCard = ({ homeDetails }) => {
  const navigate = useNavigate();
 
  const {
    images,
    rent,
    bedroom_count,
    bathroom_count,
    property_type,
    furnished,
    address,
    _id
  } = homeDetails;
  console.log(rent);
  console.log(`rent is ${rent}, and bedroom count is ${bedroom_count}`);
  console.log("the images are reading as" + JSON.stringify(images, null, 2));
  console.log(
    "the first image is reading as" + JSON.stringify(images[0], null, 2)
  );
  return (
    <div className="homes-card">
      <img id="image-main" src={images.slice(0, 1)} alt="pic will go here" />
      <div className="blue-section">
        <div className="price-box">
          <div>Price:£{rent}</div>
          <div>Bills incl?</div>
        </div>
        <div className="all-rooms-info-box">
          <div className="bedroom-info-box">
            <img id="bedroomIcon" src={bedroomIcon} alt="bed, not working" />
            <div>🛌 {bedroom_count}</div>
          </div>
          <div className="bathroom-info-box">
            <img id="bathroomIcon" src={bathroomIcon} alt="bed, not working" />
            <div>🛁 {bathroom_count}</div>
          </div>
        </div>
      </div>
      <div className="more-details">
        <p>{property_type}</p>
        <p>{furnished}</p>
        <p>
          <img src={locationIcon} alt="location" /> {address.street},{" "}
          {address.postcode}, {address.city}
        </p>
      </div>
      <div
        className="view-home-button"
        onClick={() => navigate(`/homedetailpage/${_id}`)}
      >
        <img src={homeIcon} alt="view home icon" />
        <p>View Home</p>
      </div>
    </div>
  );
};

export default HomeDetailCard;
