const mongoose = require('mongoose');
const web_reqSchema= new mongoose.Schema({
    req_id:{
        type:String,
        unique:true,
    },
    url:{
        type:String,
    },
    frontend:{
        type:String,
    },
    backend:{
        type:String,
    },
    database:{
        type:String,
    },
    webType:{
        type:String,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phoneNumber:{
        type:String,
    },
    message:{
        type:String,
    },
    totalEstimate:{
        type:String,
    },
    numberOfPages:{
        type:String,
    },
    paymentid:{
        type:String,
    },
    payment_gateway:{
        type:String,
    },
    payment_status:{
        type:String,
    },
},{timestamps:true});
module.exports= mongoose.model('web_req',web_reqSchema);