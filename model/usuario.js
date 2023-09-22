const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
});


const Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;