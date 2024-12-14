import {
  createCredito,
  findAllCreditos,
  findCreditoById,
  updateCredito,
  destroyCredito,
  buscarByCliente,
} from "../models/creditoModel.js";

// Crear credito
const crearCredito = async (req, res) => {
  try {
    const resultado = await createCredito(req.body);
    res
      .status(201)
      .json({ message: "Credito creado exitosamente", id: resultado.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el credito", error });
  }
};

// Obtener todos los creditos
const obtenerCreditos = async (req, res) => {
  try {
    const creditos = await findAllCreditos();
    res.status(200).json(creditos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los creditos", error });
  }
};

// Obtener un credito por su ID
const obtenerCreditoPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const resultados = await findCreditoById(id);

    if (resultados.length === 0) {
      return res.status(404).json({ error: "Credito no encontrado" });
    }

    res.status(200).json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el credito" });
  }
};

// Actualizar credito
const actualizarCredito = async (req, res) => {
  try {
    await updateCredito(req.params.id, req.body);
    res.status(200).json({ message: "Credito actualizado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el credito", error });
  }
};

// Eliminar credito
const eliminarCredito = async (req, res) => {
  try {
    await destroyCredito(req.params.id);
    res.status(200).json({ message: "Credito eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el credito", error });
  }
};

const obtenerCreditoPorCliente = async (req, res) => {
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
  crearCredito,
  obtenerCreditos,
  obtenerCreditoPorId,
  actualizarCredito,
  eliminarCredito,
  obtenerCreditoPorCliente,
};