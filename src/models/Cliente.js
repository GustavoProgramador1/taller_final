import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Cliente = sequelize.define(
  "Cliente",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero_documento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado_civil: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nivel_educativo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "cliente",
    timestamps: false,
  }
);

export default Cliente;