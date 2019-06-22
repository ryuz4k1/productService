const db    =   require('../models');

class AddProductService{
    async getAllProduct(){
        try{
            return await db.product.findAll();
        }
        catch(error){
            throw error;
        }
        
    }
}

module.exports = AddProductService;