import React from "react";
import "./Tile.css";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((value, index) => (
        <p className="tile" key={index}>{value}</p>
      ))}
    </div>
  )
};
