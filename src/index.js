const express = require('express');
const bodyParser = require('body-parser');
const HTTPStatus = require('http-status');
// compression
// helmet
// cors

const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello word!');
});

app.get('/users/:idUser', (req, res) => {
  if (parseInt(req.params.idUser) === 123) {
    res.status(HTTPStatus.OK).json({'found': true});
  } else {
    res.status(HTTPStatus.NOT_FOUND).json({'found': false});
  }

});

app.get('/ping', (req, res) => {
  // res.status(202).json({status: 'ok'});
  res.json({status: 'ok'});
});

app.post('/', (req, res) => {
  // console.log('body', req.body);
  console.log('body', JSON.stringify(req.body, null, 2));

  res.json({ 'ok': true });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error: ', err);
    throw err;
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});

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
