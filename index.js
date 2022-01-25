const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Crypto = require('./model/Crypto');
const request = require('postman-request');
const callData = require('./seedDB.js');
const allTheVal = ['btcinr','xrpinr','ethinr','trxinr','eosinr','zilinr','batinr','zrxinr','reqinr','nulsinr','omginr'];
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
mongoose.connect('mongodb://localhost:27017/Crypto-data');
const optionsval = [
    "BTC",
    "XRP",
    "ETH",
    "TRX",
    "EOS",
    "ZIL",
    "BAT",
    "ZRX",
    "REQ",
    "NULS",
    "OMG"
]

 // callData();


app.use(function(req,res,next){
    
    request({url:'https://api.wazirx.com/api/v2/tickers',JSON:true},async(error,response)=>{
        const value = JSON.parse(response.body);
        for(let ele of allTheVal){
            try{
                const findit = {acquireName:ele};
                const updated = {
                    last: value[ele].last,
                    buy: value[ele].buy,
                    sell: value[ele].sell,
                    volume: value[ele].volume,
                    base_unit: value[ele].base_unit
                }
                const isit = await Crypto.findOneAndUpdate(findit,updated);
            }catch(err){
                console.log(err.message);
            }
           
        }
    })
    next(); 
})


    app.get('/',async(req,res)=>{
        const allCrypto = await Crypto.find({});
        const allvalue = [];
        allCrypto.forEach((ele)=>{
            allvalue.push(ele);
        })
                res.render("home",{cryptoValue:allvalue,show:optionsval});
        
    })

app.listen(3000);