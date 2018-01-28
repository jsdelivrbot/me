const statsPath = 'https://stats.chrisvogt.me/reports/dashboard.json';

export default () => {
  return fetch(statsPath)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      // TODO: throw this
      return error;
    });
};