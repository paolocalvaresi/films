module.exports = (function() {
  
    var getAll = (req, res) => {

    res.json('lista di tutti i films')
  }

  var getOne = (req, res) => {
    var id = req.params.id

    res.json('film con id: ' + id)
  }

  var votaFilm = (req, res) => {
    var idfilm = req.params.id
    var voto = req.body.voto

    res.json('hai votato il film con id:' + idfilm + ' voto:' + voto)
  }
  var modificaFilm = (req, res) => {
    var idfilm = req.params.id
    var film = req.boby
    res.json(film)
  }
  var creaFilm = (req, res) => {
    var film = req.body
    console.log(film);
    res.json(film)
  }
  var eliminaFilm = (req, res) => {
    var idfilm = req.params.id
    res.json(idfilm)
  }

  return {
    getAll: getAll,
    getOne: getOne,
    votaFilm: votaFilm,
    modificaFilm: modificaFilm,
    creaFilm: creaFilm,
    eliminaFilm: eliminaFilm
  }
})()
