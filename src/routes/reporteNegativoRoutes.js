import express from "express";
import {
  crearReporteNegativo,
  obtenerReporteNegativos,
  obtenerReporteNegativoPorId,
  actualizarReporteNegativo,
  eliminarReporteNegativo,
  obtenerReporteNegativoPorCliente,
} from "../controllers/reporteNegativoController.js";
import { protegerRuta } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protegerRuta, crearReporteNegativo);
router.get("/", protegerRuta, obtenerReporteNegativos);
router.get("/:id", protegerRuta, obtenerReporteNegativoPorId);
router.put("/:id", protegerRuta, actualizarReporteNegativo);
router.delete("/:id", protegerRuta, eliminarReporteNegativo);
router.get("/cliente/:cliente_id", protegerRuta, obtenerReporteNegativoPorCliente);

export default router;