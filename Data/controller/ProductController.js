const ProductModel = require('../Collection/Products')
class ProductController{
    //signIn
    async createOne (request, response){
      try {
       
        const {title,price,image,colors,size,description} =request.body;
        if(!title){
          return response.json({
            success:false,
            messages:'Title khong duoc de trong'
          })
        }else if (!price){
          return response.json({
            success:false,
            messages:'Price phai > 0'
          })
        }
        else{
          const newProduct = await ProductModel({
            title,
            price,
            image,
            colors,
            size,
            description
          }).save();
          return response.json({
            success:true,
            messages:'Them thanh cong',
            product : newProduct
          }) 
        }
      } catch (error) {
        return response.json({
          success:false,
          messages:error.toString()
        })
      }
    }
    //Register
    async findById(request,response){
      try {
        const findProduct = await ProductModel.findById(request.params.id);
        return response.json({
          success:true,
          product : findProduct
        })
      } catch (error) {
        return response.json({
          success:false,
          messages:error.toString()
        })
      }
    }

    async findAll(request,response){
      try {
        const findProduct = await ProductModel.find({});
        return response.json({
          success:true,
          products : findProduct
        })
      } catch (error) {
        return response.json({
          success:false,
          messages:error.toString()
        })
      }
    }
     
}

module.exports= new ProductController();
