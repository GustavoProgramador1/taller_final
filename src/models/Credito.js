import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Credito = sequelize.define(
  "Credito",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Cliente,
        key: "id",
      },
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto_original: {
      type: DataTypes.DECIMAL(15, 2),
    },
    saldo_actual: {
      type: DataTypes.DECIMAL(15, 2),
    },
    limite: {
      type: DataTypes.DECIMAL(15, 2),
    },
    numero: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Credito",
    timestamps: false,
  }
);

export default Credito;
