var express = require ("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

//patient database


app.get("/", function(req, res){
    res.render("bellsehr.ejs")
})

app.get("/home", function(req, res){
    res.render("index.ejs")
})

app.get("/patient", function(req, res){
    res.render("patient.ejs")
})

app.get("/doctor", function(req, res){
    res.render("doctor.ejs")
})


app.listen(process.env.PORT || 4000);