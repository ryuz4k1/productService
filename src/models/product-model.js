const Sequelize  = require('sequelize');
const Connection = require("../helper/connection");

// ... Connection
const connection = new Connection();
const sequelize  = connection.postgres();

const Product = sequelize.define("product", {
    productId: {
        field: "productId",
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isActive: {
        field: "isActive",
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    isDeleted: {
        field: "isDeleted",
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    brandId: {
      field: "brandId",
      type: Sequelize.INTEGER,
      allowNull: true
    },
    categoryId: {
      field: "categoryId",
      type: Sequelize.INTEGER,
      allowNull: true
    },
    code: {
      field: "code",
      type: Sequelize.STRING(64),
      allowNull: true
    },
    name: {
        field: "name",
        type: Sequelize.STRING(255),
        allowNull: true
    },
    vatRate: {
      field: "vatRate",
      type: Sequelize.INTEGER,
      allowNull: true
    },
    stockUnitId: {
      field: "stockUnitId",
      type: Sequelize.INTEGER,
      allowNull: false
    },
    image: {
        field: "image",
        type: Sequelize.STRING(255),
        allowNull: false
    },
    energyKj: {
        field: "energyKj",
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    energyKcal: {
      field: "energyKcal",
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    createOn: {
        field: "createOn",
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, { timestamps: false });

module.exports = Product;
