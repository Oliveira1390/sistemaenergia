const express = require("express")
const router = express.Router()
const ClienteModel = require('../models/Cliente.js')


router.get('/',(req,res) => {
    ClienteModel.findAll({raw: true}).then(function(clientes){
        res.render("clientes/index",{clientes: clientes})
    }).catch((err) => {
        req.flash("error_msg","Houve um erro ao listar os clientes")  
        res.redirect("clientes/index")  
    })
})

router.get('/cadastrar',(req,res) => {
    res.render("clientes/cadastrar")
})

router.post('/cadastrar/novo',(req,res) => {
    
    var erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome invalido"})
    }

    if(req.body.nome.length < 2){
        erros.push({texto: "Nome muito pequeno"})
    }

    if(erros.length > 0){
        res.render("clientes/cadastrar",{erros: erros})
    }else{

    ClienteModel.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        celular: req.body.celular,
        email: req.body.email
    }).then(function(){
        req.flash("sucess_msg","Cliente criado com sucesso")
        res.redirect("/clientes")
    }).catch(function(erro){
        //não funciona
        req.flash("error_msg","Houve um erro ao salvar o Cliente")
        res.redirect("/clientes")
    })
    }
})

//Editar clientes
router.get("/editar/:id", (req,res) => {
    
    ClienteModel.findOne({raw:true, id:req.params.id}).then((clientes) => {
        res.render("clientes/editar", {clientes: clientes})
    }).catch((err) => {
        req.flash("error_msg", "Este cliente não existe")
        res.redirect("clientes")
    })
})

router.post("/editar", (req,res) => {
    
    ClienteModel.update({nome:req.body.nome,telefone: req.body.telefone,
        celular: req.body.celular,email: req.body.email},{where: {id: req.body.id}}).then(function(){
            req.flash("sucess_msg","Cliente editado com sucesso")
            res.redirect("/clientes")
        }).catch(function(erro){
            //não funciona
            req.flash("error_msg","Houve um erro ao editar o Cliente")
            res.redirect("/clientes")
        })
    })

router.post("/deletar", (req,res) => {
    ClienteModel.destroy({where: {id: req.body.id}}).then(function(){
        req.flash("sucess_msg","Cliente deletado com sucesso")
        res.redirect("/clientes")
    }).catch(function(erro){
        req.flash("error_msg","Houve um erro ao deletar o Cliente")
        res.redirect("/clientes")
    })
})
         
module.exports = router