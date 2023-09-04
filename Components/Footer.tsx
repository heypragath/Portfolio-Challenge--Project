"use client"
import React from 'react'
import Twitter from "../Assets/SocialIcons/Twitter.svg"
import Linkdln from "../Assets/SocialIcons/LinkedIn.svg"
import Github from "../Assets/SocialIcons/Github.svg"
import Image from 'next/image'

const Logos = [Twitter, Linkdln, Github]

function Footer() {
  return (
    <div className=' bg-[#2f2f37]'>
      <div className='w-fluid-width-1280 mx-auto flex justify-between h-[70px] items-center'>
        <p className='font-heading-font'>Johnanthan Spector</p>
        <div className='flex gap-3 '>
          {Logos.map((logo, index) => <Image key={index} src={logo} alt='social-logos' />)}
        </div>
      </div>
    </div>
  )
}

export default Footer

