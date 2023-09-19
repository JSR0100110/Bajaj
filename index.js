const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Sample data
const data = {
    status: 'Success',
    user_id: '12345',
    college_email_id: 'user@example.com',
    college_roll_number: 'C12345',
    num_array: [1, 2, 3, 4, 5],
    alphabet_array: ['A', 'B', 'C', 'D', 'E'],
    highest_alphabet: 'E',
};

// Endpoint for rendering the EJS template
app.get('/', (req, res) => {
  res.render('app', data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
