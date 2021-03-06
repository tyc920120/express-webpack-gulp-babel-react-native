/**
 * Created by 唐逸超 on 2016/12/22.
 */
'use strict'

let mongoose = require('mongoose');
let dbSetting = require('../../static/setting/db');
let dbStr = dbSetting.db+'://'+dbSetting.host+':'+dbSetting.port+'/'+dbSetting.dbname;
console.log(dbStr);
let db = mongoose.createConnection(dbStr);

db.on('error',function(error){
    console.log(error);
})

module.exports = db;