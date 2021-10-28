import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();

    const [service, setService] =useState({});

    useEffect( () =>{
        fetch(`https://secure-earth-52127.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
        <div>
            <h1>Details of: {service.name}</h1>
            <h2>This is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;