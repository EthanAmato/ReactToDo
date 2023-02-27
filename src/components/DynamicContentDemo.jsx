function DynamicContentDemo() {

    let myMessage = "Hello From Code";

    let skyIsBlue = true;

    return (
        <>
            <h1>There is a message from my code:</h1>
            {/* 
            React lets you put dynamic content inside curly brackets
            this can be a variable, a jsx element/component, or even a function sometimes
             */}
            <p>{myMessage}</p>

             {/* Can even load content conditionally using ternary operators: */}
             {/* same as saying if skyisblue === true, load (whatever is after the '?'), else (whatever is after the ':') */}
             {skyIsBlue ? <p>This is the color of the sky</p>: <p>This will never display unless someone changes skyIsBlue to false</p>}
        </>
    );
}

export default DynamicContentDemo