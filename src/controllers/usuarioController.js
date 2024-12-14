import Usuario from "../models/Usuario.js";

export const obtenerUsuarioPorId = async (id) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new Error("Usuario no encontrado...");
  }
  return usuario;
};
