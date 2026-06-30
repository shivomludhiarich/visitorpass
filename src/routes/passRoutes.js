const issuePass=require("../controllers/controllerPass");
const express=require("express");
const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware.js");
const roleMiddleware=require("../middleware/roleMiddleware.js");


router.post("/",authMiddleware,roleMiddleware(['admin','frontdesk']), issuePass);

module.exports=router;