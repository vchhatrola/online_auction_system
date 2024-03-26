// DisplayNumber.js
import React from "react";

function DisplayNumber({ username, number }) {
  return (
    <div className="display-number">
      <p>{username}: {number}</p>
    </div>
  );
}

export default DisplayNumber;



