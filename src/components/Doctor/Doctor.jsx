import React from 'react';

const Doctor = ({doctor}) => {
    const {doctor_image,experience,name,education,registration_number} = doctor
    return (
        <div className='p-8 rounded-2xl bg-white overflow-hidden'>
            <div className='flex justify-center mb-4'>
                <img className='h-[348px] w-full object-cover object-top rounded-2xl' src={doctor_image} alt="" />
            </div>
            <div>
                {/* btn div */}
                <div className='flex gap-2 items-center'>
                    <button className='font-plus font-medium text-sm text-[#09982F] py-[7px] px-[14px] rounded-[99px] bg-[#09982F]/[0.1]'>Available</button>
                    <button className='font-plus font-medium text-sm text-[#176AE5] py-[7px] px-[14px] rounded-[99px] bg-[#176AE5]/[0.1]'>{experience}+ years Experience</button>
                </div>
                {/* details div */}
                <div>
                    <div className='border-b border-dashed border-[#0F0F0F]/[0.2] py-4 text-left'>
                        <p className='font-plus font-extrabold text-2xl text-[#0F0F0F] mb-3'>{name}</p>
                        <p className='font-plus font-medium text-lg text-[#0F0F0F]/[0.6]'>{education}</p>
                    </div>
                    <div className='flex gap-3 my-4 items-center'>
                        <img src="roundR.png" alt="" />
                        <p className='font-plus font-medium text-lg text-[#0F0F0F]/[0.7]'>Reg No: {registration_number}</p>
                    </div>
                    <div className='flex'>
                        <button className='font-plus w-full font-bold text-xl text-[#176AE5] px-[112px] py-3 rounded-[99px] border border-[#176AE5]'>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;