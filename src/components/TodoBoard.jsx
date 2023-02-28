import { useRef, useState } from 'react'
import ToDo from './ToDo';

function TodoBoard() {
  //List of 'ToDo' components - starting value is empty array since user hasn't put anything in it yet!
  const [toDos, setToDos] = useState([]);

  //Placeholder 'ref' which allows us to readily access an html element and its associated values on demand!
  const inputRef = useRef();

  function handleAdd() {
    //get the text that's currently inside our ref (the todo input)
    let currentText = inputRef.current.value;

    //add todo to list of current todos
    setToDos((current) => {
      let key = (new Date()).getTime()
      return [...current, 
        {
          key: key,
          text: currentText
        } 
      ]
    })

    //clear input
    inputRef.current.value="";
  }

  //given a unique key value (which we set when adding), delete/filter out a SPECIFIC todo
  function handleDelete(key) {    
    setToDos(() => {
      return toDos.filter((todo) => todo.key !== key)
    })
  }


  return (
    <div className='container board mt-3'>
      <div className='row text-center'>
        <h1>To Do List:</h1>
        <p>Click 'Add' to add a new to do and click a todo to cross it off!</p>
      </div>
      <div className='row justify-center text-center'>
        {toDos.map((element, i) => {
          return (
          <ToDo 
            key={element.key} 
            text={element.text}
            handleDelete ={() => handleDelete(element.key)}
          />
        )
        })}
      </div>
      <div className='row mt-3 d-flex justify-content-center'>
        <div className='col-md-6 '>
          <div className="input-group mb-3">
            <input type="text" className="form-control" ref={inputRef} placeholder="Write ToDo Task here..." aria-label="ToDoInput" />
            <div className="input-group-append">
              <button className="btn btn-primary h-100 m-0" type="button" onClick={handleAdd}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoBoard
