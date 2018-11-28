module.exports = (function() {
    
    var getAll = (req,res) => {
        res.json("lista di tutti i films")
    } 
    
    var getOne = (req,res) => {
        var id = req.params.id;
        res.json("film con id: " + id)
    } 
  
  
    return {
    getAll: getAll,
    getOne: getOne,
  }
})()
