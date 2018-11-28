var express = require('express')

var router = express.Router()

var controller = require('./controller')

// LISTA DI TUTTI I FILMS
router.get('/', controller.getAll)

router.get('/:id', controller.getOne)

module.exports = router
