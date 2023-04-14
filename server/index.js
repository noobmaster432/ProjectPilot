const express=require('express')
const app=express();
const port=process.env.PORT||5000;
require('dotenv').config();
const connect =require("./db/db")
const bodyParser=require('body-parser')
const cors=require("cors")


//routes import
const authRoutes=require('./routes/authroutes')
const projectRoutes=require("./routes/projectRoutes");
const userRoutes=require("./routes/userRoute")
const errorHandler=require("./middlewares/errorHandler")


//middleware 
app.use(cors({
    origin:["http://localhost:3000"]
}))
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes middleware
app.use("/api/auth",authRoutes);
app.use('/api/project',projectRoutes);
app.use('/api/user',userRoutes);

//server test route
app.get("/",(req,res)=>{
    res.status(200).json({message:"Project pilot server is working perferctly"})
})

//error handler
app.use(errorHandler)

//connection to mongodb

connect(process.env.MONGO_URI)


//server listeing
app.listen(port,()=>{
    console.log(`Server is running on  ${port}`)
})
