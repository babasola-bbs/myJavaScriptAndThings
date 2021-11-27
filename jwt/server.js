const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

const auth = require('./middlewares/auth');
const error = require('./middlewares/auth');

const unless = require('express-unless');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(
        () => {
            console.log('Database Connected');
        },
        (error) => {
            console.log('Database Cannnot Be Connected: ' + error);
        }
    );

    auth.authenticateToken.unless = unless;
    app.use(
        auth.authenticateToken.unless({
            path: [
                {url: "/users/login", methods: ["POST"]},
                {url: "/users/register", methods: ["POST"]},
            ],
        }), function (req, res, next){next()}
    );

    app.use(express.json(), function (req, res, next){next()});
    app.use("/users", require("./routes/user.routes"), function (req, res, next){next()});
    app.use("errors.errorHandler", function (req, res, next){next()});

    app.listen(process.env.port || 4000, function(req, res, next){
        console.log("Ready To Go Right Now!");
    });
