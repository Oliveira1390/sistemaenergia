const express = require("express")
const router = express.Router()
const ucModel = require('../models/UnidadeConsumidora.js')
const osModel = require('../models/OrdemDeServico.js')

router.get('/',(req,res) => {
    ucModel.findAll({raw: true}).then(function(ucs){
        res.render("unidadesconsumidoras/index",{ucs: ucs})
    }).catch((err) => {
        req.flash("error_msg","Houve um erro ao listar as unidades consumidoras")  
        res.redirect("unidadesconsumidoras/index")  
    })
})

router.get('/cadastrar',(req,res) => {
    res.render("unidadesconsumidoras/cadastrar")
})

router.post('/cadastrar',(req,res) => {
    
    var erros = [];

    if(!req.body.cidade || typeof req.body.cidade == undefined || req.body.cidade == null){
        erros.push({texto: "Nome invalido"})
    }

    if(req.body.cidade.length < 2){
        erros.push({texto: "Nome muito pequeno"})
    }

    if(erros.length > 0){
        res.render("unidadesconsumidoras/cadastrar",{erros: erros})
    }else{

    ucModel.create({
        cidade: req.body.cidade,
        estado: req.body.estado,
        bairro: req.body.bairro,
        lugradouro: req.body.lugradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        instalacao: req.body.instalacao
    }).then(function(){
        osModel.create({
            tipoordem: "Instalação"
        })
        req.flash("sucess_msg","Unidade Consumidora criado com sucesso")
        res.redirect("/unidadesconsumidoras")
    }).catch(function(erro){
        req.flash("error_msg","Houve um erro ao salvar a Unidade Consumidora")
        res.redirect("/unidadesconsumidoras")
    })
    }
})

router.post("/deletar", (req,res) => {
    ucModel.destroy({where: {id: req.body.id}}).then(function(){
        req.flash("sucess_msg","Unidade Consumidora deletado com sucesso")
        res.redirect("/unidadesconsumidoras")
    }).catch(function(erro){
        req.flash("error_msg","Houve um erro ao deletar a Unidade Consumidora")
        res.redirect("/unidadesconsumidoras")
    })
})


module.exports = router