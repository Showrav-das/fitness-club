import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Details = () => {
    const { id } = useParams();
    // const [details, setDetails] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => {
                const foundTrainer = data.find(singleTrainer=> singleTrainer.id == id);
                setDetails(foundTrainer)
            })
    }, [])

    return (
        <div className="mt-5">
            <h2>name {details?.details}</h2>
        </div>
    );
};

export default Details;