// Importa o express
const express = require("express")

// Importa o módulo dotenv para carregarmos variáveis de ambiente do arquivo .env 
const dotenv = require("dotenv").config()

// Define a porta em que o servidor express ouve requisições
const porta = process.env.PORT || 3000

// Importa o arquivo de configuração do banco de dados (MongoDB)
const conectarDB = require('./config/db')

// Cria um servidor express
const app = express()

// Configurações do servidor
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

// Define o view engine como ejs
app.set("view engine", "ejs")

// Faz a conexão com o banco de dados
conectarDB()

// Rotas da aplicação
app.use("/", require("./routes/rotas"))

app.listen(porta, () => {
  console.log(`Servidor ouvindo na porta ${porta}.`)
})