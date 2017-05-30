let express = require('express')
var app = express()
var bodyParser = require('body-parser')  
var server = app.listen(9000)

// config
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

// dossier static
app.use('./', express.static('public'))  

// route
app.get('/', function (req, res) {
    res.send("Essayer l'URL")
})

console.log('Adresse du serveur: http://localhost:9000');
