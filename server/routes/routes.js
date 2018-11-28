module.exports = function(app, express) {
    

    // //servo la index.html
    // app.get('/', (req,res) => {
    //     res.send("ciao mondo")
    // })


    app.use('/movies',require('../resources/movies/movies'));


}
