//const { Parser } = require("@angular/compiler/src/ml_parser/parser");
const express = require("express"); //importit module ml nodemodule express
///////importer body-parse
const bodyParser = require('body-parser');
//// import bcrypt module
const bcrypt = require("bcrypt");
//// import axios module
const axios = require("axios");


/////create express  apllication named app
const app = express(); ///api
///img multer module node externe
const multer = require("multer");
/// module node interne  ma4ir install
const path = require("path");
///shotcard
///multer config 
app.use('/images', express.static(path.join('backend/images')));
const MIME_TYPE = {
        'image/png': 'png',
        'image/jpeg': 'jpg',
        'image/jpg': 'jpg'
            //application/pdf :pdf
            ////mine type pdf application/pdf :pdf
    }
    ///multer configurer distination(typ),file
const storage = multer.diskStorage({
    // destination :mine type :pour verifier les types de media
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        ///callback
        cb(null, 'backend/images/avatars/players/')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-'); //kol espace tbadl-
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});
const storageAvatars = multer.diskStorage({
    // destination :mine type :pour verifier les types de media
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        ///callback
        cb(null, 'backend/images/avatars/users/')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-'); //kol espace tbadl-
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-avatars-' + '.' +
            'extension';
        cb(null, imgName);
    }
});
////mongoose
const mongoose = require("mongoose");

///connexion avec mongoDB name  anonymousDB
mongoose.connect('mongodb://localhost:27017/anonymousDB');
//import les models
const User = require("./models/user");
const Match = require("./models/match"); ////Match bl Pascal Case 5ater ba33d bech ne7sbou type
const Player = require("./models/player");
const Team = require("./models/team");
////exporter kima tableau match 3malneh export bch najm n3ayatlou
////body parser configuration to send response to fe in format json
app.use(bodyParser.json()); ///pour la confuguration de la pplicaton
///pour acceder au body du raquest:
////body parser configuration to parse  receved object from BE
app.use(bodyParser.urlencoded({ extended: true }));
////busniss logic ///traitement des req
///securité
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});



///busniss logic get allmatches http://localhost:3000/matches deja ya3ref il hya jatou min 3000
///app.HTTP-method(/path)
app.get('/matches', (req, res) => {
    //console.log("here into get all matches bl");
    // let rep = res.send('hello world');
    // return res;
    ////Modele.find :retourne tout un tableau w hya tab3a mongoose mahich fct js
    // res.json({ a:"response abc" }); a lezem n3arrafha f services
    Match.find((err, docs) => {
        //console.log('here error', err);
        //console.log('here docs', docs);

        if (err) {
            console.log("error BD", err);
        } else {
            res.json({ matches: docs, message: "here allMatches,done" });

        }
    });
});
///get match by id
app.get("/matches/:id", (req, res) => {
    //instruction
    let x = req.params.id; //recuperer le param nomme id from path
    //console.log('hrere my path');
    //search match by id
    // let match = allMatches.find((obj) => { return obj.id == x; })
    console.log('hrere id from path', x);
    ///methode o5ra mta3reponse
    Match.findOne({ _id: x }).then((doc) => {
        //console.log('error', err);
        console.log("here doc", doc);
        res.json({ pp: doc })

    });
});
app.delete("/matches/:id", (req, res) => {
    //instruction
    let pos;
    let x = req.params.id; //recuperer le param nomme id from path
    console.log("here into delete", x)
        //console.log('hrere my path');
        //search match by id

    Match.deleteOne({ _id: x }).then((response) => {
        //console.log('error', err);
        console.log("here response", response);
        if (response.deletedCount == 1) { ///deletedCount attribut fil messge ml base
            res.json({ pp: "deleted with success" });

        }

    });
    //il retourne une reponse
    res.json({ pp: `object no ${req.params.id}is deleted with success` })
});
///.ts:import from
//.js: require
/////add matches 
app.post('/matches', (req, res) => {
    //console.log("here into add matches bl");
    //recupre l objet ml request ml body
    // let x = req.body; ///recupere l objet ili ja f body de request
    /// let match = new Match(req.body); ///sna3na variable de type Match(modele),nesta3mlouha ki kol les objet
    ///plus flexible 
    let match = new Match({
        teamOne: req.body.teamOne, //teamOne loula mta3 
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
    });
    match.save((err, doc) => {
        //console.log('here erro', err);
        //console.log('here document', doc);
        if (err) {
            console.log('error with Db,', err);
        } else {
            res.json({
                message: "here allMatches,match added with succees"
            });

        }
    }); ///fct mongoose bech tsajjlou 
    // console.log("here match obj", x);
    // allMatches.push(x);

});
///edit

