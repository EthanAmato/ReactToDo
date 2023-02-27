import { useState } from "react";

//alternatively you can just use the special react term 'props' (.e.g function ComponentDemoChild(props) {}) and
//call each prop like props.name or props.parentName
function ComponentDemoChild({name, parentName}) {

    return (
        <>
            <h2>Hi my name is {name} and I am the child of {parentName}</h2>
        </>
    );


}

export default ComponentDemoChild;