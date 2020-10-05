var app = require('./config/server')

// função listen - fica escutando requesicoes na porta 3000
// add função call back (função que será executada quando servidor for rodar)
app.listen(3000, function(){
    console.log("Servidor ON")
});