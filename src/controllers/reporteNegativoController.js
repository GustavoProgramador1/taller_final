import {
  createReporteNegativo,
  findAllReporteNegativos,
  findReporteNegativoById,
  updateReporteNegativo,
  destroyReporteNegativo,
  buscarByCliente,
} from "../models/reporteNegativoModel.js";

// Crear reporteNegativo
const crearReporteNegativo = async (req, res) => {
  try {
    req.body.cliente_id=parseInt(req.body.cliente_id);
    req.body.estado='En mora';
    req.body.fecha=new Date(Date.now());
    
    const resultado = await createReporteNegativo(req.body);
    res
      .status(201)
      .json({ message: "ReporteNegativo creado exitosamente", id: resultado.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el reporteNegativo", error });
  }
};

// Obtener todos los reporteNegativos
const obtenerReporteNegativos = async (req, res) => {
  try {
    const reporteNegativos = await findAllReporteNegativos();
    res.status(200).json(reporteNegativos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los reporteNegativos", error });
  }
};

// Obtener un reporteNegativo por su ID
const obtenerReporteNegativoPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const resultados = await findReporteNegativoById(id);

    if (resultados.length === 0) {
      return res.status(404).json({ error: "ReporteNegativo no encontrado" });
    }

    res.status(200).json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el reporteNegativo" });
  }
};

// Actualizar reporteNegativo
const actualizarReporteNegativo = async (req, res) => {
  try {
    await updateReporteNegativo(req.params.id, req.body);
    res.status(200).json({ message: "ReporteNegativo actualizado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el reporteNegativo", error });
  }
};

// Eliminar reporteNegativo
const eliminarReporteNegativo = async (req, res) => {
  try {
    await destroyReporteNegativo(req.params.id);
    res.status(200).json({ message: "ReporteNegativo eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el reporteNegativo", error });
  }
};

const obtenerReporteNegativoPorCliente = async (req, res) => {
  const { cliente_id } = req.params;

  try {
    const resultados = await buscarByCliente(cliente_id);

    if (resultados.length === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.status(200).json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

export {
  crearReporteNegativo,
  obtenerReporteNegativos,
  obtenerReporteNegativoPorId,
  actualizarReporteNegativo,
  eliminarReporteNegativo,
  obtenerReporteNegativoPorCliente,
};