const express=require('express');
const db=require('./models')
const userRoutes=require('./routes/userRoute')


const app=express();
app.use(express.json());

app.use("/api/users",userRoutes);

const port=8484;
db.sequelize.sync().then(()=>{
    console.log("Database Connect Successful");
    app.listen(port,()=>{
        console.log(`Server is Running on Port ${port}`);
    })
});