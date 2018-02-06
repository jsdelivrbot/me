const projectsPath = 'https://chrisvogt.firebaseio.com/projects.json';

export default () => {
  return fetch(projectsPath)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      // TODO: throw this
      throw error;
    });
};