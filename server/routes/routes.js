module.exports = function(app, express) {
  var bodyParser = require('body-parser')
    app.use(bodyParser.json())
  // //servo la index.html
  // app.get('/', (req,res) => {
  //     res.send("ciao mondo")
  // })

  app.use('/movies', require('../resources/movies/movies'))
}
