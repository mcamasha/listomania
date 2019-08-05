const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db_config = require('../config/db');
require('./config/passport')(passport);

// Импортируем роуты.
const board = require('./routes/board.route');
const boards = require('./routes/boards.route'); 
const users = require('./routes/users.route');

// Инициализируем express приложение.
const app = express();

// Устанавливаем соединение между mongoose и mongodb.
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || db_config.url;
mongoose.connect(mongoDB, { useNewUrlParser: true }); 
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Устанавливаем middleware обработчики.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// Подключаем роуты.
app.use('/board', board);
app.use('/boards', boards);
app.use('/users', users);

let port = 1234;
app.listen(port, () => {
    console.log('Server is running on port ' + port)
});
