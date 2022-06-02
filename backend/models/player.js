///creation d un shema ou modele via mongoose
const { EmailValidator } = require("@angular/forms");
const mongoose = require("mongoose");
///creation des attribut 
///je peux ajouter des validateurs
const playerSchema = mongoose.Schema({ ///a verifier

    name: String,
    age: Number,
    position: Number,
    number: Number,
    img: String //path sous forme string
});
////crer le modele user
const player = mongoose.model('Player', playerSchema);
module.exports = player;