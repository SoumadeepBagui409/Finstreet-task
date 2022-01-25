const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    acquireName:{
        type:String
    },
    name:{
        type:String
    },
    last:{
        type:String
    },
    buy:{
        type:String
    },
    sell:{
        type:String
    },
    volume:{
        type: String
    },
    base_unit:{
        type:String
    }
});

const Crypto = mongoose.model('Crypto',cryptoSchema);

module.exports = Crypto;