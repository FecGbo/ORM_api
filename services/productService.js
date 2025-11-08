const db=require('../models')

const createProduct=async(item)=>{
    return await db.products.create(item)
}



module.exports={
    createProduct,
}