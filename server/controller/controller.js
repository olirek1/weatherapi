var Citydb = require('../model/model');


exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({ message : "content can not be empty"});
        return;
    }
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
