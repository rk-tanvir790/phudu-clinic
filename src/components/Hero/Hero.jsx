import React from 'react';

const Hero = () => {
    return (
        <div className='flex flex-col items-center px-[160px] py-[64px] rounded-3xl border-3 border-white w-11/12 mx-auto custom-gradient mt-3'>
            {/* Top part */}
            <div className='text-center w-[68%]'>
                <h2 className='font-plus font-extrabold text-5xl text-[#0F0F0F] text-center mb-4'>Dependable Care, Backed by Trusted Professionals.</h2>
                <p className='font-plus font-medium leading-[26px] text-[#0F0F0F]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            {/* Middle part */}
            <div className='flex justify-center gap-4 w-full my-6'>
                <input className='px-[18px] w-[45%] bg-white rounded-[99px] border-gray-300' type="text" placeholder='Search any doctor...' />
                <button className='font-plus font-bold text-xl text-white py-4 px-8 rounded-[99px] bg-[#176AE5] cursor-pointer'>Search Now</button>
            </div>
            {/* Last part */}
            <div className='flex gap-6'>
                <img className='max-w-[578px] max-h-[350px]' src="banner-img-1.png" alt="" />
                <img className='w-[578px] h-[350px] rounded-2xl object-center' src="doctors.jpg" alt="" />
            </div>
        </div>
    );
};

export default Hero;