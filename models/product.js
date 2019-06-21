'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    
  }, {});
  product.associate = function(models) {
  };
  return product;
};