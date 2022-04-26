const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const rotas = require('./configuracoes/rotas')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(express.json())
app.use(cors())
app.use(rotas)


app.listen(8080, () => {
    console.log('Express started at http://localhost:8080')
})