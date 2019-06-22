const Sequelize = require('sequelize');
const Connection = require('../helper/connection');

const conn = new Connection();
const seq = conn.postgres();


const product_payment_map = seq.define('productPaymentMap',{
    paymentMapId: {
        field: "paymentMapId",
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isActive: {
        field: "isActive",
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    isDeleted: {
        field: "isDeleted",
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    productId: {
        field: "productId",
        type: Sequelize.INTEGER,
        allowNull: true
    },
    paymentType: {
        field: "paymentType",
        type: Sequelize.INTEGER,
        allowNull: true
    },
    createOn: {
        field: "createOn",
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

module.exports = product_payment_map;