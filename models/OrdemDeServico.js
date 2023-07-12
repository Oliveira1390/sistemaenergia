const Sequelize = require('sequelize')
const sequelize = new Sequelize("se","root","admin",{
    host:"localhost",dialect:"mysql"
})

const OrdemsDeServico = sequelize.define('ordemsdeservicos', {
    tipoordem: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    datadesolicitacao: {
        type: Sequelize.STRING
    }
} , {
    timestamps: false,
    tableName: "ordemdeservico"
    }); 

//Utilizar apenas quando criar o model
OrdemsDeServico.sync({force: true})

module.exports = OrdemsDeServico