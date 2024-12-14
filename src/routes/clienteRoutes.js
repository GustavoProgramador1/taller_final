import express from "express";
import {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
  obtenerClientePorDocumento,
  obtenerPuntaje,
  obtenerCreditosCantidad,
  obtenerDeuda,
  obtenerReporteNegativoCantidad,
  obtenerReporteNegativoMonto,
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
router.get(
  "/CreditosCantidad/:tipoDocumento/:numeroDocumento",
  protegerRuta,
  obtenerCreditosCantidad
);
router.get(
  "/Deuda/:tipoDocumento/:numeroDocumento",
  protegerRuta,
  obtenerDeuda
);
router.get(
  "/ReporteNegativoCantidad/:tipoDocumento/:numeroDocumento",
  protegerRuta,
  obtenerReporteNegativoCantidad
);
router.get(
  "/ReporteNegativoMonto/:tipoDocumento/:numeroDocumento",
  protegerRuta,
  obtenerReporteNegativoMonto
);

export default router;