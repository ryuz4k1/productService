const Sequelize = require('sequelize');
const Connection = require('../helper/connection');

const conn = new Connection();
const seq = conn.postgres();

const product_price = seq.define('productPrice',{
    priceId : {
        field: "productId",
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isActive : {
        field: "isActive",
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    isDeleted : {
        field: "isDeleted",
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    productId : {
        field: "productId",
        type: Sequelize.INTEGER,
        allowNull:true
    },
    sellerId : {
        field: "sellerId",
        type: Sequelize.INTEGER,
        allowNull: true
    },
    unitPrice : {
        field: "unitPrice",
        type: Sequelize.INTEGER,
        allowNull: true
    },
    createOn : {
        field: "createOn",
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    }

}, {timestamp : false});

module.exports = product_price;