"use client"
import { BiSolidDownArrow } from 'react-icons/bi'
import { useState } from 'react'
import Link from 'next/link'
export default function Steps () {

  const [isopen, setIsopen] = useState(false)
  const [isopen2, setIsopen2] = useState(false)
  const [isopen3, setIsopen3] = useState(false)
  const [isopen4, setIsopen4] = useState(false)


  const handleClick = () => {
    setIsopen(!isopen)
  }
  const handleClick2 = () => {
    setIsopen2(!isopen2)
  }
  const handleClick3 = () => {
    setIsopen3(!isopen3)
  }
  const handleClick4 = () => {
    setIsopen4(!isopen4)
  }
  return (
    <section className="py-10 sm:py-20 w-full h-full max-w-[1340px] mx-auto">
     
      <div className="px-4 w-full sm:px-10 flex flex-col items-center h-full">
        <div className="gap-6 flex flex-col items-center justify-center w-full">
          <h1 className="text-center md:text-8xl text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400
           font-extrabold">Your website <br />in 4 steps</h1>    
          <p className="text-center text-gray-200 text-lg sm:text-xl">Our process ensures that we create a website <br className=' hidden sm:flex'/> tailored to your business needs.</p>    
          <BiSolidDownArrow  className='my-4 text-6xl text-gray-200 '/>  
        </div>

        {/**steps start */}
          
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-5 mt-10'>
          
          <div onClick={handleClick} className='h-fit bg-[#090909] rounded-sm shadow-lg shadow-black w-full p-6 flex gap-6 flex-col justify-between'>
            <div className='flex justify-between w-full items-center'>
             <h1 className='p-2 bg-[#090909] border border-[#323232] rounded-full h-[45px] w-[45px] flex justify-center items-center'>01</h1>
              <h1 className='p-2 bg-[#090909] border border-[#323232]'>2 hours</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='uppercase'>do we match?</p>
              <h1 className='uppercase  text-2xl font-bold'>dicovery call</h1>
            </div>
            {isopen ? (
              <p className='text-gray-200'>Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?</p>
              
            ) : ( 
              <p className='text-gray-300 underline cursor-pointer hover:text-blue-700'>Read more</p>
            )}

          </div>

          {/**2 */}
          <div onClick={handleClick2} className='h-fit bg-[#090909] rounded-sm shadow-lg shadow-black w-full p-6 flex gap-6 flex-col justify-between'>
            <div className='flex justify-between w-full items-center'>
             <h1 className='p-2 bg-[#090909] border border-[#323232] rounded-full h-[45px] w-[45px] flex justify-center items-center'>02</h1>
              <h1 className='p-2 bg-[#090909] border border-[#323232]'>1-2 weeks</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='uppercase'>Prototype magic</p>
              <h1 className='uppercase text-2xl font-bold'>web design</h1>
            </div>
            {isopen2 ? (
              <p className='text-gray-200'>Now comes the magic. Based on our discovery call, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.</p>
              
            ) : ( 
              <p className='text-gray-300 underline cursor-pointer hover:text-blue-700'>Read more</p>
            )}

          </div>
           
            {/**3 */}
            <div onClick={handleClick3} className='h-fit bg-[#090909] rounded-sm shadow-lg shadow-black w-full p-6 flex gap-6 flex-col justify-between'>
            <div className='flex justify-between w-full items-center'>
             <h1 className='p-2 bg-[#090909] border border-[#323232] rounded-full h-[45px] w-[45px] flex justify-center items-center'>03</h1>
              <h1 className='p-2 bg-[#090909] border border-[#323232]'>1-7 days</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='uppercase'>more magic</p>
              <h1 className='uppercase text-2xl font-bold'>web development</h1>
             
            </div>
            {isopen3 ? (
              <p className='text-gray-200'>In this step, we breathe life into your new high-end design. You will receive a custom-built website using React and Next.js.  Animations will add the necessary flair to your site and set you apart from the boring competition.</p>
              
            ) : ( 
              <p className='text-gray-300 underline cursor-pointer hover:text-blue-700'>Read more</p>
            )}
          </div>
          {/*4 */}
          <div onClick={handleClick4} className='h-fit bg-[#090909] rounded-sm shadow-lg shadow-black w-full p-6 flex gap-6 flex-col justify-between'>
            <div className='flex justify-between w-full items-center'>
             <h1 className='p-2 bg-[#090909] border border-[#323232] rounded-full h-[45px] w-[45px] flex justify-center items-center'>04</h1>
              <h1 className='p-2 bg-[#090909] border border-[#323232]'>2 Hours</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='uppercase'>Ready to go</p>
              <h1 className='uppercase text-2xl font-bold'>website onboarding</h1>
          
            </div>
            {isopen4 ? (
              <p className='text-gray-200'>I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized video tutorials that you can access at any time. If you stumbel across any problems along the way im here to help.</p>
              
            ) : ( 
              <p className='text-gray-300 underline cursor-pointer hover:text-blue-700'>Read more</p>
            )}
          </div>
        </div>
   
      
      </div>
    </section>
  )
}