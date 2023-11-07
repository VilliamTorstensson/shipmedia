"use client"

import Link from 'next/link';
import { PiPencilCircleDuotone } from 'react-icons/pi';
import { useState } from 'react';
import { RiAdvertisementLine } from 'react-icons/ri';
import { PiFigmaLogoDuotone } from 'react-icons/pi';
export default function SmallServices() {

const [isopen1, SetIsopen1 ] = useState(false);
const [isopen2, SetIsopen2 ] = useState(false);
const toOpen = () => {
  SetIsopen1(!isopen1);
}
const toOpen2 = () => {
  SetIsopen2(!isopen2);
}

  return (
    <section className="w-full h-full pb-40 pt-20 bg-[#151517] mx-auto">
      {/**Grid layout */}
      <div className=" max-w-[1340px] mx-auto px-4 sm:px-10 flex justify-center items-center flex-col w-full gap-10">
        <div className='flex flex-col item-center justify-center text-center'>
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">Smaller Solutions</h1>
        <p className="mt-2">logo design, ad-creatives, marketing strategy, </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 mt-10 w-full h-full justify-center">
          <div onClick={toOpen} className="card2 cursor-pointer w-full flex flex-col p-4 items-start gap-4  justify-center h-min">
            <div className='flex items-center gap-4 text-2xl'>
            <PiPencilCircleDuotone className="text-4xl text-amber-800 inline-block" />
            <h1 className='font-bold text-white'>Logo design</h1>
            </div>
           
            <div>
              <h2 className='text-gray-300'>
              I'm here to bring your brand to life through logo design. 
                {isopen1 ? (
                  ''
                ) : (
                  <span className='hover:text-gray-300 underline text-gray-600 ml-2 cursor-pointer' >Read more</span>
                )}
               
                {isopen1 ? (
                  <div className='flex flex-col items-start'>
                       <h2>I create logos that reflect your brand's identity and connect with your audience.</h2>
                       <p className='mt-5'>My approach to logo design involves a deep understanding of your brand, its values, and the message you want to convey. I believe that a well-designed logo should be a reflection of your brand's personality, ensuring it resonates with your target audience. Let's work together to make your brand stand out.</p>
                        <Link className='btn4 mt-4' href="/Contact">Contact</Link>
                  </div>
               
                ) : (
                  ''
                )}
              </h2>
            </div>
          </div>
          <div onClick={toOpen2} className="cursor-pointer card2 flex flex-col p-4 items-start gap-4 h-content justify-center w-full h-min">
            <div className='flex items-center gap-4 text-2xl'>
            <PiFigmaLogoDuotone className="text-4xl text-rose-800 inline-block" />
             <h1 className='font-bold text-white'>Figma design</h1>
            </div>
           
            <div>
              <h2 className='text-gray-300'>
              Elevate Your Ad Creatives with Figma.


                {isopen2 ? (
                  ''
                ) : (
                  <span className='hover:text-gray-300 underline text-gray-600 ml-2 cursor-pointer' >Read more</span>
                )}
               
                {isopen2 ? (
                  <div className='flex flex-col items-start'>
                       <h2 className='text-gray-400 mt-4'>Your brand deserves ad creatives that make a statement. I specialize in crafting Figma ad creatives that not only catch the eye but also drive engagement and conversions. With a keen eye for design, I ensure your message shines through in every visual. Let's turn your ad campaigns into success stories.</h2>
                       
                        <div className='flex flex-col items-center justify-start'>
                            
                        </div>
                        <Link className='btn4 mt-4' href="/Contact">Contact</Link>
                  </div>
               
                ) : (
                  ''
                )}
              </h2>
            </div>
          </div>
        </div>

                      {/**Lower grid */}
        <div className='flex flex-col gap-5 items-start p-4 w-full card2'>
            {/**third card */}
          
            <div className='flex gap-4 items-center'>
            <RiAdvertisementLine className='text-4xl text-sky-700'/>
            <h1 className='font-bold capitalize text-2xl'>Paid Marketing </h1>
            </div>
            <p>
            I specialize in harnessing the power of TikTok, Meta, and Google Ads to elevate your brand's online presence. With my in-depth expertise in these platforms, i can help you connect with your target audience more effectively and drive results that matter. My approach combines creative content strategies, precise audience targeting, and data-driven analysis to ensure your campaigns deliver the desired impact. Whether you're looking to go viral on TikTok, boost engagement on Meta, or dominate Google's search results, i'm here to craft tailored solutions that maximize your ROI. Partner with me and let's take your marketing to the next level.
            </p>
            <Link href="/Contact" className='btn4'>Contact</Link>
            </div>
      </div>
    </section>
  )
}