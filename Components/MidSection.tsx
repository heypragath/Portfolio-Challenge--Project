import React from 'react'

function MidSection() {
  return (
    <div className='bg-[#2f2f37] py-20  '>
      <div className='w-fluid-width-1280 mx-auto grid grid-cols-grid-fluid-2 gap-y-14 justify-items-ends'>
        <div className='max-w-[58ch] flex flex-col gap-8 '>
          <h4 className='font-heading-font text-5xl'>A co-founder at one of the worlds largest communities.</h4>
          <p className='text-[1.2rem]'>The combined experience I have working at the top Fortune 500 companies has allowed me to developer a skillset that helps me in
            not just development, but in every aspect of any business.
          </p>
          <p className='text-[1.2rem]'>
            I'm proud to announce that I am now working at one of the world's largest communities teaching young minds about how to sell
            yourself as a developer and open them to a whole new world of opportunities.
          </p>
        </div>
        <div className='ml-auto max-w-[57ch] flex flex-col gap-8'>
          <p className='text-[1.2rem]'> As a developer, you have everything available to you and all that's holding you back is yourself.</p>
          <p className='text-[1.2rem]'> A quote I live by perfectly illustrates what I mean.</p>
          <p className='text-[1.2rem]'>"How big would you dream, if you knew you wouldn't fail?" You've already gone through the hardest parts being a developer, it's time to elevate your skills and become a leader in something you're passionate about.</p>
          <p className='text-[1.2rem]'> I'm happy to chat over coffee some time about how I can help your company. </p>
        </div>
      </div>
    </div>
  )
}

export default MidSection