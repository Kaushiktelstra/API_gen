const express= require("express");
const cors= require("cors");
const app= express();
app.use(cors("*"));
app.use(express.json());

const axios= require('axios');

const services={
    plan: {
        host: "localhost",
        port: 3004,
    },
    location: {
        host: "localhost",
        port: 3005,
    }
};

app.use( async (req, res, next)=>{
    const {url, method, headers} =req;
    console.log(url);
    const targetService= url.split("/")[1];
    const action= url.split("/")[2];
    console.log(targetService);

    if(!services[targetService]){
        res.status(404).send("Service not found");
        return;
    }
    const targetHost=services[targetService].host;
    const targetPort=services[targetService].port;
    const resdata= await axios(`http://${targetHost}:${targetPort}/${action}`);
    res.send(resdata.data);

});

app.listen(4020, ()=>{
    console.log("Mesh Running on port 4020");
})