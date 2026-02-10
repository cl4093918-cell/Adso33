const usuarioServices = require('../services/usuario.services');

const crearUsuario = async (req,res) => {
    try {
        const usuario = await usuarioServices.crearUsuario(req.body);
        res.status(201).json(Usuario);
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

const listar = async (req,res) => {
   const usuarios = await usuarioServices.listarUsuarios();
   res.json(usuarios);
};
module.exports = {
    crearUsuario,
    listar,
};
        
    