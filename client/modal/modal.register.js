const mongoose = require("mongoose")

const User = new mongoose.Schema({
    UserID : {type : Number},
    FirstName : {type : String},
    LastName : {type : String},
    Email : {type : String , required : true , unique : true},
    Password : {type : String},
    Status : {type : String}
})

const UserModal = mongoose.model("Users", User);

module.exports = UserModal;