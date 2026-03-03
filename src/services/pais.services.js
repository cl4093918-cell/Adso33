const Pais = require('../models/pais.model');

const crearPais = async (data) => {
    return await Pais.create(data);
}; 

const listarPais = async ()=>{
    return await Pais.findAll();
};

// obtenner por id 
const obtenerPaisPorid = async (id) => {
    return await Pais.findByPk(id);
};

// actualizar 
const actualizarPais = async(id, data) => {
     const pais = await Pais.findByPk(id)
     if (!pais){
        return null;
     }
     await pais.update(data);
     return pais;

};
// Eliminar 
const eliminarPais = async(id) => {
    const pais = await Pais.findByPk(id);
    if (!pais){
        return null;
    }
    await pais.destroy();
    return true;
}
module.exports ={
    crearPais,
    listarPais,
    obtenerPaisPorid,
    actualizarPais,
    eliminarPais
};