import { useState } from "react";

const Tour = ({ tour, joinTour, removeTour }) => {
  let { price, source, location, days, description, joined } = tour;
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
    <article className={joined ? "joined-tour" : "single-tour"}>
      <img src={source} alt={title} className="img" />
      <span className="tour-price">$ {price}</span>
      <div className="tour-info">
        <h5>{title}</h5>
        <h5>{joined && "joined"}</h5>
        <p>
          {displayedDescription}
          {description.length >= 30 && !fullDescription ? (
            <span className="info-btn" onClick={toggleMore}>
              Read More
            </span>
          ) : (
            <span className="info-btn" onClick={toggleLess}>
              Show Less
            </span>
          )}
        </p>
        {!joined && (
          <>
            <button
              className="join-btn btn-block btn"
              onClick={() => joinTour(location)}
            >
              Join us !
            </button>
            <button
              className="delete-btn btn-block btn"
              onClick={() => removeTour(location)}
            >
              Not Interested
            </button>
          </>
        )}
      </div>
    </article>
  );
};

export default Tour;
