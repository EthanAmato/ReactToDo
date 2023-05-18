import { useState } from "react";
import "../styles/todo.css";

const defaultHeader = "Untitled To Do";

function ToDo({ text, id, handleDelete, handleSave }) {
  const [isComplete, setIsComplete] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(text);

  //switch between true and false whenever todo is clicked
  function handleClick() {
    setIsComplete((curr) => !curr);
  }

  if (isEditMode) {
    return (
      <div className="row gy-3">
        <div
          className="col-md-8 todo m-auto"
          onClick={handleClick}
          style={isComplete ? { backgroundColor: "gray" } : {}}
        >
          {/* Conditionally style this todo using ternary operators  */}
          <div className="row pt-3 text-box">
            <input
              type="text"
              className="form-control"
              value={editedItem || defaultHeader}
              onChange={(e) => setEditedItem(e.target.value)}
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="row">
            <div className="col-md-2 p-0">
              {/* Delete this todo by running the function handed to child by parent - already has key built in for safe deletion */}
              <button
                className="btn btn-danger w-75 px-0 m-0 my-1"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
            <div className="col-md-2 p-0">
              <button
                className="btn btn-warning w-75 px-0 m-0 my-1"
                onClick={() => {
                  setIsEditMode(false);
                  handleSave(id, editedItem);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    //when this div is clicked (which holds all our relevant data), set off the handleClick function
    <div className="row gy-3">
      <div
        className="col-md-8 todo m-auto"
        onClick={handleClick}
        style={isComplete ? { backgroundColor: "gray" } : {}}
      >
        {/* Conditionally style this todo using ternary operators  */}
        <div className="row pt-3 text-box">
          <p
            className="text"
            style={isComplete ? { textDecoration: "line-through" } : {}}
          >
            {text || defaultHeader}
          </p>
        </div>
        <div className="row">
          <div className="col-md-2 p-0">
            {/* Delete this todo by running the function handed to child by parent - already has key built in for safe deletion */}
            <button
              className="btn btn-danger w-75 px-0 m-0 my-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <div className="col-md-2 p-0">
            <button
              className="btn btn-warning w-75 px-0 m-0 my-1"
              onClick={() => setIsEditMode((curr) => !curr)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
