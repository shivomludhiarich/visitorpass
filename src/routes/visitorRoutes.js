const {createVisitor, getVisitors,getOneVisitor,updateVisitor, deleteVisitor}=require("../controllers/controllerVistors.js");const express=require("express")
const router=express.Router();
const authMiddleware=require("../middleware/authMiddleware.js");
const roleMiddleware=require("../middleware/roleMiddleware.js");


router.post("/",authMiddleware,roleMiddleware(['admin','frontdesk']), createVisitor);
router.get("/", getVisitors);
router.get("/:id",getOneVisitor);
router.patch("/:id", updateVisitor);
router.delete("/:id", deleteVisitor);


module.exports=router;