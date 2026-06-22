const {createVisitor, getVisitors,getOneVisitor,updateVisitor, deleteVisitor}=require("../controllers/controllerVistors.js");const express=require("express")
const router=express.Router();


router.post("/", createVisitor);
router.get("/", getVisitors);
router.get("/:id",getOneVisitor);
router.patch("/:id", updateVisitor);
router.delete("/:id", deleteVisitor);


module.exports=router;