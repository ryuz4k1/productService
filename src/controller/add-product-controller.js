const AddProductService     =   require('../services/AddProductService');
const Util                  =   require('../helper/utils');


class AddProductController{
    constructor(router) {
        this.router = router;
        this.routes();
        this.util = new Util();
    }

    async getAllProduct(req,res) {
        try{
            const allProducts = await AddProductService.getAllProduct();
            if (allProducts.length > 0) {
                this.util.setSuccess(200, 'Products retrieved', allProducts);
              } else {
                this.util.setSuccess(200, 'No product found');
              }
              return this.util.send(res);
        }
        catch(error){
            this.util.setError(400, error);
            return this.util.send(res);
        }
    }

    routes() {
        this.router.get('/getAllProducts', this.getAllProduct.bind(this));
    }
}


module.exports = AddProductController;