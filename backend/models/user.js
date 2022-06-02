///creation d un shema ou modele via mongoose
const { EmailValidator } = require("@angular/forms");
const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

///creation des attribut 
///je peux ajouter des validateurs
const userSchema = mongoose.Schema({

    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, uniqe: true },
    pwd: String,
    img: String
});
userSchema.plugin(uniqueValidator);

////crer le modele user
const user = mongoose.model('User', userSchema);
module.exports = user;