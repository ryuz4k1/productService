const Util                  =   require('../helper/utils');
const Product               =   require("../models/product-model");

class AddProductController{
    constructor(router) {
        this.router = router;
        this.routes();
        this.util = new Util();
    }

    async getAllProduct(req,res) {
        try{
            const allProducts = await Product.findAll();
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

    async getProductById(req,res){
        try{
            const product = await Product.findOne({where : {productId : req.params.id}});
            console.log(product.dataValues);
            if (product) {
                this.util.setSuccess(200,'Product',product.dataValues)
            }
            else {
                this.util.setSuccess(200,'No product found');
            }
            return this.util.send(res);
        }
        catch(error) {
            this.util.setError(400,error);
            return this.util.send(res);
        }
    }

    routes() {
        this.router.get('/getAllProducts', this.getAllProduct.bind(this));
        this.router.get('/getProductById/:id',this.getProductById.bind(this));
    }
}


module.exports = AddProductController;