#!/usr/bin/node
/**
 * This function returns a string indicating the preference for using const.
 *
 * @return {string} A string indicating the preference for using const.
 */
export function taskFirst() {
    // Declare a constant variable with the value 'I prefer const when I can.'
    const task = 'I prefer const when I can.';

    // Return the value of the constant variable
    return task;
}

/**
 * Returns a string indicating that 'is okay'.
 *
 * @return {string} The string ' is okay'.
 */
export function getLast() {
    // Returns the string ' is okay'.
    // This function is used to demonstrate the use of const in the taskFirst function.
    return ' is okay';
}

/**
 * This function demonstrates the use of const and let.
 * It returns a string indicating the preference for using const.
 *
 * @return {string} A string indicating the preference for using const.
 */
export function taskNext() {
    // Declare a variable using let to indicate that the variable's value can change.
    let combination = 'But sometimes let';

    // Append the value of the getLast() function to the combination variable.
    // The getLast() function returns the string ' is okay'.
    combination += getLast();

    // Return the value of the combination variable.
    return combination;
}
