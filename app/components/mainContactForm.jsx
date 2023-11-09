"use client"

import Image from 'next/image'
import { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import {  useForm, ValidationError } from '@formspree/react';


export default function MainContactForm() {
  const [state, handleSubmit] = useForm("mgejqbpl");
  const [isSent, setIsSent] = useState(false)
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
 
 

  

    return (
      <section className='max-w-[1340px] mx-auto px-2 sm:px-10 lg:px-20 w-full'>
        <div className='flex-col card2 border-[#323232] hover:border-[#323232] h-full w-full flex justify-center items-center pt-6 p-4 sm:p-10'>
         
              <Image alt="Me.image" src="/jag.jpeg" className='border-2 rounded-full' width={100} height={100} />
              {isSent ? (
                '' ) : (
              <div>
              <h1 className='text-4xl font-extrabold mt-5 text-center capitalize'>Get in touch <br className='flex md:hidden' /> with me</h1>
              <p className='mt-5 mb-10 sm:w-[70%] mx-auto text-center'>I'm glad you consider reaching out to me. Let's create something great together</p>
              </div>
              )}
        {isSent ? (
          <div className='flex-col gap-5 flex h-full w-full justify-center items-center text-center'>
              <h1 className='text-2xl font-bold text-blue-400 pt-10 capitalize'>Thank's for reaching out!</h1>
              <p>I will get back to you as soon as possible.</p>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className='flex flex-col w-full md:gap-10 gap-5 ' method='post' action="https://formspree.io/f/mgejqbpl">
          <div className='w-full grid grid-cols-1 lg:grid-cols-'>
              <label className='text-xl font-bold' htmlFor="email">Email <span className='text-blue-500 text-sm ml-2'>required</span></label>
              <input className='bg-[#151517] shadow-black shadow-inner p-4 rounded-lg border border-[#2b2b2b] mt-4' type="email" id="email"  required /><ValidationError field="email" prefix="Email" errors={state.errors} />
          </div>
          <div className='flex md:flex-row flex-col gap-5 md:gap-10 '>
              <div className='w-full flex flex-col'>
                  <label className='text-xl font-bold' htmlFor="firstName">First Name</label>
                  <input className='bg-[#151517] shadow-black shadow-inner p-4 rounded-lg border border-[#2b2b2b] mt-4' type="text" id="firstName"  />
                  <ValidationError field="firstName" prefix="firstName" errors={state.errors} />
              </div>
              <div className='w-full flex flex-col'>
                  <label className='text-xl font-bold' htmlFor="lastName">Last Name </label>
                  <input className='bg-[#151517] shadow-black shadow-inner p-4 rounded-lg border border-[#2b2b2b] mt-4' type="text" id="lastName"  />
                  <ValidationError field="lastName" prefix="lastName" errors={state.errors} />
              </div>
          </div>
       
          <div className='w-full flex flex-col'>
              <label className='text-xl font-bold' htmlFor="company">Company</label>
              <input className='bg-[#151517] shadow-black shadow-inner p-4 rounded-lg border border-[#2b2b2b] mt-4' type="text" id="company"  />
              <ValidationError field="text" prefix="company" errors={state.errors} />
          </div>
          <div className='w-full flex flex-col'>
              <label className='text-xl font-bold' htmlFor="message">How can i help you?</label>
              <textarea className='bg-[#151517] shadow-black shadow-inner h-40 p-4 rounded-lg border border-[#2b2b2b] mt-4' id="message" />
              <ValidationError field="text" prefix="message" errors={state.errors} />
          </div>
         
        
       

        
        
          <div className='flex w-full justify-center'>
          <button type="submit" disabled={state.submitting} className='btn5'>Submit</button>
          </div>
     
      </form>
      
      )}
      <div className='grid grid-cols-2 mt-10 gap-10'>
            <div className='flex justify-center w-full'>
              <a href="Tel:+46722289195"><AiOutlinePhone className='inline-block mr-2'/><p className='text-sm hover:text-blue-500 underline inline-block'>Phone</p></a>
            </div>
            <div className='flex justify-center w-full'>
              <a href="mailto:villiamtorstensson@outlook.com"><AiOutlineMail className='inline-block mr-2' /><p className='inline-block text-sm underline hover:text-blue-500'>Email</p></a>
            </div>
      </div>
        </div>
     
      </section>
    
    );
        };
  


