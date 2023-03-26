import React from 'react';

export default function Card(props) {
    const {internships} = props.internshipsData;
    
    return (
        <>
            {/* Card container div  */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center'>
                {/* Card div  */}
                <div className='py-4 px-2 '>
                    <div className='rounded overflow-hidden shadow-lg shadow-blue-300 max-w-xs'>
                    {/* Card images here  */}
                        <img src={internships[0].image} className='w-full max-h-[200px]'/>
                    {/* Card textual data + button  */}
                        <div className='py-2 px-4'>
                            <div className='py-1 font-semibold text-lg'>{internships[0].title}</div>
                            <p className='text-gray-600 text-xs text-justify line-clamp-3'>{internships[0].description}</p>
                            <div className='text-xs font-semibold pt-2 text-justify'>
                            <p className='leading-loose'>Company : {internships[0].company}</p>
                            <p className='leading-loose line-clamp-1'>Stipend : {internships[0].stipend}</p>
                            <p className='leading-loose line-clamp-1'>Duration : {internships[0].duration}</p>
                            <p className='leading-loose'>Location : {internships[0].location}</p>
                            <p className='leading-loose'>Apply By : {internships[0].apply_by}</p>
                            <p className='leading-loose'>Start : {internships[0].start_date}</p>
                            <p className='leading-loose'>End : {internships[0].end_date}</p>
                            </div>
                            <button className='bg-blue-500 hover:bg-blue-800 my-2 shadow-md shadow-blue-300 
                        text-white text-sm font-semibold px-4 py-2 rounded-full duration-500'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
