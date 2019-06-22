const Sequelize = require('sequelize');
const Connection = require('../helper/connection');

const conn = new Connection();
const seq = conn.postgres();


const product_barcode = seq.define('productBarcode',{
    barcodeId: {
        field: "barcodeId",
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
    productId: {
      field: "productId",
      type: Sequelize.INTEGER,
      allowNull: true
    },
    barcode: {
      field: "barcode",
      type: Sequelize.STRING(64),
      allowNull: true
    },
    createOn: {
        field: "createOn",
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, { timestamps: false });

module.exports = product_barcode;