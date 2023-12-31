const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("./data/amostra/cliente.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

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
        connection.query(query, [csvData], (error, response) => {
          console.log(error || response);
        });
      }
    });
  });

stream.pipe(csvStream);

