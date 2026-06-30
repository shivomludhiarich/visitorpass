const {checkIn,checkOut}= require("../controllers/controllerCheckLog");
const express=require("express");
const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware.js");
const roleMiddleware=require("../middleware/roleMiddleware.js");


router.post("/checkin", authMiddleware,roleMiddleware(['admin','frontdesk']),checkIn);
router.post("/checkout", authMiddleware,roleMiddleware(['admin','frontdesk']), checkOut);

module.exports=router;