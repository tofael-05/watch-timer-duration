import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('/public/data.json')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, [])
    return (
        <div className="grid grid-cols-3 gap-6">
            {
            movies.map((movie) => <Card movie={movie}></Card>)
        }
        </div>
    );
};

export default Home;