function DynamicContentDemo() {

    let myMessage = "Hello from Ethan on 3/15/23";

    let myHeader1Element = <h1>I AM BIG TEXT</h1>

    let skyIsBlue = true;

    return (
        <>
        <div className="container text-center">
            <h1>There is a message from my code:</h1>
            {/* 
            React lets you put dynamic content inside curly brackets
            this can be a variable, a jsx element/component, or even a function sometimes
        */}
            <p>{myMessage}</p>
            {myHeader1Element}
             {/* Can even load content conditionally using ternary operators: */}
             {/* same as saying if skyisblue === true, load (whatever is after the '?'), else (whatever is after the ':') */}
             {skyIsBlue ? <p>This is the color of the sky</p>: <p>This will never display unless someone changes skyIsBlue to false</p>}
        </div>
        </>
    );
}

export default DynamicContentDemo