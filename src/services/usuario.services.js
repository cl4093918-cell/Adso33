const usuarios = require('../models/usuario.model');
const crearUsuario = async (data) => {
    return await Usuarios.create(data);
};
const listarUsuarios = async () => {
    return await Usuarios.findAll();
}