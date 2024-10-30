var express = require("express");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;


var conStr = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/customers", (req, res) => {
    MongoClient.connect(conStr)
        .then(obj => {
            var database = obj.db("Portfolio");
            database.collection("Customers").find({}).toArray().then(documents => {
                res.send(documents);
                res.end();

            })

        })
        .catch(err => {
            console.log(err.message);
        })
});


app.post("/registercustomer", (req, res) => {
    var customerdetails = {
        userid: req.body.userid,
        username: req.body.username,
        password: req.body.password,
        age: parseInt(req.body.age),
        email: req.body.email,
        mobile: req.body.mobile
    };
    MongoClient.connect(conStr)
        .then(obj => {
            var database = obj.db("Portfolio");
            database.collection("Customers").insertOne(customerdetails)
                .then(() => {
                    console.log("record inserted");
                    res.redirect("/Customers");
                })
        })
});

app.listen("5050");
console.log(`Server Started:http://127.0.0.1:5050`);
