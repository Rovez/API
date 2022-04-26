const express = require('express')
const rotas = express.Router()

let db = [
    { '1': { Nome: 'Produto 1', Tipo: 'Tempeartura Ambiente'} },
    { '2': { Nome: 'Produto 2', Tipo: 'Frescos'} },
    { '3': { Nome: 'Produto 3', Tipo: 'Congelados'} },
]
// Procurar Dados  sem caminho especifico  '/'
rotas.get('/', (req, res) => {
    return res.json(db)
})

// Adicionar Informação   Obrigando o user a adicionar algo ao utilizar o verbo, senão  erro 400
rotas.post('/add', (req, res) => {
    const body = req.body
    if (!body)
        return res.status(400).end()
    db.push(body)
    return res.json(body)

})

module.exports = rotas