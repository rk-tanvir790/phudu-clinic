import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-[#EFEFEF] px-[160px] py-[20px]'>
            {/* Left Side */}
            <div className='flex gap-4'>
                <img src="logo.png" alt="" />
                <h2 className='font-plus font-extrabold text-[32px] text-[#0F0F0F]'>Phudu</h2>
            </div>
            {/* Middle Side */}
            <div className='flex gap-12 font-plus font-medium text-lg text-[#0F0F0F]/[0.7]'>
                <NavLink to='/'>Home</NavLink>
                <NavLink>My-Bookings</NavLink>
                <NavLink>Blogs</NavLink>
                <NavLink>Contact Us</NavLink>
            </div>
            {/* Right Side */}
            <div>
                <button className='font-plus font-bold text-xl text-white py-4 px-8 rounded-[99px] bg-[#176AE5] cursor-pointer'>Emergency</button>
            </div>
        </div>
    );
};

export default Navbar;