"use strict";
const express                = require("express");
const bodyParser             = require("body-parser");
const ExceptionMiddleware    = require("./middleware/exception-middleware");
const ProductController      = require("./controller/product-controller");
var engines = require('consolidate');



class App {
    constructor() {
        this.app = express();

        this.config();
        this.controllers();
    }
    config() {
        // ... Body parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // view engine setup
        console.log(__dirname+'/views')
        this.app.set('views', __dirname + '/views');
        this.app.engine('html', engines.mustache);
        this.app.set('view engine', 'html');

        // Set static folder
        this.app.use(express.static(__dirname + '../public'));
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