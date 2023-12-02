import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    let review = props.review;
    return (
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10]'>
                <img 
                className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' 
                src={review.image} alt='peoples'>      
                </img>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl '>{review.name}</p>
                <p className='uppercase text-sm text-violet-300 '>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-7'>
                <FaQuoteLeft/>
            </div>

            <div className='text-center mt-4 text-slate-500'>
                {review.text}
            </div>

            <div className='text-violet-400 mx-auto mt-7'>
                <FaQuoteRight/>
            </div>

            

        </div>
    )
}

export default Card