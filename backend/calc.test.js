//supertest for automated testing to test htttp requests
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { addRoute, subtractRoute } = require('./server')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/add', addRoute);
app.post('/subtract', subtractRoute);

describe('Calculator API', () => {
  test('should return the correct sum on /add', async () => {
    const response = await request(app)
      .post('/add')
      .send({ number1: '5', number2: '10' });
    
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(15);
  });

  test('should return the correct difference on /subtract', async () => {
    const response = await request(app)
      .post('/subtract')
      .send({ number1: '45', number2: '5' });
    
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(40);
  });
});

