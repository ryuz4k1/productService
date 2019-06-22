'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('productTest', {
    productId :{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
    },
    productName:{
      type:DataTypes.STRING,
      allowNull:true
    },
    productBarcode:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    createdAt: false,
    updatedAt: false
    
  }, {});
  product.associate = function(models) {
  };
  return product;
};