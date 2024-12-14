import express from 'express';
import { crearCliente, obtenerClientes, obtenerClientePorId, actualizarCliente, eliminarCliente } from '../controllers/clienteController.js';
import { protegerRuta } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protegerRuta, crearCliente);
router.get('/', protegerRuta, obtenerClientes);
router.get('/:id', protegerRuta, obtenerClientePorId);
router.put('/:id', protegerRuta, actualizarCliente);
router.delete('/:id', protegerRuta, eliminarCliente);

export default router;