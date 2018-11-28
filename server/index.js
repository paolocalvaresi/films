const express = require('express')
const app = express()
const PORT = 3000 || process.env.port

require('./routes/routes.js')(app,express);


app.listen(PORT, () => {
  console.log('http://localhost:' + PORT)
})
