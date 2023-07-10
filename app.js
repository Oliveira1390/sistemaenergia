const express = require("express");
const app = express(); //copia inteira do framework express para a variavel app
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const ClienteModel = require('./models/ClienteModel.js')

//INSERINDO DADOS
require('child_process').fork('Clientes.js')


//Configurações
    //Handlebars
    app.engine('handlebars', engine());
    app.set("view engine","handlebars");
    app.set('views', path.join(__dirname,'views'));

    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
//Rotas

    //Pagina pricipal
    app.get('/',function(req,res){
        res.render('index.handlebars')
        }
    ) 
    
    //Rota para ver cliente
        app.get('/clientes', function(req, res) {
            ClienteModel.findAll({ raw: true }).then(function(clientes) {
            res.render('clientes.handlebars', {clientes: clientes});
        });
    });
    
    //Rota para formulario de cliente
    app.get("/formularioCliente", function(req,res){
        res.render("formulariocliente.handlebars")
        //res.send("Rota para formulario de clientes")
    })

    //Rota para adicionar Cliente
    app.post('/addCliente', function(req,res){
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

    //Rota para deletar Cliente
    app.get('/deletarCliente/:id', function(req,res){
        ClienteModel.destroy({where: {'id':req.params.id}}).then(function(){
            res.send("Cliente deletado")
        }).catch(function(erro){res.send("Este cliente não existe")

        })
    }) 

    app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081");
});