import { useState } from "react";
import ComponentDemoChild from './ComponentDemoChild'


function ComponentDemoParent() {
    //default of blank string
    const [children, setChildren] = useState([])
    const childrenNames = ["Bryan", "David", "Jay", "Caitlyn", "Yuki"]
    const parent = "Ethan"

    function addNextChild() {
        let numChildren = children.length;
        let numNames = childrenNames.length
        if (numChildren >= numNames) return
        else {
            //spread operator (...) essentially copies an existing array and makes a brand new one
            setChildren((currentDisplayedChildren) => [...currentDisplayedChildren, childrenNames[numChildren]])
        }
    }

    return (
        <>
            <div className="container">
                <div className="row text-center">

                    <h1>Inheriting Components</h1>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-3 d-flex justify-content-center">
                        <button className="btn btn-primary" onClick={addNextChild}>Add Child</button>
                    </div>
                </div>
                {/* Children is an array of names, and we use the map function to use a callback on each one
                that returns a child element with unique attributes */}
                {children.map((childName, index) => {
                    return (
                        // 'name' and 'parentName' are COMPLETELY MADE UP NAMES. They are called props and they are used for
                        //transmitting information to and from child/parent components (you can even pass setState functions 
                        //which also lets a child element influence what goes on in parent element but thats too advanced rn)
                        <ComponentDemoChild 
                                key={index} 
                                name={childName} 
                                parentName={parent} 
                        />
                    );
                })}
            </div>
        </>
    );


}

export default ComponentDemoParent;