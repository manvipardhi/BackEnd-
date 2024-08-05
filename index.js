// const express = require("express");
// const { default: connectDB } = require("./config/database");
// const app = express()
// const port=5095;

// connectDB();

// app.get("/",(request,response)=>{
//        response.send(" <b> <i> Hello world </i> </b>");

// });
// app.get("/about",(request,response)=>{
//        response.send("about page");
// });
// app.get("/services",(request,response)=>{
//        response.send("Servies page");
// });
// app.get("/contact",(request,response)=>{
//        response.send("contact page");
// });
// app.listen(port,()=>{
//        console.log(`server is running on port ${port}`);
// })



// import express from "express";
// import connectDB from "./config/database.js";
// import indexRouter from "./routes/indexRouter.js";

// const app = express();
// const port = 8080;

// connectDB();

// app.get("/", (request, response) => {
//   response.send("Hello World");
// });

// // ======================== Routes =========================
// app.use("/user", indexRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require ('express');
// const connectDB = require("./config/database.js"); // Ensure correct path for db.js
// const User = require ('./models/userModel.js');


//  ===============day 2nd ================
// import express from "express";
// import connectDB from "./config/database.js";
// // import User from './models/userModel.js';

// const app = express();
// const port = 5908;

// // Connect to MongoDB
// connectDB();

// app.get('/', (req, res) => {
//   res.send(" Hello World!");
// });
// // app.get('/about', (req, res) => {
// //   res.send("<h1 style='color:green'><b> hello manvi pardhi Hello World!</b></h1>");
// // });
// // app.get('/contect', (req, res) => {
// //   res.send("<h1 style='color:pink'><b> hello manvi pardhi Hello World!</b></h1>");
// // });
// // app.get('/create', async(request , response) => {
// //   try {
// //     const newUser = await new User({
// //       name: "princi pardhi",
// //       email: "manvi2@hfje89.com",
// //       password: "478w9$677",
// //       phone: 4567889990,
// //     });

// //     await newUser.save();
// //     response.send(newUser);
// //   }catch (error) {
// //     console.log(error);
// //   }
// // });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


import express from "express";
import connectDB from "./config/database.js";
import indexRouter from "./routes/indexRouter.js"
const app = express();
const port = 5008;
// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send(" Hello World!");
});

// ==================routes===========
app.use("/user",indexRouter)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
