
var express = require("express");
var router = express.Router();

var user  = require('./models/User.js');


router.post("/addname", (req, res) => {
    var myData = new User(req.body);
    console.log(myData);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});


module.exports = router;