app.put('/matches/:id', (req, res) => {

    // for (let i = 0; i < allMatches.length; i++) {
    //     if (allMatches[i].id === req.body.id) {
    //         allMatches[i] = req.body;
    //         break;


    //     };
    // }
    Match.updateOne({ _id: req.params.id }, req.body).then((response) => {
        console.log("here response after update", response);
        if (response.modifiedCount == 1) {
            res.json({ pp: "edited with success" })
        }
    }); //req.params.id =req.body.id
    // return allMatches;
    // res.json({ pp: `object no ${req.body.id}is edited with success` });

});
////search score>3 a verif
app.post('/matches/search', (req, res) => {
    console.log('here re search', req.body.score);
    //  var x = 545;
    Match.find({ scoreOne: { $gte: 8 } }).then((doc) => {
        console.log("here doc", doc);
        res.json({ match: doc })

    });



});
/////search >3

app.get('/matches/searchSc', (req, res) => {
    console.log('here re search', req);
    //  var x = 545;
    // Match.find({ scoreOne: { $gte: 3 } }).then((doc) => {
    //     console.log("here doc", doc);
    //     res.json({ match: doc })

    // });



});
//////////////Player BIsniss Logic

////Display allPlayers
app.get('/players', (req, res) => {
    Player.find((err, docs) => {
        if (err) {
            console.log("error BD", err);
        } else {
            res.json({ players: docs, title: "display players" });

        }
        ///interdit bech n3ayety lil doc lbarra 
        console.log("here docs", docs);
    });

});
/// display palyer by id
app.get("/players/:id", (req, res) => {
    //instruction
    let x = req.params.id; //recuperer le param nomme id from path
    //console.log('hrere my path');
    //search match by id
    // let player = allPlayers.find((obj) => { return obj.id == x; })
    // res.json({ pp: player })
    Player.findOne({ _id: x }).then((doc) => {
        //console.log('error', err);
        console.log("here doc", doc);
        res.json({ pp: doc })

    });
});
////delete player
app.delete("/players/:id", (req, res) => {
    //instruction
    // let pos;
    let x = req.params.id; //recuperer le param nomme id from path
    // console.log("here into delete player")
    //console.log('hrere my path');
    //search match by id
    //let match = allMatches.find((obj) => { return obj.id == x; })
    // for (let i = 0; i < allPlayers.length; i++) {
    //     if (allPlayers[i].id == x) {
    //         pos = i;
    //         break;
    //     }

    // }
    // allPlayers.splice(pos, 1);
    //il retourne une reponse

    Player.deleteOne({ _id: x }).then((doc) => {
        //console.log('error', err);
        console.log("here doc", doc);
        res.json({ message: `player is deleted with success` })

    });
});
///displayPlayerById
//1 recupere id de nav:req.params.id
//2 find obj
//3 req.json  pp:objnew
////display by id sans DB reel
// app.get("/players/:id", (req, res) => {
//         let x = req.params.id;
//         let player = allPlayers.find((obj) => { return obj.id == x; })
//         res.json({ pp: player, message: "display with succees" })
//     })
///edit player
app.put("/players/:id", (req, res) => {


    Player.updateOne({ _id: req.params.id }, req.body).then((response) => {
        // console.log("here response after update", response);
        if (response.modifiedCount == 1) {
            res.json({ pp: " player edited with success" })
        }
    });

});

