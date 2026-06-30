const mongoose=require("mongoose");

const passSchema=new mongoose.Schema({
    visitorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Visitor",
        required: true
    },
    passId: {
        type: String,
        required: true
    },
    qrData: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active','checked_in', 'checked_out'],
        default: 'active'
    },
    issuedDate: {
        type: Date,
        default: Date.now
    }
});

const Pass=mongoose.model("Pass", passSchema);

module.exports=Pass;