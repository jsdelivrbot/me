const projectsPath = 'https://chrisvogt.firebaseio.com/projects.json';

export default () => {
  return fetch(projectsPath)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
};