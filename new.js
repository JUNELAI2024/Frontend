import React, { useState } from "react";

function Clickcounter() {
    const unformattedNumber = "1234567890";
  const formattedPhoneNo = unformattedNumber.replace(
    /(\d{3})(\d{3})(\d+)/g,
    "($1) $2-$3"
  );

 

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Contact Us</h5>
        <button className="btn btn-primary" onClick={Clickcounter}>
          Contact Us
        </button>
        <p className="card-text">Please call us at {formattedPhoneNo}</p>
      </div>
    </div>
  );
}

export default Clickcounter;