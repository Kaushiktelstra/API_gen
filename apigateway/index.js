const express= require("express")
const app= express();
const cors= require("cors");
app.use(express.json());
app.use(cors("*"));
const axios= require("axios")

app.use( async (req,res, next)=>{
    const servicename= req.path.split("/")[1];
    console.log(servicename.data);

    const serviceres= await axios.get(`http://localhost:3010/getservice/${servicename}`);
    console.log(serviceres.data);

    const allcoll= await axios.get(serviceres.data.url);
    res.send(allcoll.data);
})



app.listen(3000, ()=>{
    console.log("API gateway: 3000")
})