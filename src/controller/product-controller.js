const Util                  =   require('../helper/utils');
const Product               =   require("../models/product-model");
const ProductBarcode        =   require("../models/product-barcode-model");
const ProductPrice          =   require("../models/product-price-model");
const ProductPaymentMap     =   require("../models/product-payment-map-model");
const Sequelize             =   require('sequelize');
const Connection            =   require("../helper/connection");

const connection = new Connection();
const sequelize  = connection.postgres();


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

    async getLastIndex(whichIndex) {
        try{
            switch (whichIndex) {
                case 1:
                    let productIndex = await Product.findOne({
                        attributes: [[sequelize.fn('max', sequelize.col('productId')), 'maxProductId']],
                        raw: true,
                    });
                    return productIndex.maxProductId;
                case 2:
                    let barcodeIndex = await ProductBarcode.findOne({
                        attributes: [[sequelize.fn('max', sequelize.col('barcodeId')), 'maxProductBarcode']],
                        raw: true
                    });
                    return barcodeIndex.maxProductBarcode;
                default:
                    break;
            }
        }
        catch(error){
            return error;
        }
    }

    async addNewProduct(req,res) {
        try{
            let { name, categoryId, brandId ,barcode, sellerId, unitPrice} = req.body;
            let errors = [];
            
            let productLastIndex =  await this.getLastIndex(1);
            let barcodeLastIndex =  await this.getLastIndex(2);
            console.log(productLastIndex)
            console.log(barcodeLastIndex)

            // Validate Fields
            if(!name) {
                errors.push({ text: 'Please add a name' });
            }
            if(!categoryId) {
                errors.push({ text: 'Please add some categoryId' });
            }
            if(!brandId) {
                errors.push({ text: 'Please add a brandId' });
            }
            
            let myNewProduct = {
                isActive: true,
                isDeleted: false,
                brandId: brandId,
                categoryId: categoryId,
                code: '123',
                name: name,
                vatRate: 8,
                stockUnitId: 5,
                image: "http://service.rofoods.com/product/public/product-" +`${productLastIndex+1}` + ".png",
                energyKj: 50,
                energyKcal: 50
            };
            
            let myNewProductBarcode = {
                productId: productLastIndex + 1,
                isActive: true,
                barcode: barcode
            };

            let myNewProductPrice = {
                priceId: productLastIndex + 1,
                isActive: true,
                productId: productLastIndex + 1,
                sellerId: sellerId,
                unitPrice: unitPrice
            };
            console.log(myNewProductPrice);

            let myProduct = await Product.create(myNewProduct);
            let myBarcode = await ProductBarcode.create(myNewProductBarcode);
            let myPrice = await ProductPrice.create(myNewProductPrice);

            this.util.setSuccess(200,'addNewProduct',myProduct);
            return this.util.send(res);
        }
        catch(error) {
            return res.send(error);
        }
    }

    

    routes() {
        /* GET add new product page. */
        /*
        this.router.get('/product/add', (req,res) => {
            res.render('addNewProduct')});
        */
        /* Post data function */
        this.router.post('/product/add', this.addNewProduct.bind(this));

        this.router.get('/product/getAllProducts', this.getAllProduct.bind(this));
        this.router.get('/product/getProductById/:id',this.getProductById.bind(this));
        this.router.get('/product/getProductBarcode',this.getProductBarcode.bind(this));
        this.router.get('/product/getProductPrice',this.getProductPrice.bind(this));
        this.router.get('/product/getProductPaymentMap',this.getProductPaymentMap.bind(this));
        //this.router.get('/product/add',this.addNewProduct.bind(this));
    }
}


module.exports = AddProductController;