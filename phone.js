import React, {usestate} from "react";

function Clickcounter() {

    const [count,updateCount] = usestate(0);

    function clickhandler() {
        updateCount(count +1);
    }
    return (
        <div>
            <button onClick={clickHandler}>Click Me</button>
            <p>you have to click {count} times</p>
        </div>
    );
}

export default Clickcounter;
