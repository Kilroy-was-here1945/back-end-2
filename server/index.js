const express = require('express')
const cors = require('cors')

const {getMovies, createMovie} = require('./controler.js')
const movie = require('./db.json')

const app = express()

app.use(express.json())
app.use(cors())

// app.get('/api/movies', (req, res) => {
//     res.status(200).send(movies)
// })
app.get('./api/movies', getMovies)
app.post('/api/movies', createMovie)
app.put('./api/movies/:id', updateMovie)
app.put('/api/movies/:id', deleteMovie)

app.listen(4004, () => {
    console.log(`running on 4004`)
})