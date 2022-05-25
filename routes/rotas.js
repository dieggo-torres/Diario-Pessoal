const express = require("express")
const router = express.Router()

const {
  exibirHomePage,
  exibirPaginaSobre,
  exibirPaginaContato,
  exibirPaginaEscreverArtigo,
  criarArtigo,
  encontrarArtigo,
} = require("../controllers/handlers")

router.get("/", exibirHomePage)

router.get("/sobre", exibirPaginaSobre)

router.get("/contato", exibirPaginaContato)

router.get("/compose", exibirPaginaEscreverArtigo)

router.post("/compose", criarArtigo)

router.get("/artigos/:id", encontrarArtigo)

module.exports = router