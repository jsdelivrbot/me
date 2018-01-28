const socialPath = 'https://chrisvogt.firebaseio.com/profiles.json';

export default () => {
  return fetch(socialPath)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      // TODO: throw this
      return error;
    });
};