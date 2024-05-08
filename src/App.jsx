import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./index.css";

function App(){
  const [data, setData] = useState([
    {id:1,name:"Aditya",checked:false},
    {id:2,name:"Rushi",checked:true},
    {id:3,name:"Vedika",checked:false}
  ]);

  return(    
    <div className="App">
      <h1>TodoList</h1>
      <TodoList task={data} setDATA={setData}/>
    </div>
  );
}

export default App;
