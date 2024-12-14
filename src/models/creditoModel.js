import Credito from './Credito.js';

// Crear credito
export const createCredito = async (datos) => {
    const nuevoCredito = await Credito.create(datos);
    return nuevoCredito;
};

// Obtener todos los creditos
export const findAllCreditos = async () => {
    const creditos = await Credito.findAll();
    return creditos;
};

// Obtener credito por ID
export const findCreditoById = async (id) => {
    const credito = await Credito.findByPk(id); // findByPk busca por llave primaria
    return credito;
};

// Actualizar credito
export const updateCredito = async (id, datos) => {
    const credito = await Credito.findByPk(id);
    if (!credito) return null;

    await credito.update(datos);
    return credito;
};

// Eliminar credito
export const destroyCredito = async (id) => {
    const credito = await Credito.findByPk(id);
    if (!credito) return null;

    await credito.destroy();
    return credito;
};

// Buscar cliente por tipo de documento y número
export const buscarByCliente = async (cliente_id) => {
    try {
        // Buscar en la base de datos un cliente que coincida con el tipo y número de documento
        const cliente = await Credito.findOne({
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