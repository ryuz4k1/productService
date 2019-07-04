"use strict";

const packageJson = require("../../package.json");

class Utils {
  setResult(code, message, data) {
    const result = {
        code: code,
        message: message,
        data: data,
        time: Date.now(),
        api: {
            author: packageJson.author,
            name: packageJson.name,
            description: packageJson.description,
            version: packageJson.version
        }
    }
    return result;
  }

}

  module.exports = Utils;