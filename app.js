//Carregando módulos
const express = require("express");
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express(); 
const Sequelize = require('sequelize')
const sequelize = new Sequelize("se","root","admin",{
    host:"localhost",dialect:"mysql"
})

//Controladores
const clientesControlador = require('./routes/clientesControlador.js')
const homeControlador = require('./routes/homeControlador.js')

//Configurações
    //Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    //Handlebars
    app.engine('handlebars', engine());
    app.set("view engine","handlebars");
    app.set('views', path.join(__dirname,'views'));

    //MySQL
    sequelize.authenticate().then(function(){
        console.log('Conectado com sucesso!')
    }).catch(function(erro){
        console.log("Falha ao se conectar: "+erro)
    });

    //Public
        app.use(express.static(path.join(__dirname,"public")))
   
//Rotas
    //Home Page
    app.use('/',homeControlador)
    //Rotas para clientes de unidades consumidoras
    app.use('/clientes',clientesControlador)


    app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081");
});