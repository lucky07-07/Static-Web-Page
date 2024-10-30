var express = require("express");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;


var url = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get("/pictures", (req, res) => {
    MongoClient.connect(url).then((clientobject) => {
        var database = clientobject.db("Portfolio");
        database.collection("wallpaper").find({}).toArray().then((documents) => {
            res.send(documents);
        })
    })
});

app.get("/pictures/:id", (req, res) => {
    var pictures_id = parseInt(req.params.id);
    MongoClient.connect(url).then((clientobject) => {
        var database = clientobject.db("Portfolio");
        database.collection("wallpaper").find({ id: pictures_id }).toArray().then((documents) => {
            res.send(documents);
        })
    })
});


app.post("/addpicture", (req, res) => {
    var picture = {
        "id": parseInt(req.body.id),
        "title": req.body.title,
        "movie": req.body.movie,
        "url": req.body.url,
        "subscribed": req.body.subscribed
    }
    MongoClient.connect(url).then((clientobject) => {
        var database = clientobject.db("Portfolio");
        database.collection("wallpaper").insertOne(picture).then((result) => {
            console.log('picture inserted....');
            res.redirect("/pictures");
        })
    })
});


app.put("/updatepicture/:id", (req, res) => {
    var picture = {
        "title": req.body.title,
        "movie": req.body.movie,
        "url": req.body.url,
        "subscribed": req.body.subscribed
    }
    const pictures_id = parseInt(req.params.id);
    MongoClient.connect(url).then((clientobject) => {
        const database = clientobject.db("Portfolio");
        database.collection("wallpaper").updateOne({ id: pictures_id }, { $set: picture }).then((result) => {
            console.log('Picture updated successfully.');
            res.status(200).json({ success: true, message: 'Picture updated successfully' });
        })
    })

});


app.delete("/deletepicture/:id", (req, res) => {
    const picture_id = parseInt(req.params.id);
    MongoClient.connect(url).then((clientobject) => {
        const database = clientobject.db("Portfolio");
        database.collection("wallpaper").deleteOne({ id: picture_id }).then((result) => {
            console.log('Picture deleted successfully.');
            res.status(200).send("Picture deleted successfully.");

        })
    })
})



app.listen(5566);
console.log(`server started: http://127.0.0.1:5566`);