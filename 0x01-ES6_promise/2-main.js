import handleResponseFromAPI from './2-then.js';

const promise = Promise.resolve();
handleResponseFromAPI(promise).then((result) => console.log(result)).catch((error) => console.error(error));
