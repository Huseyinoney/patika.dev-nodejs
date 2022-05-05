const express = require("express");
const ejs = require("ejs");
const Post = require("./models/Post");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    const post = await Post.find({});
    res.render("index", {
        post
    });

});
app.get("/post", (req, res) => {

    res.render("post");

});
app.get("/about", (req, res) => {

    res.render("about");

});
app.get("/add_post", (req, res) => {

    res.render("add_post");

});

app.post("/post", async (req, res) => {
    console.log(req.body);
    await Post.create(req.body);
    res.redirect("/");
});



const port = 3000;
app.listen(port, () => {
    console.log("Sunucu %d portunda çalışıyor", port);
});