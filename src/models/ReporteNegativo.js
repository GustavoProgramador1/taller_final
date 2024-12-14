const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ReporteNegativo = sequelize.define(
  "ReporteNegativo",
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
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    entidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comentario: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "ReporteNegativo",
    timestamps: false,
  }
);

module.exports = {
  ReporteNegativo,
};
