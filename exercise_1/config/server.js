// recuperando a biblioteca express
var express = require('express');
// executando o modulo do express
var app = express();
// Definindo o EJS como o gerador de views
app.set('view engine', 'ejs');
// Definir diretorio de views padrão para o projeto
app.set('views', './app/views')

module.exports = app;