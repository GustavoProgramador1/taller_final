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
