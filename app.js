const express = require("express");
const app = express(); //copia inteira do framework express para a variavel app
const { engine } = require('express-handlebars');
const Sequelize = require('sequelize');

//Config 
    //Template Engine
    app.engine('handlebars', engine());
    app.set("view engine","handlebars");
    app.set('views', './views');
    
    //Conexão com o banco de dados Mysql
    const sequelize = new Sequelize("teste","root","admin",{
        host:"localhost",dialect:"mysql"
    })


 //Rotas   
    app.get("/ucs", function(req,res){
        res.render("formulario.handlebars")
        //res.send("Rota para formulario de unidades consumidoras")
    })

/*     app.get("/",function(req,res){
    res.sendFile(__dirname+"/html/index.html");
});

app.get("/uc",function(req,res){
    res.sendFile(__dirname+"/html/uc.html");
});

app.get("/uc/:iduc",function(req,res){
    res.send("id: id_uc");
});

app.get("/uc/:iduc/:status/:ano",function(req,res){
    res.send("id_uc: "+req.params.iduc+"\nstatus: "+req.params.status+"\nano: "+req.params.ano);
});

app.get("/dptcentral",function(req,res){
    res.send("Departamento Central");
}); */

//listen precisa ser a ultima linha do codigo
app.listen(8081,function(){
    console.log("Servidor rodando na URL http://localhost:8081");
});