import express from "express";
import { createUser, readAllUser, readOneUser ,readOneUserByName,readOneUserEmail } from "../controllers/indexController.js";


const router= express.Router();

router.get("/route",(req,res)=>{
       res.send("hello from index");
});

router.post("/create",createUser)
router.get("/read",readAllUser);
router.get("/readOne/:UserId",readOneUser);
router.get("/readByName",readOneUserByName);
router.get("/readOne:email",readOneUserEmail);

export default router;