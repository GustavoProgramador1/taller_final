import express from "express";
import {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
  obtenerClientePorDocumento,
  obtenerPuntaje,
} from "../controllers/clienteController.js";
import { protegerRuta } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protegerRuta, crearCliente);
router.get("/", protegerRuta, obtenerClientes);
router.get("/:id", protegerRuta, obtenerClientePorId);
router.put("/:id", protegerRuta, actualizarCliente);
router.delete("/:id", protegerRuta, eliminarCliente);
router.get(
  "/:tipoDocumento/:numeroDocumento",
  protegerRuta,
  obtenerClientePorDocumento
);
router.get(
  "/puntaje/:tipoDocumento/:numeroDocumento",
  protegerRuta,
  obtenerPuntaje
);

export default router;