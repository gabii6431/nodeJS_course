var app = require('./config/server')

// Add rotas
var rotaHome = require('./app/routes/home')
rotaHome(app)

var rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)

var rotaForm_noticias = require('./app/routes/formulario_inclusao_noticia')
rotaForm_noticias(app)

// função listen - fica escutando requesicoes na porta 3000
// add função call back (função que será executada quando servidor for rodar)
app.listen(3000, function(){
    console.log("Servidor ON")
});