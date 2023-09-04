import React from 'react'

function PreFooter() {
    return (
        <div className='w-fluid-width-1280 mx-auto my-margin--64-80'>
            <div className='w-1/2 max-md:w-full flex flex-col gap-4'>
                <h5 className='text-5xl max-md:text-4xl font-heading-font'> Interested in working with me?</h5>
                <p className='text-[1.2rem]  max-w-[48ch] text-'> I'm active on all social media platforms listed below, but you can also me an email and I will get back to you within 24-48 hours.
                </p>
                <button className='py-3 px-6 bg-[#fbe850] text-black font-heading-font self-start  text-2xl'>
                    Get in touch 
                </button>
            </div>
        </div>
    )
}

export default PreFooter