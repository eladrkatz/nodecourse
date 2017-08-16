

const express = require('express');
const app = express();

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/user/:id', function (req, res, next) {
  res.json({elad:'moshe'});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})