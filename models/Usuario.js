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
})

//Realizando uma inserção no MySQL
Usuario.create({
    nome: "John Doe",
    dataadmissao: "13/04/2020",
    matricula: "Mat2000",
    estagiario: "Não",
    departamento: "Fin"
})

//Utilizar apenas quando criar o model
//Usuario.sync({force: true})

module.exports = Usuario
