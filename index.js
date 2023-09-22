const express = require("express")
const ConnectToDatabase = require("./database/database") //arquivo de conexao com o banco
const usuario = require("./router/usuario.router") //arquivo de rota do usuario

const app = express()

const port = 5000

app.use(express.json())

ConnectToDatabase() //conectando com o banco de dados

app.use("/usuario", usuario) // chamando as rotas do usuario

app.get("/", (req,res) => {
    res.send({
        message:"Bem vindo ao nosso marketplace"
    })
})

app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})