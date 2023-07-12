const Sequelize = require('sequelize')
const sequelize = new Sequelize("se","root","admin",{
    host:"localhost",dialect:"mysql"
})

const UnidadesConsumidoras = sequelize.define('unidadesconsumidoras', {
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    lugradouro: {
        type: Sequelize.STRING
    },
    numero: {
        type: Sequelize.STRING
    },
    complemento: {
        type: Sequelize.STRING
    },
    instalacao: {
        type: Sequelize.STRING
    },
    datainstalacao: {
        type: Sequelize.STRING
    }
    } , {
    timestamps: false,
    tablename: "unidadeconsumidora"
    });

//Utilizar apenas quando criar o model
UnidadesConsumidoras.sync({force: true})

module.exports = UnidadesConsumidoras