const socialPath = 'http://localhost:3030/api/v1/profiles.json';

export default () => {
  return fetch(socialPath)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
};