////add player ////tawa m3a DB reel lezm njib l objet w na3ml player de type Player 
///w apres .save
app.post("/players", multer({ storage: storage }).single('img'), (req, res) => {
    //allPlayers.push(req.body);
    let url = req.protocol + '://' + req.get('host'); //concationation http://urldebaseduserveur BE

    let player = new Player({

        name: req.body.name, ////ye5eth le contennu de req ili fil body mouch par exmple ml entete
        age: req.body.age,
        position: req.body.position,
        number: req.body.number,
        img: url + '/images/' + req.file.filename
    });
    ///.save meth predefinit mongoose
    player.save((err, doc) => {
        //console.log('here erro', err);
        //console.log('here document', doc);
        if (err) {
            console.log('error with Db,', err);
        } else {
            res.json({
                message: "here ,player added with succes"
            });

        }
    });

});
//////teams

///gett all teams
app.get('/teams', (req, res) => {
    Team.find((err, docs) => {
        //console.log('here error', err);
        //console.log('here docs', docs);

        if (err) {
            console.log("error BD", err);
        } else {
            res.json({ teams: docs, message: "here teams,done" });

        }
    });
});
///////Add teams to DB
app.post('/teams', (req, res) => {
    ////pour avoir un identifiant unique 
    let value2 = Math.random() * 200;
    let team = new Team({
        team_id: value2 + 1,
        name: req.body.name,
        staduim: req.body.staduim,
        fondation: req.body.fondation,
        owner: req.body.owner,

    });
    team.save((err, doc) => {
        //console.log('here erro', err);
        //console.log('here document', doc);
        if (err) {
            console.log('error with Db,', err);
        } else {
            console.log("okkkk", doc.length);
            res.json({
                message: "here AllTeams,team added with succees"

            });

        }
    }); ///fct mongoose bech tsajjlou 
    // console.log("here match obj", x);
    // allMatches.push(x);

});
/////get team by id
app.get("/teams/:id", (req, res) => {
    //instruction
    let x = req.params.id; //recuperer le param nomme id from path
    //console.log('hrere my path');
    //search match by id
    // let match = allMatches.find((obj) => { return obj.id == x; })
    console.log('hrere id from path', x);
    ///methode o5ra mta3reponse
    Team.findOne({ _id: x }).then((doc) => {
        //console.log('error', err);
        console.log("here doc", doc);
        res.json({ pp: doc })

    });
});
////editer team
app.put('/teams/:id', (req, res) => {
    Team.updateOne({ _id: req.params.id }, req.body).then((response) => {
        console.log("here response after update", response);
        if (response.modifiedCount == 1) {
            res.json({ pp: "edited with success" })
        }
    }); //req.params.id =req.body.id
    // return allMatches;
    // res.json({ pp: `object no ${req.body.id}is edited with success` });

});


//////recherche get
app.get('/teams/:staduimm', (req, res) => {
    //console.log('here into search');
    let x = req.params.staduimm;
    console.log('here search obj', x);
    let teams = allTeams.filter(obj => {
        return (obj.staduim == x)
    })
    res.json({
        message: "search ok",
        team: teams
    });

});

/////api   search ville :tunis par exemple
app.post('/weathers', (req, res) => {
    console.log('here into search', req.body);
    const country = req.body.ville;
    const apiKey = "62ee756a34835483299877a61961cafb";

    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        country +
        "&appid=" +
        apiKey + "&units=metric";
    ///axios intermediate between serveur BE and API
    axios.get(apiUrl).then((response) => {
        //console.log('Here response', response.data.weather[0].icon);
        const resultWeatherData = {
            pressue: response.data.main.pressure,
            //  humidity: response.data.main.humidity,
            temp: response.data.main.temp,
            // image: response.data.weather[0].icon,
            // country: response.data.name,
            // wind: response.data.wind.speed ////ri7
        }

        const weather = response.data.main;
        //  console.log('Here weather main', weather);
        const result = {
            temp: weather.temp,
            pressure: weather.pressure,
            humidity: weather.humidity,
            image: response.data.weather[0].icon,
            country: response.data.name,
            wind: response.data.wind.speed ////ri7
        }
        res.json({
            result: result
        })
    });
});


