
var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var User = require("./models/User");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo1",{ useNewUrlParser: true });



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
	console.log(req);
    var fileData=req.files.resume.data;

var buffer = new Buffer(fileData.byteLength);
var view = new Uint8Array(fileData);
for (var i = 0; i < buffer.length; ++i) {
    buffer[i] = view[i];
}
    console.log(buffer);

    var myData = new User(req.body);
    myData.resume = buffer;
    console.log(myData);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
