import React from 'react';

const MedicalStat = () => {
    return (
        <div className='my-[80px] w-10/12 mx-auto text-center'>
            <div>
                <h2 className='font-plus font-extrabold text-[40px] text-[#0F0F0F]'>We Provide Best Medical Services</h2>
                <p className='font-plus leading-[26px] text-[#0F0F0F] mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='flex gap-6 justify-center mt-8'>
                <div className='px-12 py-[40px] rounded-2xl bg-white text-left'>
                    <img className='w-[64px] h-[64px]' src="success-doctor.png" alt="" />
                    <h3 className='font-plus font-extrabold text-[64px] text-[#0F0F0F] pt-4 pb-3'>199+</h3>
                    <p className='font-plus font-semibold text-2xl text-[#0F0F0F]/[0.6]'>Total Doctors</p>
                </div>
                <div className='px-12 py-[40px] rounded-2xl bg-white text-left'>
                    <img className='w-[64px] h-[64px]' src="success-review.png" alt="" />
                    <h3 className='font-plus font-extrabold text-[64px] text-[#0F0F0F] pt-4 pb-3'>467+</h3>
                    <p className='font-plus font-semibold text-2xl text-[#0F0F0F]/[0.6]'>Total Reviews</p>
                </div>
                <div className='px-12 py-[40px] rounded-2xl bg-white text-left'>
                    <img className='w-[64px] h-[64px]' src="success-patients.png" alt="" />
                    <h3 className='font-plus font-extrabold text-[64px] text-[#0F0F0F] pt-4 pb-3'>1900+</h3>
                    <p className='font-plus font-semibold text-2xl text-[#0F0F0F]/[0.6]'>Total Patients</p>
                </div>
                <div className='px-12 py-[40px] rounded-2xl bg-white text-left'>
                    <img className='w-[64px] h-[64px]' src="success-staffs.png" alt="" />
                    <h3 className='font-plus font-extrabold text-[64px] text-[#0F0F0F] pt-4 pb-3'>300+</h3>
                    <p className='font-plus font-semibold text-2xl text-[#0F0F0F]/[0.6]'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default MedicalStat;