const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/controller")

//rotas GET
router.get('/findById/:id', usuarioController.findUserByIdController);
router.get('/findAll', usuarioController.findAllUsersController);

//rotas POST
router.post('/create', usuarioController.createUserController);


//rotas PUT
router.put('/update/:id', usuarioController.updateUserController);

//rotas DELETE
router.delete('/remove/:id', usuarioController.removeUserController);


module.exports = router