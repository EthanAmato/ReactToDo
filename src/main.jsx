import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import TodoBoard from './components/TodoBoard'
import DemoSelect from './components/DemoSelect'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DemoSelect />
  </React.StrictMode>,
)
