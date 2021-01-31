const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const _ = require('underscore');
const Usuario = require('../models/usuarioModel');

const app = express();

app.post('/login', (req, res) => {
    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!usuarioDB) {
            console.log("usuario")
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrectos'
                }
            });
        }

        console.log(usuarioDB)
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            console.log("contraseña");
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrectos'
                }
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        return res.json({
            ok: true,
            usuarioDB,
            token
        });

    });


});





module.exports = app;