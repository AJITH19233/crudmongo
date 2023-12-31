const mongoose = require('mongoose');
const Schema=mongoose.Schema

const DetailsSchema = new Schema({
    VendorID:{
        type:String
    },
    Vendor_name:{
        type:String
    },
    Account_no:{
        type:String
    },
    Bank_name:{
        type:String
    },
    Address_Line1:{
        type:String
    },
    Address_Line2:{
        type:String
    },
    Zip_Code:{
        type:String
    }
})
const VendorData=mongoose.model('VendorData',DetailsSchema)
module.exports=VendorData