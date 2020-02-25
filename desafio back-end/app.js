const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes
const routes = require('./src/routes');

const app = express();

app.use(cors({origin: [`http://localhost:3000`] }));

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json;charset=UTF-8');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cookieParser());

const server = http.createServer(app);
const port = process.env.PORT||5000
server.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
app.use('/', routes);

