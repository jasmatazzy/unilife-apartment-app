import React from "react";
import bedroomIcon from "../../assets/icon-bedroom.png";
import "./HomeDetailCard.css";

const HomeDetailCard = ({homeDetails}) => {
// console.log(JSON.stringify(homeDetails, null, 2))
const {images, rent, bedroom_count, bathroom_count, property_type, furnished}= homeDetails;
console.log(rent)
console.log(`rent is ${rent}, and bedroom count is ${bedroom_count}`)
console.log('the images are reading as' + JSON.stringify(images, null, 2))
console.log('the first image is reading as' + JSON.stringify(images[0], null, 2))
  return (
    <div className="homes-card">
      <img src={images.slice(0,1)} alt="pic will go here" />
      <div>
        blue banner will go here
        <div>
          price box
          <div>Price:£{rent}</div>
          <div>Bills incl?</div>
        </div>
        <div>
          Room count box
          <div>
            Bedrooms
            <div>bedroom icon ⬇️</div>
            <img id="bedroomIcon" src={bedroomIcon} alt="bed, not working" />
            <div>🛌 {bedroom_count}</div>
          </div>
          <div>
            Bath info
            <div>bath icon ⬇️</div>
            <div>🛁 {bathroom_count}</div>
          </div>
        </div>
      </div>
      <div>
        More Details, white section
        {/* flex column with space between on three text elements */}
        <h3>{property_type}</h3>
        <h3>{furnished}</h3>
        <p>
          {/* {homeDetails.address.street}, {homeDetails.address.home}, {homeDetails.address.postcode} */}
        </p>
      </div>
      <div>
        <img src="" alt="view home icon" />
        <p>🏠 View Home</p>
      </div>
    </div>
  );
};

export default HomeDetailCard;
