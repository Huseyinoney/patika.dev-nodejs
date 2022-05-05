const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: String,
    description: String,
    image : String,
    dateCreated :{
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model("Post",postSchema);

module.exports = Post;