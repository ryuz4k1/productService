"use strict";

const Sequelize = require("sequelize");

class Connection {

    // ... Postgres sequelize
    postgres() {
        try {
            console.log(process.env.CONNECTION_STRING);
            return new Sequelize(process.env.CONNECTION_STRING, {
                dialect: "postgres",
                dialectOptions: { decimalNumbers: true },
                logging: false,
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                define: {
                    freezeTableName: true,
                    defaultScope: {
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        }
                    }
                }
            });
        } 
        catch (err) {
            console.log(err);
        }
    }
}

module.exports = Connection;