/////API TEAMS
app.post('/allTeams', (req, res) => {
    console.log('here into search', req.body);
    const country = req.body.ville;
    const apiKey = "58678d70-e1d3-11ec-af4e-e9ad3baef284";
    // const apiUrl = 'https://app.sportdataapi.com/api/v1/soccer/teams?apikey=' + apiKey + '&country_id=10';
    ////je vais convertir le nom en id???
    const apiUrl = 'https://app.sportdataapi.com/api/v1/soccer/teams?apikey=' + apiKey + '&country_id=13';




    ///axios intermediate between serveur BE and API
    axios.get(apiUrl).then((response) => {
        //console.log('Here response', response.data.weather[0].icon);

        const teams = response.data.data;
        console.log('Here teams main', teams);
        // const result = {
        //     temp: weather.temp,
        //     pressure: weather.pressure,
        //     humidity: weather.humidity,
        //     image: response.data.weather[0].icon,
        //     country: response.data.name,
        //     wind: response.data.wind.speed ////ri7
        // }
        res.json({
            result: teams
        })
    });
});
///////API








///recherche team post
app.post('/teams/search', (req, res) => {
    //console.log('here into search');
    console.log('here search obj', req.body);

    res.json({
        message: "search ok",
        team: allTeams.filter(obj => {
            return (obj.staduim == req.body.staduim)
        })
    });

});


///////user
// app.post('/users', (req, res) => {
//     console.log("here into add  bl", req.body);
//     //recupre l objet ml request ml body
//     // let x = req.body; ///recupere l objet ili ja f body de request
//     /// let match = new Match(req.body); ///sna3na variable de type Match(modele),nesta3mlouha ki kol les objet
//     ///plus flexible 
//     let user = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         pwd: req.body.pwd,
//     });
//     user.save((err, doc) => {
//         //console.log('here erro', err);
//         //console.log('here document', doc);
//         if (err) {
//             console.log('error with Db,', err);
//         } else {
//             res.json({
//                 message: "user added with success",
//                 user: doc
//             });

//         }
//         // }); ///fct mongoose bech tsajjlou 
//         // console.log("here match obj", x);
//         // allMatches.push(x);
//         // user.save().then((err, doc) => {
//         //     //console.log('here erro', err);
//         //     //console.log('here document', doc);
//         //     if (err) {
//         //         console.log('error with Db,', err);
//         //     } else {
//         //         res.json({
//         //             message: "user added with success",
//         //             user: doc
//         //         });

//         //     }
//         // });
//     });
// });
/////
///crypt
app.post("/users/signUp", multer({ storage: storageAvatars }).single('img'), (req, res) => {
    console.log('req:', req.body);
    let url = req.protocol + '://' + req.get('host'); //concationation http://urldebaseduserveur BE

    bcrypt.hash(req.body.password, 10).then(
        (cryptedPwd) => {
            let user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedPwd,
                img: url + '/images/' + req.file.filename

            });
            user.save((err, doc) => {
                //console.log('here erro', err);
                //         //console.log('here document', doc);
                if (err) {
                    console.log('error with Db,', err.errors.email.message);
                    if ((err.errors.email.message)) {
                        res.json({
                            message: "0",
                            // user: doc
                        });
                    } else {
                        res.json({
                            message: "user added with success",
                            user: doc
                        });


                    }
                }
            })
        })
});
///login :search user by email and  pwd
app.post("/users/login", (req, res) => {
    // log("here user", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log("here doc", doc);
        if (!doc) {
            res.json({ message: "0" });
        }
        ///compare req.body.pwd with doc.pwd
        ///bcrypt pour le cryptage
        return bcrypt.compare(req.body.password, doc.pwd);
    }).then((pwdResult) => {
        console.log("pwdResult", pwdResult);
        if (!pwdResult) {
            res.json({ message: "1" });
        }
        ////kol chay s7i7  nab3athou lil DB najmch bl doc 5ater 5rajt
        User.findOne({ email: req.body.email }).then(
            (finalResult) => {
                let userToSend = {
                    fName: finalResult.firstName,
                    lName: finalResult.lastName,
                };
                res.json({
                    message: "2",
                    user: userToSend
                });
            }
        )
    });

});





module.exports = app; ///rendre app importable:st7a99ineh fi sever .js