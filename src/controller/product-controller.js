const Util                  =   require('../helper/utils');
const Product               =   require("../models/product-model");
const ProductBarcode        =   require("../models/product-barcode-model");
const ProductPrice          =   require("../models/product-price-model");
const ProductPaymentMap     =   require("../models/product-payment-map-model");



class AddProductController{

    

    constructor(router) {
        this.router = router;
        this.routes();
        this.util = new Util();
    }

    async getAllProduct(req,res) {
        try{
            const allProducts = await Product.findAll();
            console.log(allProducts['productId']);
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
                this.util.setSuccess(200,'ProductById',product.dataValues)
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


    async getProductBarcode(req,res){
        try{
            const product = await ProductBarcode.findAll();
            console.log(product.dataValues);
            if (product) {
                this.util.setSuccess(200,'ProductBarcode',product)
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

    async getProductPrice(req,res){
        try{
            const product = await ProductPrice.findAll();
            console.log(product.dataValues);
            if (product) {
                this.util.setSuccess(200,'ProductPrice',product)
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

    async getProductPaymentMap(req,res){
        try{
            const product = await ProductPaymentMap.findAll();
            console.log(product.dataValues);
            if (product) {
                this.util.setSuccess(200,'ProductPaymentMap',product)
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

    async getLastIndex() {
        try{
            let productIndex = await Product.findOne({
                attributes: ['productId'],
                order: [['createOn', 'DESC']]
            });
            return productIndex.productId;
        }
        catch(error){
            return error;
        }
    }

    async addNewProduct(req,res) {
        try{
            let barcodes = ['12345167812','234561345671'];
            let paymentType = ['']
            
            /*
            let newProduct = await Product.findOne({ where: { productId: req.body.productId }});

            if (newProduct) {
                return res.send(this.utils.setResult(Types.Code.EXIST, "ProductId already exist", newProduct));
            }
            */

            let productLastIndex =  await this.getLastIndex();
            /*
            let myNewProduct = {
                productId: productLastIndex + 1,
                isActive: true,
                isDeleted: false,
                brandId:10,
                categoryId:1,
                code:12345678,
                name:"Danone Test",
                vatRate:8,
                stockUnitId:2,
                image:"http://service.rofoods.com/product/public/product-"+ this.productId +".png",
                energyKj:50,
                energyKcal:50
            };
            */

            let myNewProduct = {
                productId: productLastIndex + 1,
                isActive: true,
                isDeleted: false,
                brandId:req.body.brandId,
                categoryId:req.body.categoryId,
                code:req.body.code,
                name:req.body.name,
                vatRate:8,
                stockUnitId:req.body.stockUnitId,
                image:"http://service.rofoods.com/product/public/product-"+ this.productId +".png",
                energyKj:50,
                energyKcal:50
            };
            let newProduct = await Product.create(myNewProduct);

            this.util.setSuccess(200,'addNewProduct',newProduct);
            return this.util.send(res);
        }
        catch(error) {
            return res.send(error);
        }
    }

    

    routes() {
        /* GET home page. */
        this.router.get('/', function(req, res, next) {
            res.render('addNewProduct', {
                'title': 'Add New Product'
            });
        });
        this.router.get('/getAllProducts', this.getAllProduct.bind(this));
        this.router.get('/getProductById/:id',this.getProductById.bind(this));
        this.router.get('/getProductBarcode',this.getProductBarcode.bind(this));
        this.router.get('/getProductPrice',this.getProductPrice.bind(this));
        this.router.get('/getProductPaymentMap',this.getProductPaymentMap.bind(this));
        this.router.get('/addNewProduct',this.addNewProduct.bind(this));
    }
}


module.exports = AddProductController;