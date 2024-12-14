const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const InformacionCrediticia = sequelize.define(
  "InformacionCrediticia",
  {
    cliente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Cliente,
        key: "id",
      },
    },
    score_credito: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_creditos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creditos_al_dia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creditos_en_mora: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dias_mora_promedio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "InformacionCrediticia",
    timestamps: false,
  }
);

module.exports = {
  InformacionCrediticia,
};
