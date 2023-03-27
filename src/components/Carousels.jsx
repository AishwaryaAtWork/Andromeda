import React, {useEffect, useState} from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

export default function Carousels(props) {
    const { sliderImages } = props.sliderImagesData;
    const [currIndex, setCurrIndex]=useState(0);

    // To move slides automatically
    useEffect(()=>{
        setInterval(()=>{
            setCurrIndex(currIndex=> currIndex < sliderImages.length-1 ? currIndex+1 : 0);
        },4000);
    },[setCurrIndex]);

    // Function for previos button 
    const prevSlide=()=>{
        const isFirstSlide = currIndex===0;
        const newIndex = isFirstSlide ? sliderImages.length-1 : currIndex-1;
        setCurrIndex(newIndex);
    };
    // Function for next button 
    const nextSlide=()=>{
        const isLastSlide = currIndex===sliderImages.length-1;
        const newIndex = isLastSlide ? 0 : currIndex+1;
        setCurrIndex(newIndex);
    };
    // Functon to go to perticular image slide using dots 
    const goToSlide=(slideIndex)=>{
        setCurrIndex(slideIndex);
    };
    
    return (
        <div className='h-[530px]'>
        {/* Div for images */}
        <div className='h-[480px] max-w-[98%] w-full mx-auto my-5 relative group '>
              <img className='h-full w-full object-fill rounded-xl shadow-lg shadow-blue-400 ' 
              src={`${sliderImages[currIndex].url}`} />
              {/* Left arrow  */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full
              p-2 text-white cursor-pointer transition ease-in-out  hover:scale-110 duration-300'>
                <BsChevronCompactLeft onClick={prevSlide} size={30}/>
              </div>
              {/* Right arrow  */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full
              p-2 text-white cursor-pointer transition ease-in-out  hover:scale-110 duration-300'>
                <BsChevronCompactRight onClick={nextSlide} size={30}/>
              </div>
              {/* Dot icons  */}
              <div className='flex top-4 justify-center py-2 text-blue-800'>
                {sliderImages.map((slide,slideIndex)=>(
                    <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} 
                    className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                ))}
              </div>
        </div>
        </div>
    )
}
