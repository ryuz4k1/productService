"use strict";

const Utils  = require("../helper/utils");
const Types  = require("../helper/tyoes");

class ExceptionMiddleware {
    
    errorHandler(err, req, res, next) {
        const utils  = new Util();
        return res.status(500).send(utils.setResult(Types.Code.ERROR, err.message, null)) ;
    }

}

module.exports = ExceptionMiddleware;