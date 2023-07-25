const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type:String, required: true, unique:true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    profilePic: {type:String, default:"https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWRtaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"},
    isAdmin: {type:Boolean, default:false}
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema, 'User');
