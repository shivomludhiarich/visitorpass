const express=require("express");
const app=express();
const dns=require("dns");
const visitorRoutes=require("./src/routes/visitorRoutes.js");
const authRoutes=require("./src/routes/authRoutes.js");
const passRoutes=require("./src/routes/passRoutes.js");
const checkLogRoutes=require("./src/routes/checkLogRoutes.js");

app.use(express.json());

dns.setServers([
    '1.1.1.1',
    '8.8.8.1'
])

app.get("/health",(req,res) => {
    res.send("ok");
});

app.use("/visitor", visitorRoutes);
app.use("/auth", authRoutes);
app.use("/pass",passRoutes);
app.use("/log",checkLogRoutes);



module.exports=app;