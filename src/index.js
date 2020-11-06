const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello word!');
});

app.get('/ping', (req, res) => {
  // res.status(202).json({status: 'ok'});
  res.json({status: 'ok'});
});

app.listen(PORT);

// http.createServer(function(request, response) {
//   const responseData = {
//     status: 'ok!'
//   }
//   response.writeHead(200, {
//     'Content-Type': 'application/json'
//   })
//   response.end(JSON.stringify(responseData));
// }).listen(PORT);

// console.log(`Listening on port ${PORT}`);
