const mongoose = require("mongoose")

const artigoSchema = mongoose.Schema(
  {
    titulo: {
      type: String, 
      required: true,
    },
    conteudo: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Artigo", artigoSchema)