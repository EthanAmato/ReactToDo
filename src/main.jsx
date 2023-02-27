import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoBoard from './components/TodoBoard'
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoBoard />
  </React.StrictMode>,
)
