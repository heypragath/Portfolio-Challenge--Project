import Image from 'next/image'
import React from 'react'
import Hamburger from "../Assets/Hamburger Menu.svg"

function Header() {
  return (
    <div className='h-[80px] pt-[40px] flex justify-between items-center w-fluid-width-1280 mx-auto'>
      <p className='font-heading-font text-xl '>Johnathan Specter</p>
      <ul className='flex gap-5 max-md:hidden'>
        <li>Articles</li>
        <li>Chats</li>
        <li>Awards</li>
        <li>About</li>
      </ul>
      <button className='bg-[#fbe850] py-3 text-black px-6 max-md:hidden'>Get in Touch</button>
      <div className='w-9 h-auto hidden max-md:block'>
        <Image src={Hamburger} alt='burger' />
      </div>
    </div>
  )
}

export default Header