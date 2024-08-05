
// const mongoose = require("mongoose");
import mongoose from "mongoose" ;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoDB_learn");
    console.log("mongoDb Connected Successfully !!");
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};

// module.exports=connectDB;
export default connectDB;
