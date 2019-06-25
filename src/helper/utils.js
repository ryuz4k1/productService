class Util {
    constructor() {
      this.statusCode = null;
      this.type = null;
      this.data = null;
      this.message = null;
    }
  
    setSuccess(statusCode, message, data) {
      this.statusCode = statusCode;
      this.message = message;
      this.data = data;
      this.type = 'success';
    }
  
    setError(statusCode, message) {
      this.statusCode = statusCode;
      this.message = message;
      this.type = 'error';
    }

    setResult(code, message, data) {
      return result = {
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
  }
  
    send(res) {
      const result = {
        status: this.type,
        message: this.message,
        data: this.data,
      };
  
      if (this.type === 'success') {
        return res.status(this.statusCode).json(result);
      }
      return res.status(this.statusCode).json({
        status: this.type,
        message: this.message,
      });
    }
  }

  module.exports = Util;