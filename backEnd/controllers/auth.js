const ADODB = require('@el3um4s/node-adodb');
const { DB_URL, DB_KEY } = require('../config.json')
const { json } = require('express');

const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=' + DB_URL + ';Jet OLEDB:Database Password= ' + DB_KEY + ';');


module.exports.login = async (req, res, next) => {

   try {
      const results = await connection.query('SELECT Tennv, pass, quyen FROM Nhanvien where Tennv = "' + req.body.username + '";');    
      if (results[0].pass === req.body.password) {
         const shop = await connection.query('select shop from tshop;');
         res.json({ success: true, data: {Tennv: results[0].Tennv, quyen: results[0].quyen, shop: shop[0].shop} })
      } else {
         res.status(403).json({ success: false, data: "Invalid username / password" })
      }
   } catch (e) {
        next(e)
   }
}