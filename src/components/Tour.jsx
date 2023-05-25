import { useState } from "react";

const Tour = ({ tour }) => {
  let { price, source, location, days, description } = tour;
  let title = `Best Of ${location} In ${days} Days Tour`;
  const [fullDescription, setFullDescription] = useState(false);
  const [displayedDescription, setDisplayDescription] = useState(
    description.slice(0, 100)
  );

  const toggleLess = () => {
    setFullDescription(!fullDescription);
    setDisplayDescription(description.slice(0, 100));
  };

  const toggleMore = () => {
    setFullDescription(!fullDescription);
    setDisplayDescription(description);
  };
  return (
    <div className="card">
      <div className="image-container">
        <img src={source} alt={location} />
      </div>
      <div className="infos-container">
        <p className="title">{title}</p>
        <p className="description">{displayedDescription}</p>
        {description.length >= 30 && !fullDescription ? (
          <p className="read-more" onClick={toggleMore}>
            Read More
          </p>
        ) : (
          <p className="show-less" onClick={toggleLess}>
            Show Less
          </p>
        )}
        <div className="buttons-container">
          <button className="join-tour">
            Join us for the Best Of {location} In {days} Days!
          </button>
          <button className="not-interested">Not Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
