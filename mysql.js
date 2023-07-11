const Sequelize = require('sequelize')
const sequelize = new Sequelize("se","root","admin",{
    host:"localhost",
    dialect:"mysql"
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

//Realizando uma inserção no MySQL
Postagem.create({
    titulo: "um titulo qualquer",
    conteudo: "ficção"
})


//sincroniza o model com o mysql
//Postagem.sync({force:true})


