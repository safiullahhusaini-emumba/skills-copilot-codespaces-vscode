// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Handle GET request to /comments
app.get('/comments', (req, res) => {
  res.send('Hello from comments!');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});