import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!readmore)}>{readmore ? "Show Less" : "Read More"}</button>
        </p>

        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not intested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
