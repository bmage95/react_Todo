import React from 'react'                         //import libraries default loaded screen 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'                       //import user libraries to infer
import './index.css'                              //use css of styling to parent directory

const DATA = [                                      //array of meta data stored in variable
  {id:"todo-0", name: "Eat", completed:true},
  {id:"todo-1", name: "Sleep", completed:false},
  {id:"todo-2", name: "Repeat", completed:false}
]

ReactDOM.createRoot(document.getElementById('root')).render(  //root function? tasks are taking data and going to user page w info
  <React.StrictMode>
    <App tasks={DATA}/>                               
  </React.StrictMode>,
)
