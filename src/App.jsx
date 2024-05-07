import React from "react";
import TodoList from "./components/TodoList";

function App(){
  const DATA = [
    {id:1,name:"Aditya",checked:false},
    {id:2,name:"Rushi",checked:true},
    {id:3,name:"Vedika",checked:false}
  ]

  return(    
    <div className="App">
      <h1>TodoList</h1>
    <TodoList task={DATA}/>
  </div>
  );
}

export default App;