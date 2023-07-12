const express = require("express")
const router = express.Router()
const osModel = require('../models/OrdemDeServico.js')

router.get('/',(req,res) => {
    osModel.findAll({raw: true}).then(function(os){
        res.render("ordemsdeservico/index",{os: os})
    }).catch((err) => {
        req.flash("error_msg","Houve um erro ao listar as Ordems de Serviço")  
        res.redirect("ordemsdeservico/index")  
    })
})

router.get('/cadastrar',(req,res) => {
    res.render("ordemsdeservico/cadastrar.handlebars")
})


module.exports = router