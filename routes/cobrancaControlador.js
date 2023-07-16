const express = require("express")
const router = express.Router()
const SEModel = require('../models/SistemaEnergia.js')

//Listar Cobranças
router.get('/',(req,res) => {
    if ( req.query.idunidadeconsumidora ) {
        SEModel.Cobranca.findAll({where: { idunidadeconsumidora: parseInt(req.query.idunidadeconsumidora) }, raw: true}).then(function(cobrancas){
            res.render("cobrancas/index",{cobrancas: cobrancas})
        }).catch((err) => {
            req.flash("error_msg","Houve um erro ao filtrar as unidades consumidoras")
            res.redirect("cobrancas")  
        })
      } else {
        SEModel.Cobranca.findAll({raw: true}).then(function(cobrancas){
            res.render("cobrancas/index",{cobrancas: cobrancas})
        }).catch((err) => {
            req.flash("error_msg","Houve um erro ao listar as unidades consumidoras")  
            res.redirect("cobrancas")  
        })
      }

})

//Listar formulario de cadastro de cobrança
router.get('/cadastrar',(req,res) => {
    res.render("cobrancas/cadastrar")
})

//Cadastrar cobrança
router.post('/cadastrar',(req,res) => {
    
    var erros = [];
    console.log(req.body.idunidadeconsumidora)
   

    if(!req.body.idunidadeconsumidora || typeof req.body.idunidadeconsumidora == undefined || req.body.idunidadeconsumidora == null){
        erros.push({texto: "Unidade Consumidora Invalida"})
    }

    if(!req.body.datacobranca || typeof req.body.datacobranca == undefined || req.body.datacobranca == null){
        erros.push({texto: "Data de Cobrança Invalida"})
    }

    if(!req.body.valorcobrado || typeof req.body.valorcobrado == undefined || req.body.valorcobrado == null){
        erros.push({texto: "Valor Cobrado Invalido"})
    }

    if(erros.length > 0){
        res.render("cobrancas/cadastrar",{erros: erros})
    }else{

    console.log("criando cobrança")

    SEModel.Cobranca.create({
        datacobranca: req.body.datacobranca,
        valorcobrado: req.body.valorcobrado,
        status: "Pendente",
        idusuario: 1,
        idunidadeconsumidora: req.body.idunidadeconsumidora
    }).then(function(){
        req.flash("success_msg","Cobrança criado com sucesso")
        res.redirect("/cobrancas")
    }).catch(function(erro){
        //não funciona
        req.flash("error_msg","Houve um erro ao salvar a Cobrança")
        res.redirect("/cobrancas/cadastrar")
    })
    }
})

module.exports = router


