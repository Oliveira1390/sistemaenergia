const express = require("express")
const router = express.Router()
const SEModel = require('../models/SistemaEnergia.js')

//Listar usuarios
router.get('/',(req,res) => {
    SEModel.Usuario.findAll({raw: true}).then(function(usuarios){
        res.render("usuarios/index",{usuarios: usuarios})
    }).catch((err) => {
        req.flash("error_msg","Houve um erro ao listar os usuarios")  
        res.redirect("usuarios/index")  
    })
})

router.get('/cadastrar',(req,res) => {
    res.render("usuarios/cadastrar")
})

router.post('/cadastrar/novo',(req,res) => {
    
    var erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome invalido"})
    }

    if(req.body.nome.length < 2){
        erros.push({texto: "Nome muito pequeno"})
    }

    if(req.body.senha != req.body.confirmacaosenha){
        erros.push({texto: "As senhas são diferentes"})
    }

    if(erros.length > 0){
        res.render("usuarios/cadastrar",{erros: erros})
    }else{

    SEModel.Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        dataadmissao: req.body.dataadmissao,
        matricula: req.body.matricula,
        estagiario: req.body.estagiario,
        departamento: req.body.departamento,
        senha: req.body.senha,
        confirmacaosenha: req.body.confirmacaosenha,
    }).then(function(){
        req.flash("sucess_msg","Usuario criado com sucesso")
        res.redirect("/usuarios")
    }).catch(function(erro){
        //não funciona
        req.flash("error_msg","Houve um erro ao salvar o Usuario")
        res.redirect("/usuarios")
    })
    }
})

module.exports = router