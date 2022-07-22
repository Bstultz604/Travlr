//require('dotenv').load();
require('dotenv').config();

const createError = require('http-errors');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require('./app_api/database/db');

const apiRouter = require('./app_api/routes/api_index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Serves built app to Heroku Server
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/travlr_app/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html');
    })
}

else if (process.env.NODE_ENV === "development") {
    app.use(express.static(path.join(__dirname, 'travlr_app')));
}

//allow CORS
app.use('/api', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use('/api', apiRouter);

//catch unauthorized error and create 401
app.use((err, req, res, next) => {

    if (err.name === 'UnauthorizedError') {
        res
            .status(401)
            .json({ "message": err.name + " : " + err.message });
    }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

