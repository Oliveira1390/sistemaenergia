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
const session = require("express-session")
const flash = require("connect-flash")


//Controladores
const clientesControlador = require('./routes/clientesControlador.js')
const usuariosControlador = require('./routes/usuariosControlador.js')

const homeControlador = require('./routes/homeControlador.js')

//Configurações
    //Sessão
        app.use(session({
            secret: "appenergia",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    
    //Middleware    
    app.use((req,res,next) => {
        res.locals.success_msg = req.flash("sucess_msg")
        res.locals.error_msg = req.flash("error_msg")
        next()
    })

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
        
        //sera usado para um sistema de autenticação
/*         app.use((req,res,next) => {
            console.log("OI, SOU UM MIDDLEWARE")
            next()
        }) */
   
//Rotas
    app.use('/',homeControlador)
    app.use('/clientes',clientesControlador)
    app.use('/usuarios',usuariosControlador)


    app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081");
});