const express= require("express");
const cors= require("cors");
const {PrismaClient}= require("@prisma/client");
const { all } = require("axios");

const app= express();
const prisma = new PrismaClient;
app.use(cors("*"));
app.use(express.json());


app.get("/healthcheck", (req,res)=>{
    const healthjob= {
        "request_time": new Date().toString(),
        "connectivity": prisma.$connect?"Connected": "Not Connected", status: "working",
    }
    res.send(healthjob);
})

app.get("/locations", async (req, res)=>{
    const allloc= await prisma.location.findMany();
    res.send(allloc);
})
// app.post("/addloc", async (req, res)=>{
    
//     let dataobj= {
//         data:{
//             LocationName: req.body.LocationName,
//         }
//     };
//     await prisma.location.create(dataobj);
//     res.send("Location Added");
// })

app.listen(3005, (req, res)=>{
    console.log("Location service started on port 3005.");
})