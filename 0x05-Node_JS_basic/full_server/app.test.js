const request = require('supertest');
const app = require('./app');  // Your Express app

describe('AppController', () => {
  test('GET / - should return "Hello Holberton School!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello Holberton School!');
  });
});

describe('StudentsController', () => {
  test('GET /students - should return a list of all students', async () => {
    const response = await request(app).get('/students');
    expect(response.status).toBe(200);
    // Here you can add further assertions if you have expected output
    expect(response.text).toMatch(/This is the list of our students/);
  });

  test('GET /students/:major with valid major - should return list of students', async () => {
    const response = await request(app).get('/students/CS');
    expect(response.status).toBe(200);
    expect(response.text).toMatch(/List: .+/);
  });

  test('GET /students/:major with invalid major - should return error', async () => {
    const response = await request(app).get('/students/invalidMajor');
    expect(response.status).toBe(500);
    expect(response.text).toBe('Major parameter must be CS or SWE');
  });
});

describe('Error handling', () => {
  test('GET /students - should return 500 if database is not available', async () => {
    const response = await request(app).get('/students');
    expect(response.status).toBe(500);
    expect(response.text).toBe('Cannot load the database');
  });
});
