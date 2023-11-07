import { SiInteractiondesignfoundation } from 'react-icons/si'
import { MdWeb } from 'react-icons/md'
import { HiShoppingBag } from 'react-icons/hi'

import Link from 'next/link'
export default function AboutMe () {
  return (
    <section className="pb-20 w-full h-full  flex flex-col items-center justify-center  bg-gradient-to-b from-black to-[#151517]  ">
      <div className='max-w-[1340px] mx-auto flex flex-col items-center justify-center gap-20 md:gap-40 w-full px-6 sm:px-10'>
       
       
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full'>
            <Link href="#websection">
            <div className='card hover:scale-105 duration-500 p-4 flex flex-col items-start h-full w-full gap-3 cursor-pointer'>
              <h1 className='font-bold text-2xl flex gap-3 items-center'><MdWeb className='inline-block text-2xl text-sky-500' />Web<br className='md:flex hidden lg:hidden' />development.</h1>
              <p>I specialize in developing websites that deliver dynamic and engaging user experiences. <span className='underline hover:text-white text-gray-600'>Read more</span></p>
            </div>
            </Link>
            <Link href="#Ecomservicesection">
              <div className='card hover:scale-105 duration-500 p-4 flex flex-col items-start h-full w-full gap-2 cursor-pointer'>
              <h1 className='font-bold text-2xl flex gap-3 items-center'><HiShoppingBag className='text-2xl text-purple-500 inline-block'/>E-commerce</h1>
              <p>I'm crafting e-commerce websites using Shopify, WooCommerce, and React. With a focus on user-friendly design and high performance. <span className='underline hover:text-white text-gray-600'>Read more</span></p>
            </div>
            </Link>
            <div className='card hover:scale-105 duration-500 p-4 flex flex-col items-start h-full w-full gap-2 cursor-pointer'>
              <h1 className='font-bold text-2xl flex gap-3 items-center'><SiInteractiondesignfoundation className='inline-block text-2xl text-orange-500' />Smaller projects</h1>
              <p>I'm also a graphic designer focusing on creating stunning ad creative images through Figma  <span className='underline hover:text-white text-gray-600'>Read more</span></p>
            </div>
            
        </div>
        
      </div>
    </section>
  )
}