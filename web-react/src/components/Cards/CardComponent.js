import React from "react";
import "../Cards/CardComponent.css";

const CardComponent = ({ title, content, imageSrc }) => {
  return (
    <div className="card">
      {imageSrc && (
        <img src={imageSrc} alt="Card Image" className="card-image" />
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardComponent;
