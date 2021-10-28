import React, {useState, useEffect} from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://secure-earth-52127.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `https://secure-earth-52127.herokuapp.com/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('Successfully Deleted');
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
            
        })
    }

    return (
        <div>
            <h1>Manage Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}</h4>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;