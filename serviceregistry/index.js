//ServiceRegistry:  Kaushik
const express= require("express");
const cors= require("cors");
// const consl = require("consl")
const app= express();
app.use(cors("*"));
app.use(express.json());

const axois= require('axios');


const services=[];

app.get("/services", (req, res)=>{
    res.send(services)
})

app.get("/getservice/:servicename", (req, res)=>{
    const servicedata= services.find((e)=>e.servicename==req.params.servicename)
    if(servicedata){
        res.send(servicedata)
    }else{
        res.send("Service not found");
    }
})

app.post("/register", (req,res)=>{
    const servicename= req.body.servicename;
    const url= req.body.url;
    const servicedata={
        servicename: servicename,
        url: url,
    }
    services.push(servicedata);
    res.send(`Service with name: ${servicename} and url: ${url} registered.`)
});

//middleware to check the ports running 
app.use(async (req,res)=>{
    for(i=3001; i<3009; i++ ){
        try{
        const response= await axois.get(`http://localhost:${i}/healthcheck`)
        if(response.status==200){
            console.log(`http://localhost:${i}/healthcheck`)
        }
    }catch(error){
        console.log(`Service not found on port ${i}`);
    }  
}
res.send("All port scanned.")
})

app.listen(3010, ()=>{
    console.log("Registry up and running in 3010")
})