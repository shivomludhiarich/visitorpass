const Visitor= require("../models/visitor");

const createVisitor = async(req,res) =>{
    try{
    const visitor=await Visitor.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        purpose: req.body.purpose,
        host: req.body.host,
        photo: req.body.photo

        
    });
    res.status(201).json(visitor);
    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal error"});
    }
}

const getVisitors = async(req,res) => {
    try{
        const visitors= await Visitor.find();

        res.status(200).json(visitors);
    }catch(error){
        console.log(error);

        res.status(500).json({
            message : error.message
        });
    }
};

const getOneVisitor = async (req,res) =>{
    try{
        const visitor=await Visitor.findById(req.params.id);

        res.status(200).json(visitor);
    }catch(error){
        res.status(500).json({
            message : error.message
        });
    }
};

const updateVisitor= async(req,res) =>{
    try{
        const updatedVisitor= await Visitor.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true}
        );
        res.status(200).json(updatedVisitor);
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

const deleteVisitor = async (req, res) => {
    try {
        const deletedVisitor = await Visitor.findByIdAndDelete(req.params.id);

        if (!deletedVisitor) {
            return res.status(404).json({
                message: "Visitor not found"
            });
        }

        res.status(200).json({
            message: "Visitor deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};





module.exports= {createVisitor, getVisitors, getOneVisitor, updateVisitor, deleteVisitor};