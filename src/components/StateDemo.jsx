import { useState } from "react";

function StateDemo() {

    //React uses something called 'State' to keep track of variables/values that change
    //this, for the sake of brevity, will usually be as a result of user interaction (for example, clicking a button)

    //Format goes like this:
    const [numClicks, setNumClicks] = useState(0);
    //we can use numClicks as a variable to check on how many times we clicked a button (we initialized with '0' bc useState(initialValue))
    //setNumClicks is a special function solely for changing the value of numClicks - You CANNOT do something like 'numClicks = 4;'
    //React will not reflect the changes in the browser
    // UseState can take any value: strings, numbers, arrays, objects, even components.

    function handleClick() {
        // React has a tough time setting values that are based on previous values
        //to work around that issue, if you have such a case, use a callback like so
        setNumClicks((currentNumClicks)=>currentNumClicks+1)

        //the first parameter (currentNumClicks but you can name it whatever) will correspond to the most recent value
        //of your state. Whatever you return will become the new value of your state
    }

    return (
        <>
        {/* Notice it is not 'class' when using react, but instead 'className' with camelcase lettering */}
        <div className="container">
            <div className="row">
                You have clicked the button {numClicks} times
            </div>
            <div className="row">
                <div className="col-md-3">
                {/* when clicked, call the handleClick function
                it should be noted there is a whole suite of similar event handlers that correspond to different
                html elements: e.g. onChange, onSubmit, onInput, etc.
                */}
                <button className="btn btn-primary" onClick={handleClick}>Add +1</button>

                {/* resets numclicks back to 0 - not relying on past value so we don't need a callback */}
                <button className="btn btn-secondary" onClick={()=>setNumClicks(0)}>Clear</button>
                </div>
            </div>
        </div>
        </>
    );
}


export default StateDemo;