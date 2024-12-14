import Cliente from './Cliente.js';

// Crear cliente
export const createCliente = async (datos) => {
    const nuevoCliente = await Cliente.create(datos);
    return nuevoCliente;
};

// Obtener todos los clientes
export const findAllClientes = async () => {
    const clientes = await Cliente.findAll();
    return clientes;
};

// Obtener cliente por ID
export const findClienteById = async (id) => {
    const cliente = await Cliente.findByPk(id); // findByPk busca por llave primaria
    return cliente;
};

// Actualizar cliente
export const updateCliente = async (id, datos) => {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;

    await cliente.update(datos);
    return cliente;
};

// Eliminar cliente
export const destroyCliente = async (id) => {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;

    await cliente.destroy();
    return cliente;
};

// Buscar cliente por tipo de documento y número
export const buscarCliente = async (tipoDocumento, numeroDocumento) => {
    try {
        // Buscar en la base de datos un cliente que coincida con el tipo y número de documento
        const cliente = await Cliente.findOne({
            where: {
                tipo_documento: tipoDocumento.toLowerCase(),
                numero_documento: numeroDocumento
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