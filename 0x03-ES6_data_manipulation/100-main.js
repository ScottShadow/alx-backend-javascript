/**
 * This file tests the functionality of the weakMap in the 100-weak.js file.
 * It demonstrates how to use a weakMap to track the number of times a function is called.
 *
 * @fileoverview This file tests the functionality of the weakMap in the 100-weak.js file.
 */

// Import the queryAPI function and the weakMap from the 100-weak.js file
import { queryAPI, weakMap } from "./100-weak.js";

/**
 * The endpoint object represents a URL endpoint.
 * @typedef {Object} Endpoint
 * @property {string} protocol - The protocol of the URL (e.g. 'http' or 'https').
 * @property {string} name - The name of the endpoint (e.g. 'getUsers').
 */

/**
 * The endpoint object that we will use to test the weakMap.
 * @type {Endpoint}
 */
const endpoint = { protocol: 'http', name: 'getUsers' };

/**
 * Get the current value of the weakMap for the given endpoint.
 * This demonstrates how to access the value stored in the weakMap.
 * @param {Endpoint} endpoint - The endpoint to retrieve the value for.
 * @return {number} The current value of the weakMap for the given endpoint.
 */
weakMap.get(endpoint);

/**
 * Call the queryAPI function with the endpoint object.
 * This demonstrates how to use the weakMap to track the number of times
 * the queryAPI function is called.
 */
queryAPI(endpoint);
console.log(weakMap.get(endpoint));

/**
 * Call the queryAPI function with the endpoint object again.
 * This demonstrates how the weakMap will not increment the count
 * if the endpoint is already in the weakMap.
 */
queryAPI(endpoint);
console.log(weakMap.get(endpoint));

/**
 * Call the queryAPI function with the endpoint object multiple times.
 * This demonstrates how the weakMap will increment the count
 * each time the queryAPI function is called.
 */
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);

