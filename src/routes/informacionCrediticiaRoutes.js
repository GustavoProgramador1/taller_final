import express from "express";
import {
  crearInformacionCrediticia,
  obtenerInformacionCrediticias,
  obtenerInformacionCrediticiaPorId,
  actualizarInformacionCrediticia,
  eliminarInformacionCrediticia,
} from "../controllers/informacionCrediticiaController.js";
import { protegerRuta } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protegerRuta, crearInformacionCrediticia);
router.get("/", protegerRuta, obtenerInformacionCrediticias);
router.get("/:id", protegerRuta, obtenerInformacionCrediticiaPorId);
router.put("/:id", protegerRuta, actualizarInformacionCrediticia);
router.delete("/:id", protegerRuta, eliminarInformacionCrediticia);

export default router;