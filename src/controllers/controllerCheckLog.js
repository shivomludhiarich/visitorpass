const CheckLog=require("../models/checkLog.js");
const Pass=require("../models/pass.js");

const checkIn = async(req,res) => {
    try{
        const pass= await Pass.findOne({passId: req.body.passId});

        if(!pass){
            return res.status(404).json({message: "Not found"});
        };

        const checkIn=await CheckLog.create({
            passId: pass._id,
            eventType: 'checked_in'
        });

        await Pass.findByIdAndUpdate(pass._id, {status: 'checked_in'});
        return res.status(201).json(checkIn);

    }catch(error){
        return res.status(500).json({message: error.message});

    }
}

const checkOut = async(req,res) => {
    try{
        const pass= await Pass.findOne({passId: req.body.passId});

        if(!pass){
            return res.status(404).json({message: "Not found"});
        };

        if (pass.status !== 'checked_in') {
            return res.status(400).json({ message: "Visitor not checked in" });
        }

        const checkOut=await CheckLog.create({
            passId: pass._id,
            eventType: 'checked_out',
        });

        await Pass.findByIdAndUpdate(pass._id,{status: 'checked_out'});


        return res.status(201).json(checkOut);

    }catch(error){
        return res.status(500).json({message: error.message});

    }
}

module.exports = {checkIn,checkOut};
