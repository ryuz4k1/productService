"use strict";

const express    = require("express");
const bodyParser = require("body-parser");

const ExceptionMiddleware    = require("./middleware/exception-middleware");
const ProductController      = require("./controller/add-product-controller");

class App {
    constructor() {
        this.app = express();

        this.config();
        this.controllers();
    }
    config() {
        // ... Body parser
        this.app.use(bodyParser.json());
    }
    controllers() {
        // ... Define routes 
        let router = express.Router();
        this.app.use("/", router);
        new ProductController(router);
        
        // ... Exception middleware
        const exceptionMiddleware = new ExceptionMiddleware();
        this.app.use(exceptionMiddleware.errorHandler);
    }
    getApp() {
        return this.app;
    }
}

module.exports = App;