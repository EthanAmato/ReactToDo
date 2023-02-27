import { useState } from 'react';
import '../styles/todo.css'


const defaultHeader = "Untitled To Do"

function ToDo({text, handleDelete }) {    
    const [isComplete, setIsComplete] = useState(false);

    //switch between true and false whenever todo is clicked
    function handleClick() {
        setIsComplete((curr) => !curr)
    }


    return (
        //when this div is clicked (which holds all our relevant data), set off the handleClick function
        <div 
            className='row gy-3 todo' 
            onClick={handleClick}
            style={isComplete ? {backgroundColor:'gray'} : {}}
        >
            {/* Conditionally style this todo using ternary operators  */}
            <div className="row">
                <h2 style={isComplete ? {textDecoration:'line-through'} : {}}>{text || defaultHeader}</h2>
            </div>
            <div className="row">
                <div className='col-md-2 p-0'>
                    {/* Delete this todo by running the function handed to child by parent - already has key built in for safe deletion */}
                    <button className='btn btn-danger w-75 px-0 m-0 my-1' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default ToDo;