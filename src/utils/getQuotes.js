const quotesPath = 'https://cdn.rawgit.com/chrisvogt/49b51791348a09cbddb0/raw/585d1712885dda5c13d63c17b5e093d543640e42/book-quotes.json';

export const getQuotes = () => {
  return fetch(quotesPath)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      // TODO: throw this
      return error;
    });
};