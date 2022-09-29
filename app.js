const express = require('express');
const app = express();

app.get('/names', (req, res) => {
  res.send('aditya');
});

app.listen(5050, () => {
  console.log('Server is running on port 5050');
});
