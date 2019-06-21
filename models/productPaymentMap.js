'use strict';
module.exports = (sequelize, DataTypes) => {
  const productPaymentMap = sequelize.define('productPaymentMap', {
    
  }, {});
  productPaymentMap.associate = function(models) {
  };
  return productPaymentMap;
};