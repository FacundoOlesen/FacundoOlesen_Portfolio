const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
var con = require("./connection");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "public")));



app.listen(process.env.PORT, function () {
    console.log("Server is up and running ");
})   //route



app.post("/",   async function (req, res) {
    ``
    var name = req.body.name;
    var email = req.body.email
    var mesagge = req.body.message

    var sql = 'INSERT into messages (name, email, message) values ?';
    var values = [[name, email, mesagge]];

   await con.query(sql, [values], function (err, result, fields) {
        if (err) throw err;
    });

})


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolsve to your project fosslder.
});