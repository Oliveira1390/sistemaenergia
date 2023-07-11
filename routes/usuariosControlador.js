const express = require("express")
const router = express.Router()
const ClienteModel = require('../models/Usuario.js')

router.get('/',(req,res) => {
    //res.render("clientes/index")
})

router.get('/lista',(req,res) => {
    //res.send("Pagina para visualizar usuarios")
})

router.get('/cadastrarUsuario',(req,res) => {
    //res.send("Pagina para cadastrar usuarios")
})


module.exports = router