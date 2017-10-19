const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Setup logger
app.use(morgan('tiny'));

// Serve static assets
app.use(express.static(path.resolve(__dirname ,'dist')));

// Always return the main index.html, so react-router render the route in the client
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
