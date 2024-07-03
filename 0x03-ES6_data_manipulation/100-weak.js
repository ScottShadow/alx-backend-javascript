/**
 * A weak map of endpoints and the number of calls made.
 * Weak maps are used to track the number of calls made to an API's endpoint.
 * The key of the weak map is an object representing the endpoint and the value is
 * the number of times the endpoint has been called.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 * This constant is used to track the number of calls made to an API's endpoint.
 * If the number of calls exceeds this constant, an error is thrown.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * This function tracks the number of calls made to an API's endpoint.
 * It uses a weak map to store the number of calls made to each endpoint.
 * If the number of calls to an endpoint exceeds the maximum number of calls,
 * an error is thrown.
 * @author Bezaleel Olakunori <https://github.com/ScottShadow>
 */
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weak map
  if (!weakMap.has(endpoint)) {
    // If the endpoint is not in the weak map, set it to 0
    weakMap.set(endpoint, 0);
  }
  // Increment the number of calls to the endpoint
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  // Check if the number of calls to the endpoint exceeds the maximum number of calls
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    // If the number of calls exceeds the maximum number of calls, throw an error
    throw new Error('Endpoint load is high');
  }
}

