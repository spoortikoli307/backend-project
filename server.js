import express from "express";
import dotenv from "dotenv";
import connectdb from "./db/dbconnect.js";
import userrouter from './router/userroutes.js';
import jobrouter from './router/jobsroutes.js';
const app = express();
dotenv.config();//load env variables
connectdb(); 
//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.status(200).send("server is running fine");
})
app.get('/api/home',(req,res)=>{
    res.status(200).send("Home page route checking");
})
//ROUTES
app.use('/api',userrouter)
app.use('/api',jobrouter)
let port=process.env.port || 5051;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});