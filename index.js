// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true });

// App Setup
// for HTTP logging and debuggine
app.use(morgan('combined'));
// for CORS Origin Resource Sharing - no config = allow all requests
app.use(cors());
// for parsing incoming requestes into JSON
app.use(bodyParser.json({ type: '*/*'}));
// call router with app
router(app)


// Server Setup
const port = process.env.PORT || 3090
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port: ', port);
