const Post = require("../models/Post");
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

exports.getAllPost = async (req, res) => {
    const post = await Post.find({});
    res.render("index", {
        post
    });

};

exports.postCreate = async (req, res) => {
    //console.log(req.body);
    await Post.create(req.body);
    res.redirect("/");
};

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("post", {
        post,
    });
};

exports.updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.name = req.body.name;
    post.description = req.body.description;
    post.save();

    res.redirect(`/post/${req.params.id}`);
};

exports.deletePost  = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    await Post.findByIdAndRemove(req.params.id);
    res.redirect("/");

};