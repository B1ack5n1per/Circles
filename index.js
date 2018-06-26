const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started');
});
