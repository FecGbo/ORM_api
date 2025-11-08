const productService=require('../services/productService')

const createProduct=async(req,res)=>{
    try {
        const product=await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


module.exports={
    createProduct
}