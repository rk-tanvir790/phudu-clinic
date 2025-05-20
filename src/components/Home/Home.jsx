import React from 'react';
import Hero from '../Hero/Hero';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
    const doctorsData = useLoaderData();
    return (
        <div>
           <Hero></Hero> 
           <Doctors doctorsData={doctorsData}></Doctors>
        </div>
    );
};

export default Home;