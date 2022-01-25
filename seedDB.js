const Crypto = require('./model/Crypto');
const request = require('postman-request');
const allTheVal = ['btcinr','xrpinr','ethinr','trxinr','eosinr','zilinr','batinr','zrxinr','reqinr','nulsinr','omginr'];
const callData = ()=>{
    request({url:'https://api.wazirx.com/api/v2/tickers',JSON:true},(error,response)=>{
    const value = JSON.parse(response.body);
    allTheVal.forEach(async (element)=>{

        await Crypto.create({
            acquireName:element,
            name: value[element].name,
            last: value[element].last,
            buy: value[element].buy,
            sell: value[element].sell,
            volume: value[element].volume,
            base_unit: value[element].base_unit
        })

      
    })
})}


module.exports = callData;  