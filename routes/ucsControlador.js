const express = require("express")
const router = express.Router()

router.get('/',(req,res) => {
    //res.render("clientes/index")
})

router.get('/lista',(req,res) => {
    res.send("Pagina para visualizar unidades consumidoras")
})

router.get('/cadastrarCliente',(req,res) => {
    res.send("Pagina para cadastrar unidades consumidoras")
})


module.exports = router