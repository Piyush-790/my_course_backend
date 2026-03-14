const mongoose = require("mongoose");
require('dotenv').config();

console.log("Db is connected")
mongoose.connect(process.env.MongoDb_URL);

const {Schema} = mongoose;
const {ObjectId} = mongoose.Schema.Types;

const userSchema =new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});
const adminSchema =new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});
const courseSchema =new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl:{
    type: String,
  },
  creatorId:{
    type: ObjectId,
  }
});
const purchaseSchema =new Schema({});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.export={
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}