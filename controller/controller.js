const userService = require("../service/usuario.service")
const auth = require('../token/token');


const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id)

        if(!user){
            return req.status(404).send({message:"usuario não encontrado"});
        }
        return res.status(200).send(user)

    }catch (err){
        if(err.kind) {
            console.log(err.kind == "ObjectId");
            return res.status(400).send({message: `Id informado está incorreto, tente novamente!`})

        }
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
};

const findAllUsersController =  async (req,res) => {
    try{
        res.status(200).send(await userService.findAllUsersService())
    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
};

const createUserController = async (req, res) => {
    try {
      const body = req.body;
      if (!body.nome) {
        return res.status(400).send({ message: `O campo 'Nome' precisa ser preenchido!` });
      }
  
      const usuarioCriado = await userService.createUserService(body);
  
      const token = auth.gerarToken(usuarioCriado);
  
      return res.status(201).send({ usuario: usuarioCriado, token });
    } catch (err) {
      console.log(`erro: ${err.message}`);
      res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
  };

const updateUserController = async (req,res) => {
    try{
        const body = req.body
        if(!body.nome){
            return res.status(400).send({message: `O campo 'Nome' precisa ser preeencido!`})
        }

        return res.send(await userService.updateUserSerivce(req.params.id, body))

    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

const removeUserController = async (req,res) => {
    try{

        const deletedUser = await userService.removeUserService(req.params.id)

        console.log(deletedUser)

         if(deletedUser == null) {
            res.status(404).send({message:`Usuario não encontrado, tente novamente!`})
         }else{
            res.status(200).send({message:`sucesso, usuario deletado!`})
         }

    }catch (err){
        console.log(`erro: ${err.message}`)
        res.status(500).send({message: `Erro inesperado tente novamente!`})
    }
}

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    removeUserController
}