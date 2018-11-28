var express = require('express')

var router = express.Router()

var controller = require('./controller')

// LISTA DI TUTTI I FILMS
router.get('/', controller.getAll)
// DETTAGLIO DEL FILM
router.get('/:id([0-9]{1,4})', controller.getOne)
// CREAZIONE DI UN FILM
router.post('/', controller.creaFilm)
// MODIFICA DI UN FILM
router.put('/:id([0-9]{1,4})', controller.modificaFilm)
// VOTO IL FILM
router.put('/voto/:id([0-9]{1,4})', controller.votaFilm)
// ELIMINAZIONE DI UN FILM
router.delete('/:id([0-9]{1,4})', controller.eliminaFilm)

module.exports = router
