const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./routes/index');
const playRouter = require('./routes/play');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/play', playRouter);

console.log("Starting server.");
app.listen(process.env.PORT || 3000);