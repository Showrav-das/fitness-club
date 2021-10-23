import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data.slice(0,6)));
    },[])
    return (
        <div id="services">
            <h2 className="text-info">Our Services</h2>
            
            <div className="row">
            {
                services.map(service=><Service key={Service.id} service={service}></Service>)
            }
           </div>
            

        </div>

    );
};

export default Services;