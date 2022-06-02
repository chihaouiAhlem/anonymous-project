///creation d un shema ou modele via mongoose
const { EmailValidator } = require("@angular/forms");
const mongoose = require("mongoose");
//mongoose.plugin(require("mongoose-create-unique"));

///creation des attribut 
///je peux ajouter des validateurs
const teamSchema = mongoose.Schema({
    team_id: { type: Number, unique: true },
    name: { type: String, required: true },
    owner: String,
    fondation: Number,
    staduim: String,
});
////crer le modele user
//userSchema.plugin(uniqueValidator);

const team = mongoose.model('Team', teamSchema);
module.exports = team;