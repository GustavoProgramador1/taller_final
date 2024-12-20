import {
  createCliente,
  findAllClientes,
  findClienteById,
  updateCliente,
  destroyCliente,
  buscarCliente,
} from "../models/clienteModel.js";

import { buscarByCliente as buscarByClienteinformacionCrediticia, buscarByClienteAll as buscarByClienteAllinformacionCrediticia } from "../models/informacionCrediticiaModel.js";
import { buscarByCliente as buscarByClientecreditoModel, buscarByClienteAll as buscarByClienteAllcreditoModel } from "../models/creditoModel.js";
import { buscarByCliente as buscarByClientereporteNegativoModel, buscarByClienteAll as buscarByClienteAllreporteNegativoModel } from "../models/reporteNegativoModel.js";

// Crear cliente
const crearCliente = async (req, res) => {
  try {
    const resultado = await createCliente(req.body);
    res
      .status(201)
      .json({ message: "Cliente creado exitosamente", id: resultado.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el cliente", error });
  }
};

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await findAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los clientes", error });
  }
};

// Obtener un cliente por su ID
const obtenerClientePorId = async (req, res) => {
  const { id } = req.params;

  try {
    const resultados = await findClienteById(id);

    if (resultados.length === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.status(200).json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

// Actualizar cliente
const actualizarCliente = async (req, res) => {
  try {
    await updateCliente(req.params.id, req.body);
    res.status(200).json({ message: "Cliente actualizado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el cliente", error });
  }
};

// Eliminar cliente
const eliminarCliente = async (req, res) => {
  try {
    await destroyCliente(req.params.id);
    res.status(200).json({ message: "Cliente eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el cliente", error });
  }
};

const obtenerClientePorDocumento = async (req, res) => {
  const { tipoDocumento, numeroDocumento } = req.params;

  try {
    const resultados = await buscarCliente(tipoDocumento, numeroDocumento);

    if (resultados.length === 0) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.status(200).json(resultados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el cliente" });
  }
};

const obtenerPuntaje = async (req, res) => {
  const { tipoDocumento, numeroDocumento } = req.params;

  try {
    const cliente = await buscarCliente(tipoDocumento, numeroDocumento);

    const resultados = await buscarByClienteinformacionCrediticia(cliente.id);

    res.status(200).json({
      ...cliente.dataValues,
      puntaje_datacredito: resultados.score_credito,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el puntaje" });
  }
};

const obtenerCreditosCantidad = async (req, res) => {
  const { tipoDocumento, numeroDocumento } = req.params;

  try {
    const cliente = await buscarCliente(tipoDocumento, numeroDocumento);

    const resultados = await buscarByClienteAllcreditoModel(cliente.id);

    res.status(200).json({
      ...cliente.dataValues,
      cantidad_creditos: resultados.filter((credito) => credito.dataValues.estado === 'Activo').length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el CreditosCantidad" });
  }
};

const obtenerDeuda = async (req, res) => {
  const { tipoDocumento, numeroDocumento } = req.params;

  try {
    const cliente = await buscarCliente(tipoDocumento, numeroDocumento);

    const resultados = await buscarByClienteAllcreditoModel(cliente.id);

    res.status(200).json({
      ...cliente.dataValues,
      deuda_total: resultados.reduce((total, credito) => total + parseInt(credito.dataValues.saldo_actual), 0),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el Deuda" });
  }
};

const obtenerReporteNegativoCantidad = async (req, res) => {
  const { tipoDocumento, numeroDocumento } = req.params;

  try {
    const cliente = await buscarCliente(tipoDocumento, numeroDocumento);

    const resultados = await buscarByClienteAllreporteNegativoModel(cliente.id);

    res.status(200).json({
      ...cliente.dataValues,
      reportes_negativos: resultados.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el ReporteNegativoCantidad" });
  }
};

const obtenerReporteNegativoMonto = async (req, res) => {
  const { tipoDocumento, numeroDocumento } = req.params;

  try {
    const cliente = await buscarCliente(tipoDocumento, numeroDocumento);

    const resultados = await buscarByClienteAllreporteNegativoModel(cliente.id);

    res.status(200).json({
      ...cliente.dataValues,
      monto_reportado: resultados.reduce((total, reporte) => total + reporte.monto, 0),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el ReporteNegativoMonto" });
  }
};

export {
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
};