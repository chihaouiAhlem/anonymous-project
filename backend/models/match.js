///creation d un shema ou modele via mongoose
const { EmailValidator } = require("@angular/forms");
const mongoose = require("mongoose");
///creation des attribut 
///je peux ajouter des validateurs
const matchSchema = mongoose.Schema({
    teamOne: { type: String, required: true },
    teamTwo: String,
    scoreOne: Number,

    scoreTwo: Number,
});
////crer le modele user
const match = mongoose.model('Match', matchSchema);
module.exports = match;