"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {


  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const closeMenu = () => {
    setIsOpen(false)
  } 

  return (
    <header className="w-full overflow-x-hidden">
       <nav className="z-40  mx-auto w-full px-10 items-center flex justify-between gap-20 h-[60px] bg-black/70 backdrop-blur-md fixed border-b border-[#323232] ">
        <div className='max-w-[1440px] mx-auto items-center flex justify-between w-full h-[60px]'>
        <ul className='flex'>
          <li className='relative'><Link onClick={closeMenu} href="/"><Image alt="logo" src="/mainlogo.svg" width={50} height={20} /></Link></li>
        </ul>

        <ul className='hidden md:flex justify-center gap-10'>
          <li><Link className=' text-gray-300 hover:text-white duration-[300ms]' href="/">Home</Link></li>
          <li><Link className=' text-gray-300 hover:text-white duration-[300ms]' href="/Pricing">Pricing</Link></li>
          <li><Link className=' text-gray-300 hover:text-white duration-[300ms]' href="/Services">Services</Link></li>
          <li><Link className=' text-gray-300 hover:text-white duration-[300ms]' href="/Contact">Contact</Link></li>
        </ul>

        <div className='flex'>
          <Link className='btn2 md:block hidden' href="/Contact">Let's Talk</Link>


          <div onClick={handleClick}>
            {isOpen ? (
              <AiOutlineClose className='md:hidden block text-2xl text-white font-bold' />
            ) : (
              <AiOutlineMenu className='md:hidden block text-2xl text-white font-bold' />
            )} 
            </div>
            <div className={`z-40 ease-in duration-[200ms] px-10 w-full h-screen  bg-black absolute top-[60px] left-0 flex-col flex ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
                
              <ul onClick={closeMenu} className='flex flex-col md:hidden justify-start gap-10 mt-10 w-full'>
                <li className='w-full border-b border-dashed border-gray-900 pb-1text-xl'><Link className='font-semibold text-gray-400 hover:text-white duration-[300ms]' href="/">Home</Link></li>
                <li className='w-full border-b border-dashed border-gray-900 pb-1text-xl'><Link className='font-semibold text-gray-400 hover:text-white duration-[300ms]' href="/Pricing" >Pricing</Link></li>
                <li className='w-full border-b border-dashed border-gray-900 pb-1text-xl'><Link className='font-semibold text-gray-400 hover:text-white duration-[300ms]' href="/Services">Services</Link></li>
                <li className='w-full border-b border-dashed border-gray-900 pb-1text-xl'><Link className='font-semibold text-gray-400 hover:text-white duration-[300ms]' href="/Contact">Contact</Link></li>
              </ul>  
            </div>
          </div>
        </div>
        

      
     </nav>
    </header>
   
  )
}