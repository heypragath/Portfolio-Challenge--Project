"use client"

import Image from 'next/image'
import React from 'react'
import Walmart from "../Assets/Logos/Walmart.svg"
import Samsung from "../Assets/Logos/Samsung.svg"
import Visa from "../Assets/Logos/Visa.svg"
import Tinder from "../Assets/Logos/Tinder.svg"
import Verizon from "../Assets/Logos/Verizon.svg"
import JPMorgan from "../Assets/Logos/JPMorgan.svg"

const Logos = [Walmart, JPMorgan, Visa, Tinder, Samsung, Verizon]


function Hero() {
    return (
        <div className='mt-margin--64-80'>
            <h1 className='font-heading-font leading-none text-size--39-60 tracking-wide font-light max-w-heading'>Helping companies build better, scalable software.
            </h1>
            <p className='max-w-heading-sub mt-4  text-base'>Award-winning web developer and author, with over 15+ years of working experience with Fortune 500 companies like Apple, Google, Facebook and more.
            </p>
            <div className='flex justify-between my-margin--18-40 py-padding--14-20 flex-wrap '>
                {Logos.map((Logo, index) =>
                    <div className='max-md:basis-1/2 p-3' key={index}>
                        <Image className='mx-auto' src={Logo} alt='Logos' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Hero