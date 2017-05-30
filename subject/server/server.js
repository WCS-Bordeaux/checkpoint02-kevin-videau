let express = require('express')
var app = express()
var bodyParser = require('body-parser')  
var server = app.listen(9000)
/*var data = require("./mocks/users.json") // route pour récuperation du Json
var users = data.users*/        
// config
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());


app.use('./', express.static('public'))  

app.get('/', function (req, res) {
    res.send("Essayer l'URL")
})
/*
app.get('./mocks/users.json', function (req, res) { 
    res.send(data)
})

app.get('/users/:id', function (req, res) { 
    let reqId = req.params.id               // l'endroit pour recuperer l'id
    var user = getUserById(reqId)
    console.log(user)
    res.send(user)
})


console.log('Adresse du serveur: http://localhost:9000');

function getUserById(id) {
    for (let i = 0; i < users.length; i++) {
        var user = ninjas[i]
        if (user._id == id) {
            return user
        }
        console.log("user : ", user)
    }
}*/