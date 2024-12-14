import {
  createInformacionCrediticia,
  findAllInformacionCrediticias,
  findInformacionCrediticiaById,
  updateInformacionCrediticia,
  destroyInformacionCrediticia,
} from "../models/informacionCrediticiaModel.js";

// Crear informacionCrediticia
const crearInformacionCrediticia = async (req, res) => {
  try {
    const resultado = await createInformacionCrediticia(req.body);
    res
      .status(201)
      .json({ message: "InformacionCrediticia creado exitosamente", id: resultado.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el informacionCrediticia", error });
  }
};

// Obtener todos los informacionCrediticias
const obtenerInformacionCrediticias = async (req, res) => {
  try {
    const informacionCrediticias = await findAllInformacionCrediticias();
    res.status(200).json(informacionCrediticias);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los informacionCrediticias", error });
  }
};

// Obtener un informacionCrediticia por su ID
const obtenerInformacionCrediticiaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const resultados = await findInformacionCrediticiaById(id);

    if (resultados.length === 0) {
      return res.status(404).json({ error: "InformacionCrediticia no encontrado" });
    }

    res.status(200).json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el informacionCrediticia" });
  }
};

// Actualizar informacionCrediticia
const actualizarInformacionCrediticia = async (req, res) => {
  try {
    await updateInformacionCrediticia(req.params.id, req.body);
    res.status(200).json({ message: "InformacionCrediticia actualizado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el informacionCrediticia", error });
  }
};

// Eliminar informacionCrediticia
const eliminarInformacionCrediticia = async (req, res) => {
  try {
    await destroyInformacionCrediticia(req.params.id);
    res.status(200).json({ message: "InformacionCrediticia eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el informacionCrediticia", error });
  }
};

export {
  crearInformacionCrediticia,
  obtenerInformacionCrediticias,
  obtenerInformacionCrediticiaPorId,
  actualizarInformacionCrediticia,
  eliminarInformacionCrediticia,
};