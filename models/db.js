const Sequelize = require('sequelize');

    //Conexão com o banco de dados Mysql
    const sequelize = new Sequelize("se","root","admin",{
        host:"localhost",
        dialect:"mysql"
    })

    sequelize.authenticate().then(function(){
        console.log("Conectado com sucesso")
    }).catch(function(erro){
        console.log("Falha ao se conectar: "+erro)
    })

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;