'use strict';
module.exports = (sequelize, DataTypes) => {
  const productPrice = sequelize.define('productPrice', {
    
  }, {});
  productPrice.associate = function(models) {
  };
  return productPrice;
};