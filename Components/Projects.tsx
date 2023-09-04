import Image from 'next/image'
import React from 'react'
import Picture2 from "../Assets/YelpCamp.png"
import Picture1 from "../Assets/Spense.png"


function Projects() {
    return (
        <div className='w-full flex justify-between items-start max-md:flex-wrap mb-20 gap-14'>
            <div className=' h-auto w-[47%] max-md:basis-full '>
                <div className='aspect-video relative w-full h-full'>
                    <Image src={Picture1} alt='Picture' fill={true} objectFit='contain' />
                </div>
                <h3 className='text-[45px] font-heading-font'>Spense.com</h3>
                <p className='text-lg ' >Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc</p>
            </div>
            <div className='h-auto w-[47%] max-md:basis-full'>
                <div className='aspect-video relative w-full h-full'>
                    <Image src={Picture2} alt='Picture' fill={true} objectFit='contain' />
                </div>
                <h3 className='text-[45px] font-heading-font'>YelpCamp.com </h3>
                <p className='text-lg '>Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favorite in 2021.</p>
            </div>
        </div>
    )
}

export default Projects