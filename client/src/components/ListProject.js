import React from 'react';

const ListProject = ({ projects, deleteProject }) => {
  return (
    <ul>
      {projects && projects.length > 0 ? (
        projects.map((project) => {
          return (
            <li key={project._id} onClick={() => deleteProject(project._id)}>
              {project.action}
            </li>
          );
        })
      ) : (
        <li>No todo(s) left</li>
      )}
    </ul>
  );
};

export default ListProject;