"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendas.hasMany(models.Venda_Comp, {
        foreignKey: "venda_id",
      });
      Vendas.hasMany(models.Entregas, {
        foreignKey: "venda_id",
      });
      Vendas.belongsTo(models.Clientes);
      Vendas.belongsTo(models.Usuarios);
    }
  }
  Vendas.init(
    {
      data_venda: DataTypes.DATEONLY,
      total: DataTypes.FLOAT,
      total_original: DataTypes.FLOAT,
      pago: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Vendas",
    }
  );
  return Vendas;
};
