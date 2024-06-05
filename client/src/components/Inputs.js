import React, { useState } from 'react';
import axios from 'axios';
function Inputs(props){
  const[todo,setTodo]=useState('')

 const addProject = () => {
   const task = { action: todo.action };
    if (task.action && task.action.length > 0) {
      // let data=JSON.stringify(task)
      axios.post('http://localhost:5000/projects', task)
        .then((res) => {
          console.log(res);
          if (res.data) {
          // props.getProjects();
            setTodo({ action: '' });
            console.log('post is working');
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };

 const handleChange = (e) => {
    setTodo({
      action: e.target.value,
    });
  };

    let { action } = todo;
    return (
      <div>
        <input type="text" onChange={handleChange} value={action} />
        <button onClick={addProject}>add project</button>
      </div>
    );
  }

export default Inputs;