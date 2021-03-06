import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://secure-earth-52127.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h1 className="text-primary mt-5">Our Services</h1>

            <div className="service-container m-5">
                {
                    services.map(service => <Service
                    key = {service._id}
                    service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;