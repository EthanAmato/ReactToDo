import { useRef, useState } from "react";

function RefDemo() {
    const [uppercase, setUppercase] = useState(false)
    const inputFieldRef = useRef(null)


    function toggleInputCase() {
        // Accessing the ref using inputField.current
        //We esentially get a snapshot of that html element with all its current data (like typed words)
        const value = inputFieldRef.current.value;

        //if uppercase === true, we set the text inside our input to lowercase
        //else we set the text inside to uppercase
        inputFieldRef.current.value = uppercase ? value.toLowerCase() : value.toUpperCase();

        //set true -> false or false -> true
        setUppercase(previousValue => !previousValue)
    }

    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-6 d-flex m-auto justify-content-center">
                    {/* Referencing the ref from this.inputField */}
                    <input type="text" ref={inputFieldRef} />
                    {/* Call toggleInputCase function when button is clicked */}
                    <button type="button" onClick={toggleInputCase}>
                        Toggle Case
                    </button>
                </div>
            </div>
        </div>)
}

export default RefDemo;