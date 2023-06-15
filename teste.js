const Sequelize = require('sequelize')
const sequelize = new Sequelize("teste","root","admin",{
    host:"localhost",dialect:"mysql"
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
});

//Criando Models para Postagem

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "um titulo qualquer",
    conteudo: "ficção"
})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Joao",
    sobrenome: "Gabriel",
    idade: 33,
    email: "jgevelinoliveira@gmail.com"
})

//sincroniza o model com o mysql
//Postagem.sync({force:true})
//Usuario.sync({force:true})

