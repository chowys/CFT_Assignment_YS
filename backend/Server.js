import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 8000;


// Use CORS
app.use(cors());

// Parse application/x-www-form-urlencoded (form data)
app.use(bodyParser.urlencoded({ extended: true }));

//Default Route
app.get('/', (req, res) => {
    res.send('Calulator Backend is working');
  });

//Addition logic, returning in application/json format
app.post('/add', (req, res) => {
  const { number1, number2 } = req.body;
  const result = parseFloat(number1) + parseFloat(number2);
  res.json({ result });
});

//Subtraction logic, returning in application/json format
app.post('/subtract', (req, res) => {
  const { number1, number2 } = req.body;
  const result = parseFloat(number1) - parseFloat(number2);
  res.json({ result });
});

// Create a server instance and listen for errors
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Listen for the 'error' event on the server
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Error: Port ${PORT} is already in use. Please choose a different port.`);
    process.exit(1); // Exits the process after the error message
  } else {
    console.error('An unexpected error occurred:', err);
    process.exit(1); // Exit if another unexpected error occurs
  }
});
