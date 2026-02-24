const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controllers');
router.post('/', usuarioController.crear);
router.get('/', usuarioController.listar);
router.get('/:id',usuarioController.obtnerUno);
router.put('/:id',usuarioController.actualizar);
router.delete('/:id',usuarioController.eliminar)
module.exports =router;