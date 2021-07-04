const express = require("express");
const app = express();
require('dotenv').config();

const loginRoute = require("./routes/login");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/login", loginRoute);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;

    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    return res.send({ error: { message: error.message } });
});

module.exports = app;
