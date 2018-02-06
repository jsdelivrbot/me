const statsPath = 'https://stats.chrisvogt.me/reports/dashboard.json';

export default () => {
  return fetch(statsPath)
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
};