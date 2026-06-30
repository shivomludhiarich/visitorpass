const Pass=require("../models/pass.js");
const QRCode=require("qrcode");
const Visitor=require("../models/visitor.js");
const crypto = require("crypto");


const issuePass= async(req,res)=> {
    try{
        const visitor=await Visitor.findById(req.body.visitorId);

        if(!visitor){
            return res.status(404).json({message: "Not found"});
        };

        const passId = crypto.randomUUID();

        const qrData = await QRCode.toDataURL(passId);


        const pass= await Pass.create({
            visitorId: visitor._id,
            passId,
            qrData,
        });


        return res.status(201).json(pass);



    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

module.exports = issuePass;
