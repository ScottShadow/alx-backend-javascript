/**
 * Creates an Int8TypedArray with the specified length and sets the value at the given position.
 *
 * @param {number} length - The length of the Int8TypedArray.
 * @param {number} position - The position at which to set the value.
 * @param {number} value - The value to set at the given position.
 * @return {DataView} - The DataView object representing the created Int8TypedArray.
 * @throws {Error} - If the position is outside the range of the length.
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the range of the length
  if (position >= length) {
    throw new Error('Position outside range');
  }
  // Create a new DataView object representing the Int8TypedArray
  const bufferView = new DataView(new ArrayBuffer(length));

  // Set the value at the given position
  bufferView.setInt8(position, value);

  // Return the DataView object representing the created Int8TypedArray
  return bufferView;
}
