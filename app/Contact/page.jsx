

import Faq from '../components/Faq';
import MainContactForm from '../components/mainContactForm';
export default function ContactPage() {



  return (
    <section className=''>
      <div className='sm:px-10 px-4 mt-[60px] bg-gradient-to-b from-black via-[#151517] to-black py-20'>
      
      <MainContactForm />
      </div>
  
      
     
    
     {/**FAQ */}
         <div className='w-full max-w-[1340px] mx-auto py-20 px-4 sm:px.10'>
         <Faq />
         
        
        </div>
        {/**auppgifter */}
        <div className=' w-full flex flex-col gap-5 h-full max-w-[1340px] mx-auto sm:px-10 px-4 py-20'>
            <h1 className='font-bold text-4xl mt-20'>Details.</h1>
            <div className='flex gap-2'>
              <h1>Adress:</h1>
              <p>Idrottsgatan 17 59350 Västervik Sweden.</p>
            </div>
            <div className='flex gap-2'>
            <h1>Phone:</h1>
            <a href="Tel: +46722289195"><p className='underline hover:text-blue-500'>+46 722289195</p></a>
            </div>
            <div className='flex gap-2'>
            <h1>Mail:</h1>
            <a href="mailto:villiamtorstensson@outlook.com"><p className='underline hover:text-blue-500'>Villiamtorstensson@outlook.com</p></a>
            </div>
            <div className='flex gap-2'>
              <h1>Business Name:</h1>
              <p>Ship-media Sweden.</p>
            </div>
            
        </div>
       
    </section>
      
  );
 };

