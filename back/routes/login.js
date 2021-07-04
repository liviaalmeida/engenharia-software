const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", (req, res, _next) => {
    mysql.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ error: error });
        }

        conn.query(
            "SELECT * FROM LOGIN WHERE EMAIL_LOGIN = ?",
            [req.body.email],
            (error, result) => {
                if (error) {
                    return res.status(500).send({ error: error });
                }

                if (result.length > 0) {
                    conn.release();
                    return res
                        .status(409)
                        .send({ error: "user already exists" });
                }

                bcrypt.hash(req.body.password, 10, (errBcrypt, hash) => {
                    if (errBcrypt) {
                        conn.release();
                        return res.status(500).send({ error: errBcrypt });
                    }

                    conn.query(
                        "INSERT INTO LOGIN (EMAIL_LOGIN, SENHA_LOGIN) VALUES (?, ?)",
                        [req.body.email, hash],
                        (error, result) => {
                            conn.release();

                            if (error) {
                                return res.status(500).send({ error: error });
                            }

                            var response = {
                                message: "user created",
                                user: {
                                    email: req.body.email,
                                    id: result.insertId,
                                },
                            };

                            return res.status(201).send(response);
                        }
                    );
                });
            }
        );
    });
});

router.post("/", (req, res, _next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }

        conn.query(
            "SELECT * FROM LOGIN WHERE EMAIL_LOGIN = ?",
            [req.body.email],
            (error, results, _fields) => {
                conn.release();

                if (error) {
                    return res.status(500).send({ error: error });
                }

                if (results.length < 1) {
                    return res.status(401).send({ message: "login failure" });
                }

                bcrypt.compare(
                    req.body.password,
                    results[0].SENHA_LOGIN,
                    (err, result) => {
                        if (err) {
                            return res
                                .status(401)
                                .send({ message: "login failure" });
                        }

                        if (result) {
                            let token = jwt.sign(
                                {
                                    id: results[0].ID_LOGIN,
                                    email: results[0].EMAIL_LOGIN,
                                },
                                process.env.JWT_KEY,
                                { expiresIn: "1h" }
                            );

                            return res
                                .status(200)
                                .send({
                                    message: "login successful",
                                    token: token,
                                });
                        }

                        return res
                            .status(401)
                            .send({ message: "login failure" });
                    }
                );
            }
        );
    });
});

module.exports = router;
