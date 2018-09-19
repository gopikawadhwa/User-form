var mongoose = require("mongoose");

var nameSchema = new mongoose.Schema({
    firstName: String,
    emailId: String,
    Number: Number,
    resume: Buffer,
    jobTitle : String

}
,
{
	collection: 'User'
});

var User = mongoose.model("User", nameSchema);

module.exports = User;
 
