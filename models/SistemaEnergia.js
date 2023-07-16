const {Sequelize} = require('sequelize')
const sequelize = new Sequelize("se","root","admin",{
    host:"localhost",dialect:"mysql"
})
const { DataTypes } = require("sequelize"); // Import the built-in data types

const Cliente = sequelize.define('cliente', { 
    //Atributos
    idcliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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

const UnidadeConsumidora = sequelize.define('unidadeconsumidora', {
    //Atributos
    idunidadeconsumidora: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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
    },
    idcliente: {
        type: Sequelize.INTEGER,
        references: {
            model: Cliente,
            key: "idcliente"
        }
    }
    } , {
    timestamps: false,
    tableName: "unidadeconsumidora"
});

const Usuario = sequelize.define('usuario', {
    //Atributos
    idusuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
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
    tableName: "usuario"
    });

const Cobranca = sequelize.define('cobranca', {
    //Atributos
    idcobranca: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    datacobranca: {
        type: Sequelize.STRING
    },
    valorcobrado: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    idusuario: {
        type: Sequelize.INTEGER,
        references: {
            model: Usuario,
            key: "idusuario"
        }
    },
    idunidadeconsumidora: {
        type: Sequelize.INTEGER,
        references: {
            model: UnidadeConsumidora,
            key: "idunidadeconsumidora"
        }
    }
    } , {
    timestamps: false,
    tableName: "cobranca"
});

const OrdemDeServico = sequelize.define('ordemdeservico', {
    //Atributos
    idordemdeservico: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tipoordem: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    datadesolicitacao: {
        type: Sequelize.STRING
    },
    idusuario: {
        type: Sequelize.INTEGER,
        references: {
            model: Usuario,
            key: "idusuario"
        }
    },
    idunidadeconsumidora: {
        type: Sequelize.INTEGER,
        references: {
            model: UnidadeConsumidora,
            key: "idunidadeconsumidora"
        }
    }
    } , {
    timestamps: false,
    tableName: "ordemdeservico"
}); 



//Utilizar apenas quando criar o model
sequelize.sync({ force: true });

module.exports = {
    Cliente,
    UnidadeConsumidora,
    OrdemDeServico,
    Cobranca,
    Usuario}