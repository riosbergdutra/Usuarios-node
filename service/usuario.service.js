const Usuario = require("../model/usuario")

const findUserByIdService = (id) => {
    return Usuario.findById(id)
}

const findAllUsersService = () => {
    return Usuario.find()
}

const createUserService = (body) => {
    return Usuario.create(body)
}

const updateUserSerivce = (id,body) => {
    return Usuario.findByIdAndUpdate(id,body, {returnDocument: "after"})
}

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id)
}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserSerivce,
    removeUserService
}