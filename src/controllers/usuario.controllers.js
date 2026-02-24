const usuarioService = require('../services/usuario.services');

const crear = async (req, res)=> {
    try{
        const usuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json(usuario);
    } catch(error){
        res.status(400).json({error: error.message});
    }

};

const listar = async (req, res) => {
    const usuarios = await usuarioService.listarUsuarios();
    res.json(usuarios);
};
 // consultar un usuario por id 
 const obtnerUno = async(req,res) =>{ 
    try{
        const {id} = req.params;
        const usuario = await usuarioService.obtenerUsuarioPorid(id);
        if(!usuario){
            return res.status(404).json({error: 'Usuario no encontrado'})
        } res.json(usuario);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

// actualizar 
const actualizar = async (req,res)=>{
try{
    const {id}= req.params;
    const usuarioActualizado = await usuarioService.actualizarUsuario(id,req.body);
    if(!usuarioActualizado){
        return res.status(404).json({error:'Usuario no encontrado'})
    }
    res.json(usuarioActualizado);
}catch(error){
    res.status(400).json({error:error.message})
}

};


//Eliminar 
const eliminar = async(req,res)=>{
    try{
        const {id}=req.params;
        const eliminar =await usuarioService.eliminarUsuario(id);
        if(!eliminar){
            return res.status(404).json({error:'Usuario no encontrado'});
        }
        res.json({message:'Usuario eliminado correctamente'});
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

module.exports = {
    crear,
    listar,
    obtnerUno,
    actualizar,
    eliminar
};
        
    