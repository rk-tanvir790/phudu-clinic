import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className=' px-[80px] py-[100px] bg-white'>
            {/* Top Side */}
            <div className='flex gap-4 justify-center'>
                <img src="logo.png" alt="" />
                <h2 className='font-plus font-extrabold text-[32px] text-[#0F0F0F]'>Phudu</h2>
            </div>
            {/* Middle Side */}
            <div className='flex gap-12 justify-center font-plus font-medium text-lg text-[#0F0F0F]/[0.7] py-8'>
                <NavLink to='/'>Home</NavLink>
                <NavLink>My-Bookings</NavLink>
                <NavLink>Blogs</NavLink>
                <NavLink>Contact Us</NavLink>
            </div>
            <div className='flex justify-center'>
                <hr className='text-[#0F0F0F]/[0.2] w-[60%]' />
            </div>
            {/* Bottom Part */}
            <div className='flex gap-6 justify-center pt-8'>
                <a href="https://facebook.com" target="_blank"><img src="facebook-logo.png" alt="" /></a>
                <a href="https://twitter.com" target="_blank"><img src="twitter-logo.png" alt="" /></a>
                <a href="https://linkedin.com" target="_blank"><img src="linkedin-logo.png" alt="" /></a>
                <a href="https://youtube.com" target="_blank"><img src="youtube-logo.png" alt="" /></a>
            </div>
        </div>
    );
};

export default Footer;