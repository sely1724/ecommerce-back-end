const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      // ADD NOT NULL
    },
    product_id: {
      type: DataTypes.INTEGER,
      // REFERENCE PRODUCT MODEL ID
    },
    tag_id: {
      type: DataTypes.INTEGER,
      // REFERENCE TAG MODEL's ID
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
