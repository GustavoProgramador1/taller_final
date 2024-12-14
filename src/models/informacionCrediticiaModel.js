import InformacionCrediticia from './InformacionCrediticia.js';

// Crear informacionCrediticia
export const createInformacionCrediticia = async (datos) => {
    const nuevoInformacionCrediticia = await InformacionCrediticia.create(datos);
    return nuevoInformacionCrediticia;
};

// Obtener todos los informacionCrediticias
export const findAllInformacionCrediticias = async () => {
    const informacionCrediticias = await InformacionCrediticia.findAll();
    return informacionCrediticias;
};

// Obtener informacionCrediticia por ID
export const findInformacionCrediticiaById = async (id) => {
    const informacionCrediticia = await InformacionCrediticia.findByPk(id); // findByPk busca por llave primaria
    return informacionCrediticia;
};

// Actualizar informacionCrediticia
export const updateInformacionCrediticia = async (id, datos) => {
    const informacionCrediticia = await InformacionCrediticia.findByPk(id);
    if (!informacionCrediticia) return null;

    await informacionCrediticia.update(datos);
    return informacionCrediticia;
};

// Eliminar informacionCrediticia
export const destroyInformacionCrediticia = async (id) => {
    const informacionCrediticia = await InformacionCrediticia.findByPk(id);
    if (!informacionCrediticia) return null;

    await informacionCrediticia.destroy();
    return informacionCrediticia;
};

// Buscar cliente por tipo de documento y número
export const buscarByCliente = async (cliente_id) => {
    try {
        // Buscar en la base de datos un cliente que coincida con el tipo y número de documento
        const cliente = await InformacionCrediticia.findOne({
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