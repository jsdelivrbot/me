const projectsPath = 'http://localhost:3030/api/v1/projects.json';

export default () => {
  return fetch(projectsPath)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
};