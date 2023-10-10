const app=require('./app.js');
const dotenv=require('dotenv');
const mongoose=require('mongoose');

dotenv.config('config.env');

mongoose.connect('mongodb://localhost:27017/assignment9',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Connection Successful');
        app.listen(process.env.RUNNING_PORT,()=>{
            console.log('Server is up and running');
        })
    }).catch((err)=>{
        console.log('Connection Failed');
    })

