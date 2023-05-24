import { useState } from "react";

const Tour = ({ tour }) => {
  const { price, source, location, days, description } = tour;
  let title = `Best Of ${location} In ${days} Days Tour`;
  const [fullDescription, setFullDescription] = useState(false);
  return (
    <div>
      <div className="image-container">
        <img src={source} alt={location} />
      </div>
      <div className="infos-container">
        <p>{title}</p>
        <p>{description}</p>
        {description.length >= 30 && (
          <span>{fullDescription ? "Read More" : "Show Less"}</span>
        )}
        <button>
          Join us for the Best Of {location} In {days} Days!
        </button>
        <button>Not Interested</button>
      </div>
    </div>
  );
};

export default Tour;
