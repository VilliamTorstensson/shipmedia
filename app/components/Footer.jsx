"use client"
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {

  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setIsSent(true);
    
    // Add code to submit email to newsletter service
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
   
  }

  return (
    <main className="w-full">
      <footer className="w-full bg-[#151517] mt-20 pt-10">
        <div className=" max-w-[1340px] mx-auto flex flex-col lg:flex-row items-start justify-center gap-[3.5rem] md:gap-10  w-full h-full py-20 sm:px-10 px-6">
            <div className=" flex items-start w-full h-full">
              <h1 className="sm:text-4xl text-[2.2rem] leading-[2.9rem] md:text-4xl lg:text-4xl font-bold h-full">Gör dina idéer till digitala verkligheter.</h1>
            </div>
            <div className="flex flex-col justify-start gap-2 w-full ">
              <h1 className="uppercase font-bold text-2xl mb-4">Västervik.</h1>
              <a href="mailto: Villiam@shipmedia.se"><p className='hover:underline'> Villiam@shipmedia.se</p></a>
              <a href="tel:+46722289195"><p className='hover:underline'>+46 722289195</p></a>
              
              <p>Idrottsgatan 17 59350 Västervik, Sverige</p>
              <p>Ship-media Sweden</p>
            </div>
            <div className='flex flex-col gap-4 w-full'>
              <h1 className="text-2xl lg:text-2xl font-semibold uppercase mb-5">Håll dig uppdaterad, gå med i mitt nyhetsbrev.</h1>
              
              
              <div className='flex'>
                {isSent ? (
                  <h1 className='font-bold text-xl text-blue-400'>Tack för att du prenumererar</h1>) : (
                
                <input className='text-black font-regular placeholder-[#323232] py-1 px-[10px] bg-[#F2F2F2] rounded-l border-none w-full max-w-[300px]' 
              type="email"
              placeholder="Email"
              id="email2"
              value={email}
              onChange={handleChange}
              required
               />
               )}
               {isSent ? (
                ''
               ) : (
               <button type="submit" onClick={handleSubmit} className='px-2 py-1 rounded-r bg-[#323232]' >Skicka</button>
               )}
                  
             

             
              </div>
              <h1 className='font-bold text-lg uppercase mt-5'>Sociala medier.</h1>
              <div className='flex w-full justify-start gap-10 text-2xl'>
                <Link className='bg-[#323232] hover:bg-[#252525] p-2 rounded-full' href="https://instagram.com/villiamtorstensson" name="instagram"><AiOutlineInstagram /></Link>
                <Link className='bg-[#323232] hover:bg-[#252525] p-2  rounded-full' href="https://facebook.com/villiamtorstensson" name="facebook"><AiOutlineFacebook /></Link>
                <Link className='bg-[#323232] hover:bg-[#252525] p-2  rounded-full' href="https://www.linkedin.com/in/villiam-torstensson-47a0b625a/?originalSubdomain=se" name="linkedin"><AiOutlineLinkedin /></Link>
                <Link className='bg-[#323232] hover:bg-[#252525] p-2  rounded-full' href="https://github.com/VilliamTorstensson" name="github"><AiOutlineGithub /></Link>
                  
               
              </div>
            </div>
           
        </div>
        <div className='pb-8 w-full flex justify-center items-center gap-2 flex-col text-gray-300'>
          <Link href="/Privacy" className=' hover:text-gray-400'>Privacy Policy</Link>
          <h1>© 2023 all rights reserved</h1></div>
      </footer>
    </main>
  )
}