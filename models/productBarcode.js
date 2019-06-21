'use strict';
module.exports = (sequelize, DataTypes) => {
  const productBarcode = sequelize.define('productBarcode', {
    
  }, {});
  productBarcode.associate = function(models) {
  };
  return productBarcode;
};