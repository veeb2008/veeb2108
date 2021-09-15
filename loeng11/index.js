const express = require('express')
const app = express()

function tervitus(req, res) {
    let tana = new Date()
    res.end("Tere maailm ja muud loomad. Täna on " + tana.toString() )
}

app.get('/', tervitus)
app.get('/tervitus', tervitus)
app.listen(3500)
