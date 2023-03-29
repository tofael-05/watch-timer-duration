import React from 'react';

const Card = ({ movie, handleWatchTime }) => {
    const { poster, movieName, description, imdbRating, watchTime, category} = movie;
    return (
        <div className="w-64 text-center p-4 rounded shadow-md">
            <div className="rounded-md">
                <img className="w-full h-[300px] mx-auto" src={poster} alt="" />
            </div>
            <h2 className="text-md py-2 font-bold">{movieName}</h2>
            <div className="py-4 text-sm">
                <p>{description}</p>
                <p>{category}</p>
                <div className='flex justify-between py-2 font-bold'>
                    <p>Time Duration: {watchTime}</p>
                    <p>Rating: {imdbRating}</p>
                </div>
            </div>
            <div className="bottom-0">
                <button onClick={() => handleWatchTime(watchTime)} className="bg-blue-600 py-2 rounded-md px-6 text-white">Book Now</button>
            </div>
        </div>

    );
};

export default Card; 