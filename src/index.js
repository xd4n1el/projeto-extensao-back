const express = require('express');
const cors = require('cors');
const http = require('http');

require('./database/mongodb');
const errorsRouter = require('./routers/errors');
const commentsRouter = require('./routers/comments');

const PORT = process.env.PORT || 3001;

const app = express();
const server = http.Server(app);

const settings = {
    origin: [ 'https://projeto-extensao-xd4n1el.web.app', 'https://projeto-extensao-xd4n1el.firebaseapp.com', 'http://localhost:3000',],
    optionsSuccessStatus: 200,
    methods: 'GET,POST'
};

app.use(cors(settings));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(commentsRouter);
app.use(errorsRouter);

server.listen(PORT);