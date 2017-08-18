// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

const port = process.env.PORT || 8080;

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  const language = req.headers["accept-language"].split(',')[0];
  const software = req.headers["user-agent"].match(/\(([^)]+)\)/)[0].replace(/\(|\)/g, '');

  res.json({
    ipaddress: ip,
    language: language,
    software: software
  });
});

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
