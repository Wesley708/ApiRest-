//config express
const express = require('express')
const app = express()

//forma de ler JSON middlewares
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())


//Rota inicial / end point
app.get('/', (req, res) => {

    //mostrar requisição
    

    res.json({message: 'Está rodando!'})

})

//Entregar uma porta
app.listen(3000)