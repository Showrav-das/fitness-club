import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data =>setExperts(data.slice(6,10)));
        
    }, []);
    return (
        <div id="experts">
            <h2>Our <span className="text-success">Experts</span></h2>
            <div className="row">
            {
                experts.map(expert=><Expert expert={expert}></Expert>)
                }
                </div>
        </div>
    );
};

export default Experts;