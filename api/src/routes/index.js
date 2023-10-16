const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController');
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.post('/user', jsonParser, controller.criarUsuario);
router.get('/user', jsonParser, controller.getUser);

module.exports = router;
