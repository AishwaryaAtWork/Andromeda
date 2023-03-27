import React from 'react';
// import internshipsData from "../internshipsData";

export default function Card({i}) {
    return (
        <>
            <div className='py-4 px-2 transform transition-all hover:scale-105'>
                    <div className='rounded overflow-hidden shadow-lg bg-blue-400 shadow-blue-500 max-w-xs'>
                        {/* Card images here  */}
                        <img src={i.image} className='w-full h-[180px] bg-white shadow-lg shadow-blue-500'/>
                        {/* Card textual data + button  */}
                        <div className='py-1 px-4 text-white'>
                            <div className='py-1 font-semibold text-lg text-blue-800 line-clamp-1'>{i.title}</div>
                                <p className='text-white text-xs text-justify line-clamp-4'>{i.description}</p>
                                <div className='text-xs font-semibold pt-2 text-justify'>
                                <p className='leading-loose'>Company : {i.company}</p>
                                <p className='leading-loose line-clamp-1'>Stipend : {i.stipend}</p>
                                <p className='leading-loose line-clamp-1'>Duration : {i.duration}</p>
                                <p className='leading-loose line-clamp-1'>Location : {i.location}</p>
                                <p className='leading-loose'>Apply By : {i.apply_by}</p>
                                <p className='leading-loose'>Start : {i.start_date}</p>
                                <p className='leading-loose'>End : {i.end_date}</p>
                            </div>
                            <a href={i.link} target='_blank'>
                                <button className='bg-white hover:bg-blue-800 my-2 shadow shadow-blue-600 text-blue-800 
                                hover:text-white text-sm font-semibold px-4 py-2 rounded-md duration-500'>Learn More</button>
                            </a>
                        </div>
                    </div>
                </div> 
        </>
    );
}
