const db=require('../models')

const createUser=async(userData)=>{
    try{
        const users=await db.users.create(userData)
        return users
    }catch(error){
        throw error
    }

    // return await db.users.create(userData);
}



const getAllUsers=async()=>{
    return await db.users.findAll();
}

const getUserById = async (id)=>{
    return await  db.users.findByPk(id);
}

const updateUser=async(id,data)=>{
    const user=await db.users.findByPk(id);
    if(!user) throw new Error("User Not Found")

    return await user.update(data);
}

const deleteUser=async(id)=>{
    const user=await db.users.findByPk(id);
    if(!user) throw new Error("User Not Found");

    await user.destroy();
 return {message:"User Delete Successful "};
}


module.exports={
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}