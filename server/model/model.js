const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    cityname:{
        type:String,
        required: true
    },
    time : { 
        type : Date,
        default: Date.now
    }
});

const Citydb = mongoose.model('citydb',schema);

module.exports = Citydb;