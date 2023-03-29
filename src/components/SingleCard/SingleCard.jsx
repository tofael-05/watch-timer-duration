import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const SingleCard = ({ watchTime }) => {
    const [watch, setWatch] = useState(watchTime)

    useEffect(() =>{
        const watchTimeTotal = localStorage.getItem("watchTime")
        setWatch(watchTimeTotal)
    }, [watchTime])

    return (
        <div className="bg-sky-200 w-64 p-4">
            <h1 className="text-3xl text-black font-bold py-2">My Card</h1>
            <div>
                <p className="font-semibold py-2 pt-8">Watch Time:</p>
                <input className="p-2" type="text" value={watch} disabled />
            </div>
            <h5>Add Break Time</h5>
            
        </div>
    );
};

export default SingleCard;