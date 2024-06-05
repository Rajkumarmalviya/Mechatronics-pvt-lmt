import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Input from './Inputs.js'
import ListTodo from './ListProject';
function Project() {
 const [state,setState]=useState('')

  const getProjects = () => {
   axios.get('/api/projects')
      .then((res) => {
        if (res.data) {
        
          setState({
            projects: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteProject = (id) => {
    axios.delete(`/api/projects/${id}`)
      .then((res) => {
        if (res.data) {
        getProjects();
        }
      })
      .catch((err) => console.log(err));
  };

    let { projects } = state;

    return (
      <div>
        <h1>My Todo(s)</h1>
        <Input getProjects={getProjects} />
        <ListTodo projects={projects} deleteProject={deleteProject} />
      </div>
    );
  
}

export default Project;