var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com banco de dados foi executado')
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });

    return connection
}
module.exports = function(){
    return connMySQL
}

    