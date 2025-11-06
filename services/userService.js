const db=require('../models')

const createUser=async(userData)=>{
    try{
        const user=await db.User.create(userData)
        return user
    }catch(error){
        throw error
    }
}



module.exports={
    createUser
}