"use client"

import Image from 'next/image'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useForm, ValidationError } from '@formspree/react';


export default function MainContactForm() {
  const [state, handleSubmit] = useForm("mjvqznqk");
  if (state.succeeded) {
      return <div className='w-full h-full card2 py-10 flex justify-center items-center flex-col gap-5'>
        <Image alt="Me.image" src="/jag.jpeg" className='border-2 rounded-full' width={100} height={100} />
        <h1 className='capitalize font-bold text-2xl'>Thanks for reaching out.</h1>
        <p>I will get back to you as soon as possible</p>
        <div className='grid grid-cols-2 gap-10'>
            <div className='flex justify-center w-full'>
              <a href="Tel:+46722289195"><AiOutlinePhone className='inline-block mr-2'/><p className='text-sm hover:text-blue-500 underline inline-block'>Phone</p></a>
            </div>
            <div className='flex justify-center w-full'>
              <a href="mailto:villiamtorstensson@outlook.com"><AiOutlineMail className='inline-block mr-2' /><p className='inline-block text-sm underline hover:text-blue-500'>Email</p></a>
            </div>
      </div>
        </div>;
  }
 


    return (
      <section className='max-w-[1340px] mx-auto px-2 sm:px-10  w-full'>
        <div className='flex-col card2 border-[#323232] hover:border-[#323232] h-full w-full flex justify-center items-center pt-6 p-4 sm:p-10'>
         
              <Image alt="Me.image" src="/jag.jpeg" className='border-2 rounded-full' width={100} height={100} />
             
              <div>
              <h1 className='text-4xl font-extrabold mt-5 text-center capitalize'>Get in touch <br className='flex md:hidden' /> with me</h1>
              <p className='mt-5 mb-10 sm:w-[70%] mx-auto text-center'>I'm glad you consider reaching out to me. Let's create something great together</p>
              
              </div>
            
        
              <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full px-4 lg:px-10'>
                <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='font-bold text-xl'>
        Email
      </label>
      <input className='w-full bg-[#222226] shadow-inner shadow-black px-3 py-2 rounded-md border border-[#323232] placeholder-[#222226]'
        id="email"
        type="email" 
        name="Email"
        placeholder='Email'
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                </div>
   <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-6'>
    <div className='flex flex-col gap-2'>
    <label htmlFor="text" className='font-bold text-xl'>
        Name
      </label>

      <input className='w-full bg-[#222226] shadow-inner shadow-black px-3 py-2 rounded-md border border-[#323232] placeholder-[#222226]'
        id="name"
        type="text" 
        name="Name"
        placeholder="Name"
        required
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
    </div>
  <div className='flex flex-col gap-2'>
        <label htmlFor="text" className='font-bold text-xl'>
        Company
      </label>

      <input className='w-full bg-[#222226] shadow-inner shadow-black px-3 py-2 rounded-md border border-[#323232] placeholder-[#222226]'
        id="company"
        type="text" 
        name="Company"
        placeholder="Company"
        optional
      />
      <ValidationError 
        prefix="company" 
        field="company"
        errors={state.errors}
      />
      </div>
   </div>
   <div className='flex flex-col gap-2'>
   <label htmlFor="text" className='text-xl font-bold'>
        How can i help you?
      </label>
      <textarea className='w-full bg-[#222226] shadow-inner shadow-black px-3 py-2 rounded-md border border-[#323232] h-[120px] placeholder-[#222226]'
        id="message"
        name="Message"
        placeholder="Message"
      />

      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
   </div>
      <div className='flex justify-center items-center'>
      <button className='btn5 w-40' type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
      
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
  


