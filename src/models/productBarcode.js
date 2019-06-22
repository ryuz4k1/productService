'use strict';
module.exports = (sequelize, DataTypes) => {
  const productBarcode = sequelize.define('productBarcodeTest', {
    barcodeId : {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    productId : {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  productBarcode.associate = function(models) {
  };
  return productBarcode;
};