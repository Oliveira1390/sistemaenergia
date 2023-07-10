const db = require('./db')
sequelize = db.sequelize,
Sequelize = db.Sequelize;

const Cliente = db.sequelize.define('clientes',{
    nome: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    celular: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
})


//Utilizar apenas quando criar o model
//Cliente.sync({force: true})

module.exports = Cliente