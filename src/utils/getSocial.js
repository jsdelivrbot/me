const socialPath = 'https://chrisvogt.firebaseio.com/profiles.json';

export default () => {
  return fetch(socialPath)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
};