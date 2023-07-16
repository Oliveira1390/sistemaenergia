const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let streamCliente = fs.createReadStream("./data/amostra/cliente.csv");
let csvDataCliente = [];
let csvStreamCliente = fastcsv
  .parse()
  .on("data", function(data) {
    csvDataCliente.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvDataCliente.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "se"
    });

    //console.log(csvData)

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
            "INSERT INTO cliente (idcliente,telefone,celular,email,nome) VALUES ?";
        connection.query(query, [csvDataCliente], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

streamCliente.pipe(csvStreamCliente);

let streamUsuario = fs.createReadStream("./data/amostra/usuario.csv");
let csvDataUsuario = [];
let csvStreamUsuario = fastcsv
  .parse()
  .on("data", function(data) {
    csvDataUsuario.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvDataUsuario.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "se"
    });

    //console.log(csvData)

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
            "INSERT INTO usuario (idusuario,nome,dataadmissao,matricula,estagiario,departamento,email,senha,confirmacaosenha) VALUES ?";
        connection.query(query, [csvDataUsuario], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

streamUsuario.pipe(csvStreamUsuario);

let streamUC = fs.createReadStream("./data/amostra/unidadeconsumidora.csv");
let csvDataUC = [];
let csvStreamUC = fastcsv
  .parse()
  .on("data", function(data) {
    csvDataUC.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvDataUC.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "se"
    });

    //console.log(csvData)

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
        "INSERT INTO unidadeconsumidora (idunidadeconsumidora, cidade, estado, bairro, lugradouro, numero, complemento, instalacao,datainstalacao, idcliente) VALUES ?";
        connection.query(query, [csvDataUC], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

streamUC.pipe(csvStreamUC);

let streamOS = fs.createReadStream("./data/amostra/ordemdeservico.csv");
let csvDataOS = [];
let csvStreamOS = fastcsv
  .parse()
  .on("data", function(data) {
    csvDataOS.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvDataOS.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "se"
    });

    //console.log(csvData)

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
            "INSERT INTO ordemdeservico (idordemdeservico,tipoordem,status,datadesolicitacao,idusuario,idunidadeconsumidora) VALUES ?";
        connection.query(query, [csvDataOS], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

streamOS.pipe(csvStreamOS);

let streamCobranca = fs.createReadStream("./data/amostra/cobranca.csv");
let csvDataCobranca = [];
let csvStreamCobranca = fastcsv
  .parse()
  .on("data", function(data) {
    csvDataCobranca.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvDataCobranca.shift();

    // create a new connection to the database
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "admin",
      database: "se"
    });

    //console.log(csvData)

    // open the connection
    connection.connect(error => {
      if (error) {
        console.error(error);
      } else {
        let query =
            "INSERT INTO cobranca (idcobranca,datacobranca,valorcobrado,status,idusuario,idunidadeconsumidora) VALUES ?";
        connection.query(query, [csvDataCobranca], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

streamCobranca.pipe(csvStreamCobranca);

