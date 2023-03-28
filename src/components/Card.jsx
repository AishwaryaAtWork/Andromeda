import React from 'react';

export default function Card({ t }) {
    return (
        <>
            <div className='rounded overflow-hidden shadow-lg  shadow-blue-500
            max-w-[370px] my-3 transform transition-all hover:scale-105 duration-300'>
                {/* Card images here  */}
                <img src={t.image} className='w-full h-[180px] object-fill bg-white shadow-md shadow-blue-200' />
                {/* Card textual data + button  */}
                <div className='py-1 px-4 '>
                    <div className='py-1 font-semibold text-lg text-blue-700 line-clamp-1'>{t.title}</div>
                    <p className='text-gray-500 text-xs text-justify line-clamp-4'>{t.description}</p>
                    <div className='text-xs text-gray-700 font-semibold pt-2 text-justify'>
                        <p className='leading-loose'>Company : {t.company}</p>
                        <p className='leading-loose line-clamp-1'>Stipend : {t.stipend}</p>
                        <p className='leading-loose line-clamp-1'>Duration : {t.duration}</p>
                        <p className='leading-loose line-clamp-1'>Location : {t.location}</p>
                        <p className='leading-loose line-clamp-1'>Apply By : {t.apply_by}</p>
                        <p className='leading-loose line-clamp-1'>Start : {t.start_date}</p>
                        <p className='leading-loose line-clamp-1'>End : {t.end_date}</p>
                    </div>
                    <a href={t.link} target='_blank'>
                        <button className='bg-blue-600 hover:bg-blue-800 my-2 shadow shadow-blue-400 text-white
                         text-sm font-semibold px-4 py-2 rounded-md duration-500'>Learn More</button>
                    </a>
                </div>
            </div>
        </>
    );
};
