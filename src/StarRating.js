import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />

)

export default function StarRating({ totalStars = 5 }) {
  const [selectedStar, setSelectedStars] = useState(0);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
        key={i}
        selected={selectedStar > i} 
        onSelect={() => setSelectedStars(i+1)}
        />
      ))}
      <p>
        {selectedStar} of {totalStars} stars
      </p>
    </>
  );
}
