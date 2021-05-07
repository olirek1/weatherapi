var Citydb = require('../model/model');


exports.create = (req,res)=>{

    //validate request
    if(!req.body){
        res.status(400).send({ message : "content can not be empty"});
        return;
    }
    // console.log(req);
    //create user
    const city = new Citydb({
        cityname : req.body.cityname
    })

    // save user in database
    city
        .save(city)
        .then(data=>{
            res.status(200).send(city)
        })
        .catch(err=>{
            res.status(500).send({
                message : err.message || "some error occured while saving your data"
            });
        });
}

// find recent searches
exports.recent = (req,res)=>{
    Citydb.find().sort({_id:-1}).limit(10)
    .then(city=>{
        res.status(200).send(city)
    })
    .catch(err =>{
        res.status(500).send({ message : err.message || "Error occured while retrieving the data"});
    })
}

exports.mostsearch = (req,res)=>{
    Citydb.aggregate([
        {"$group" : {_id:"$cityname", "count": {$sum:1}}},
        {"$sort" : { count:-1}}
        // {"$group" : {_id:null,city "count": {$sum:"$cityname"}}},
    ])
    .then(city=>{
        res.status(200).send(city)
    })
    .catch(err =>{
        res.status(500).send({ message : err.message || "Error occured while retrieving the data"});
    })
}
