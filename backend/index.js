const express = require('express');
const cors = require('cors'); // Require the cors middleware
const app = express();
const PORT = 3000;

// Use the cors middleware
app.use(cors());

// Define a route to send a string to the frontend
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Process user details (e.g., save to database)
    // Return a response indicating success or failure
    res.json({ message: 'User details received successfully' });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
