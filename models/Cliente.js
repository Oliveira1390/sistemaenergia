const Sequelize = require('sequelize')
const sequelize = new Sequelize("se","root","admin",{
    host:"localhost",dialect:"mysql"
})

const Cliente = sequelize.define('clientes', { 
    //Atributos
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
    }
    } , {
    timestamps: false,
    tableName: "cliente"
    });

//Utilizar apenas quando criar o model
Cliente.sync({force: true})

module.exports = Cliente


