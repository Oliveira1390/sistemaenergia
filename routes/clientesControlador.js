const express = require("express")
const router = express.Router()
const SEModel = require('../models/SistemaEnergia.js')

//Listar clientes
router.get('/',(req,res) => {
    SEModel.Cliente.findAll({raw: true}).then(function(clientes){
        res.render("clientes/index",{clientes: clientes})
    }).catch((err) => {
        req.flash("error_msg","Houve um erro ao listar os clientes")  
        res.redirect("clientes/index")  
    })
})

//Listar formulario de cadastro de cliente
router.get('/cadastrar',(req,res) => {
    res.render("clientes/cadastrar")
})

//Cadastrar cliente
router.post('/cadastrar',(req,res) => {
    
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

    SEModel.Cliente.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        celular: req.body.celular,
        email: req.body.email
    }).then(function(){
        req.flash("success_msg","Cliente criado com sucesso")
        res.redirect("/clientes")
    }).catch(function(erro){
        //não funciona
        req.flash("error_msg","Houve um erro ao salvar o Cliente")
        res.redirect("/clientes")
    })
    }
})

//Editar clientes
router.get("/editar/:idcliente", (req,res) => {
    
    SEModel.Cliente.findAll({where: {idcliente: req.params.idcliente}}).then((clientes) => {
        res.render("clientes/editar", {clientes: clientes})
    }).catch((err) => {
        req.flash("error_msg", "Este cliente não existe")
        res.redirect("clientes")
    })
})

router.post("/editar", (req,res) => {
    console.log("Nome: "+req.body.nome)
    console.log("ID Cliente: "+req.body.idcliente)
    
    SEModel.Cliente.update(
    {nome: req.body.nome,telefone: req.body.telefone,celular: req.body.celular,email: req.body.email},
    {where: {idcliente: req.body.idcliente}},
    {raw: true}).then(function(){
        req.flash("success_msg","Cliente editado com sucesso")
        res.redirect("/clientes")
    }).catch(function(erro){
        req.flash("error_msg","Houve um erro ao editar o Cliente")
        res.redirect("/clientes")
    })
}) 

/* router.post("/deletar", (req,res) => {
    ClienteModel.destroy({where: {id: req.body.id}}).then(function(){
        req.flash("success_msg","Cliente deletado com sucesso")
        res.redirect("/clientes")
    }).catch(function(erro){
        req.flash("error_msg","Houve um erro ao deletar o Cliente")
        res.redirect("/clientes")
    })
}) */
         
module.exports = router