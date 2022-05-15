const express = require("express");
const ejs = require("ejs");
const Post = require("./models/Post");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");
const postController = require("./controller/postController");
const pageController = require("./controller/pageController");

mongoose.connect("mongodb://localhost/cleanblog-test-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method",{
    methods:["POST","GET"]
}));


app.set("view engine", "ejs");

app.get("/", postController.getAllPost);
app.get("/post", pageController.postPage);
app.get("/about", pageController.aboutPage);
app.get("/add_post",pageController.addPostPage);

app.post("/post", postController.postCreate);

app.get("/post/:id" , postController.getPost);
app.get("/post/edit/:id" , pageController.editPage);
app.put("/post/:id", postController.updatePost);
app.delete("/post/:id" , postController.deletePost);

const port = 3000;
app.listen(port, () => {
    console.log("Sunucu %d portunda çalışıyor", port);
});