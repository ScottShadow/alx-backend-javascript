#!/usr/bin/node
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }/*  else {
      reject(new Error('API call failed'));
    } */
  });
}

module.exports = getPaymentTokenFromAPI;
