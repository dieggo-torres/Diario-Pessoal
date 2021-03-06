const mongoose = require('mongoose')

async function conectarDB() {
  try {
    const conexao = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log(`MongoDB conectado: ${conexao.connection.host}.`);

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = conectarDB