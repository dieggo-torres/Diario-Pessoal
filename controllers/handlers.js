const Artigo = require("../models/artigoModel")

function exibirHomePage(req, res) {
  Artigo.find({}, (erros, artigosEncontrados) => {
    if (!erros) {
      res.render("home", { artigos: artigosEncontrados })
    }
  })
}

function exibirPaginaSobre(req, res) {
  res.render("sobre")
}

function exibirPaginaContato(req, res) {
  res.render("contato")
}

function exibirPaginaEscreverArtigo(req, res) {
  res.render("compose")
}

async function criarArtigo(req, res) {
  const novoArtigo = await Artigo.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })

  res.redirect("/")
}

function encontrarArtigo(req, res) {
  const idArtigoSolicitado = req.params.id

  Artigo.findById({ _id: idArtigoSolicitado }, (erros, artigoEncontrado) => {
    if (!erros) {
      res.render("post", {
        tituloArtigo: artigoEncontrado.titulo,
        conteudoArtigo: artigoEncontrado.conteudo,
      })
    }
  })
}

module.exports = {
  exibirHomePage,
  exibirPaginaSobre,
  exibirPaginaContato,
  exibirPaginaEscreverArtigo,
  criarArtigo,
  encontrarArtigo,
}
