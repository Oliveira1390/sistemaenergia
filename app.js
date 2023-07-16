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
const UCControlador = require('./routes/ucControlador.js')
const homeControlador = require('./routes/homeControlador.js')
const OSControlador = require('./routes/osControlador.js')
const cobrancaControlador = require('./routes/cobrancaControlador.js')
const usuarioControlador = require('./routes/usuarioControlador.js')

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
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        res.locals.error = req.flash("error")
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
        //Inserindo Dados
        require('child_process').fork('./data/inserirDados.js');

    //Public
        app.use(express.static(path.join(__dirname,"public")))
        
  
    //Rotas
        app.use('/',homeControlador)
        app.use('/clientes',clientesControlador)
        app.use('/unidadesconsumidoras',UCControlador)
        app.use('/ordensdeservico',OSControlador)
        app.use('/usuarios',usuarioControlador)
        app.use('/cobrancas/',cobrancaControlador)

    app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081");
});