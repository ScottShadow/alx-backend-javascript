#!/usr/bin/node
function displayMessage(textInput) {
  if (typeof textInput === 'string') {
    process.stdout.write(textInput + '\n');
  } else {
    console.error('Invalid input: Text must be a string');
  }
}

module.exports = displayMessage;
