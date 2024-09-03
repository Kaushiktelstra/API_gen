import { useEffect, useState } from "react";
import axios from "axios";

export default function ServiceRegistryUI() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const servicedata = await axios.get("http://localhost:3010/services");
                
                setServices(servicedata.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div>
        <h2> Current service running</h2>
            <ul>

                {services.map((e) => (
                    <li key={e.servicename}>
                        {e.servicename} {e.url}
                    </li>
                ))}
            </ul>
        </div>
    );
}
