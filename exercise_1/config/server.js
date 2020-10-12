var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// executando o modulo do express
var app = express();

// Definindo o EJS como o gerador de views
app.set('view engine', 'ejs');
// Definir diretorio de views padrão para o projeto
app.set('views', './app/views');

// Includindo o bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Includindo o express validator
app.use(expressValidator());

// Carregando todas as rotas da aplicação + conexao com o banco de dados (MySQL)
consign()
    .include('app/routes')
    .then('config/db_connection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;