import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = ({doctorsData}) => {
    return (
        <div className='my-[80px] w-10/12 mx-auto text-center'>
            <div>
                <h2 className='font-plus font-extrabold text-[40px] text-[#0F0F0F]'>Our Best Doctors</h2>
                <p className='font-plus leading-[26px] text-[#0F0F0F] mt-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a<br></br> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-8 mb-12'>
                {
                    doctorsData.map((doctor,index)=><Doctor key={index} doctor={doctor}></Doctor>)
                }
            </div>
            <div>
                <button className='font-plus font-bold text-xl text-white bg-[#176AE5] px-[30px] py-[15px] rounded-[99px]'>View All Doctors</button>
            </div>
        </div>
    );
};

export default Doctors;