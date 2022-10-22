const mongoose = require("mongoose")

const TokenList =new  mongoose.Schema({
    UserID : {type : Number},
    Token : {type : String},
    Purpose : {type : String},
    DateTime : {type : JSON}
})

const Tokens = mongoose.model("TokenList", TokenList);

module.exports = Tokens;
