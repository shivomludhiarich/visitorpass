const express=require("express");
const app=express();
const dns=require("dns");
const visitorRoutes=require("./src/routes/visitorRoutes.js");
const authRoutes=require("./src/routes/authRoutes.js");

app.use(express.json());

dns.setServers([
    '1.1.1.1',
    '8.8.8.1'
])

app.get("/health",(req,res) => {
    res.send("ok");
});

app.use("/api/visitor", visitorRoutes);
app.use("/auth", authRoutes);



module.exports=app;