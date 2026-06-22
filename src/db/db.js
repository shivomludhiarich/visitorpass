const mongoose=require('mongoose');


async function connectDB(){
    await mongoose.connect("mongodb+srv://shivom:ilY1h1okzplTqWJS@cluster0.vh26zhv.mongodb.net/t1");
    console.log("Connected to DB");
}

module.exports= connectDB;