import React from "react";

function Clickcounter() {

    const unformattedNumber = "1234567890";
   

    function formatted() {
        formattedphoneno= unformattedNumber.replace(/(\d{3})(\d{3})(\d+)/g, "($1) $2-$3");
    }
    return (
        <div>
            <button onClick={formatted}>Contact Us</button>
            <p> Pls contact us at {formattedphoneno} </p>
        </div>
    );
}

export default Clickcounter;
