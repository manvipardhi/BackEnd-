
import express from "express";
import User from "../models/userModel.js"
export const createUser=async(req,res)=>{
       try {
            const newUser= await User.create({
              name:"manvi pardhi",
              email:'princisdj@2gmail.com',
              password:"2453637",
              phone:1243728288,
            })

            newUser.save();
            res.json(newUser);
       } catch (error) {
           console.log("error message");
              
       }
};
export const readAllUser=async(req,res)=>{
       try {
      const allUser= await User.find();
if(allUser.length>0){
       res.json({
              success:true,
              message:"user found successfully ",
              allUser,
       })
}
res.json({
       success:false,
       message:"user not found",
      

})

       } catch (error) {
              console.log("error message");  
       }
}



//========hard coded given id & data find===========
export const readOneUser=async(req,res)=>{
       try {
      const user=await User.findById('66b0707024765b7db3918321');
      res.json(user);

       } catch (error) {
              console.log("error message");  
       }
};

//read Dynamic user base on user id or other
// export const readOneUser=async(req,res)=>{
//        try {
//       const {UserId} =req.params;
//       const user=await User.findById (UserId) ;
//       res.json(user);

//        } catch (error) {
//               console.log("error message");  
//        }
// };


//read Dynamic user base on userNmae: or other
export const readOneUserByName=async(req,res)=>{
       try {
//       const  user=await User.find({name:'manvi pardhi'});
      const  user=await User.find({email:'princisdj@2gmail.com'});
      res.json(user);

       } catch (error) {
              console.log("error message");  
       }
};readOneUserEmail