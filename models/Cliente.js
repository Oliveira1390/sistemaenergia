const Sequelize = require('sequelize')
const sequelize = new Sequelize("se","root","admin",{
    host:"localhost",dialect:"mysql"
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
});

const Cliente = sequelize.define('clientes', {
    nome: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
})

//Realizando uma inserção no MySQL
Cliente.create({
    nome: "John Doe",
    telefone: "telefone teste",
    celular: "celular teste",
    email: "email teste"
})

//Utilizar apenas quando criar o model
//Cliente.sync({force: true})

module.exports = Cliente


