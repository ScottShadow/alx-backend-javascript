#!/usr/bin/node

const welcomeText = 'Welcome to Holberton School, what is your name?';

// Set encoding for stdin
process.stdin.setEncoding('utf-8');

// Helper function to handle input
function handleInput(input) {
  if (input === null) {
    throw Error('NAME INVALID');
  }
  const name = input.trim();
  console.log(`Your name is: ${name}`);
}

// Handle piped input or user interaction via terminal
if (!process.stdin.isTTY) {
  // Non-TTY: Input is coming from a pipe
  let data = '';
  process.stdin.on('data', (input) => {
    process.stdout.write(`${welcomeText}\n`);
    data += input;
    handleInput(data);
  });

  process.stdin.on('end', () => {
    process.exit(0);
  });
} else {
  // TTY: Input is coming from user interaction
  process.stdout.write(`${welcomeText}\n`);

  process.stdin.on('data', handleInput);
}

// Graceful exit on SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
