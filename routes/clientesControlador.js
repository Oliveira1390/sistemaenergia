const express = require("express")
const router = express.Router()
const ClienteModel = require('../models/Cliente.js')

router.get('/',(req,res) => {
    res.render("clientes/index.handlebars")
})

router.get('/cadastrar',(req,res) => {
    res.render("clientes/cadastrar.handlebars")
})

router.post('/cadastrar/novo',(req,res) => {
    ClienteModel.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        celular: req.body.celular,
        email: req.body.email
    }).then(function(){
        res.send("Post criado com sucesso")
    }).catch(function(erro){
        res.send('House um erro: '+erro)
    })
})
    

module.exports = router