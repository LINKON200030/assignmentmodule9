const express=require('express');
const cookieParser=require('cookie-parser');
const helmet=require('helmet');
const bodyParser=require('body-parser');

const router=require('./src/Routes/api');
const app=new express();




//Middleware Use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(helmet());


app.use('/api',router);

app.get('/',(req,res)=>{
    res.status(401).json({
        massage:'Not Found',
    })
})

module.exports=app;