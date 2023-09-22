const jwt = require('jsonwebtoken');
const segredo = 'seu_segredo_secreto';

function gerarToken(usuario) {
  const payload = {
    id: usuario._id,
    nome: usuario.nome,
    email: usuario.email,
  };

  const token = jwt.sign(payload, segredo, { expiresIn: '1h' });

  return token;
}

module.exports = {
  gerarToken
};