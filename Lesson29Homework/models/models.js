const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: {type : String , unique : true, required : [true,'Is used'] },
   email: {
      type:String,
   },

});

const BlogSchema = new Schema({
   title: String,
   auther: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   },
   body: String,
 })


const User = mongoose.model("User", UserSchema);
const Blog = mongoose.model("Blog", BlogSchema);

module.exports = {User, Blog}