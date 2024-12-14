import ReporteNegativo from './ReporteNegativo.js';

// Crear reporteNegativo
export const createReporteNegativo = async (datos) => {
    const nuevoReporteNegativo = await ReporteNegativo.create(datos);
    return nuevoReporteNegativo;
};

// Obtener todos los reporteNegativos
export const findAllReporteNegativos = async () => {
    const reporteNegativos = await ReporteNegativo.findAll();
    return reporteNegativos;
};

// Obtener reporteNegativo por ID
export const findReporteNegativoById = async (id) => {
    const reporteNegativo = await ReporteNegativo.findByPk(id); // findByPk busca por llave primaria
    return reporteNegativo;
};

// Actualizar reporteNegativo
export const updateReporteNegativo = async (id, datos) => {
    const reporteNegativo = await ReporteNegativo.findByPk(id);
    if (!reporteNegativo) return null;

    await reporteNegativo.update(datos);
    return reporteNegativo;
};

// Eliminar reporteNegativo
export const destroyReporteNegativo = async (id) => {
    const reporteNegativo = await ReporteNegativo.findByPk(id);
    if (!reporteNegativo) return null;

    await reporteNegativo.destroy();
    return reporteNegativo;
};

// Buscar cliente por tipo de documento y número
export const buscarByCliente = async (cliente_id) => {
    try {
        // Buscar en la base de datos un cliente que coincida con el tipo y número de documento
        const cliente = await ReporteNegativo.findOne({
            where: {
                cliente_id: cliente_id
            }
        });

        // Lanzar error si el cliente no existe
        if (!cliente) {
            throw new Error("cliente no encontrado");
        }

        return cliente;
    } catch (error) {
        console.error("Error al buscar cliente:", error.message);
        throw error;
    }
};

// Buscar cliente por tipo de documento y número
export const buscarByClienteAll = async (cliente_id) => {
    try {
        // Buscar en la base de datos un cliente que coincida con el tipo y número de documento
        const cliente = await Credito.findAll({
            where: {
                cliente_id: cliente_id
            }
        });

        // Lanzar error si el cliente no existe
        if (!cliente) {
            throw new Error("cliente no encontrado");
        }

        return cliente;
    } catch (error) {
        console.error("Error al buscar cliente:", error.message);
        throw error;
    }
};