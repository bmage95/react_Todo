import React from "react";

function TodoList(props) {

    const handleEdit = (id) => {
        const taskToEdit = props.DATA.find(task => task.id === id);     //finding via id
      
        const edited_name = window.prompt('Edit task name:', taskToEdit.name);      //prompt for input

        const new_arr = props.DATA.map(task => {        //copy and update specific name
          if (task.id === id) {
            return { ...task, name: edited_name };          //skips rest except name change
          }
          return task;
        });
      
        props.setDATA(new_arr); //updated
    };

    const handleDelete = (id) => {

        const new_arr = props.DATA.filter(task => task.id !== id);  //use filter to iterate over ids and skips one that we dont want and keep rest in new array

        props.setDATA(new_arr); // updated
    };

    const handleComplete = (id) => {

        const new_arr = props.DATA.map(task => {
          if (task.id === id) {
            return { ...task, checked: !task.checked };     //same as above, flips boolean value
          }
          return task;
        });
      
        // updated
        props.setDATA(new_arr); 
      };

    const PreExistingList = props.task?.map((task) => (
      <li key={task.id}>
        {task.name} - {task.checked ? "Checked" : "Not Checked"}

        <button onClick={() => handleEdit(task.id)}>Edit</button>
        <button onClick={() => handleDelete(task.id)}>Delete</button>
        <button onClick={() => handleComplete(task.id)}>Completed</button>
      </li>
    ));      
    return <ul>{PreExistingList}</ul>;
  }

export default TodoList;