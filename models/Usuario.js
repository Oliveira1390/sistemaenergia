const Sequelize = require('sequelize')
const sequelize = new Sequelize("se","root","admin",{
    host:"localhost",dialect:"mysql"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    dataadmissao: {
        type: Sequelize.STRING
    },
    matricula: {
        type: Sequelize.STRING
    },
    estagiario: {
        type: Sequelize.STRING
    },
    departamento: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    },
    confirmacaosenha: {
        type: Sequelize.STRING
    }
    } , {
    timestamps: false,
    tablename: "usuario"
    });

//Utilizar apenas quando criar o model
Usuario.sync({force: true})

module.exports = Usuario
