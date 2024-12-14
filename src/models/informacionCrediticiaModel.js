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