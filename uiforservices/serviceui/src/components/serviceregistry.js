import {useEffect, useState} from "react";
import axios from 'axios'
export default function ServiceRegistryUI(){
    const [services, setServices]= useState([]);
    useEffect (()=>{
        const servicedata= axios.get("http:localhost:3010/services");
        setServices(servicedata.data);
    }, []);
    
    return (
        <div> {
            services.map((e)=>(
                <li> {e.servicename} {e.url}
                </li>
            ))
        }</div>
    )
}