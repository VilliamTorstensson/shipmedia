import Link from 'next/link';
export default function PriceCards() {
  return (
    <main className='bg-gradient-to-b h-full from-black to-[#151517]'>
    <section id="pricecardsection" className='py-20 sm:py-40 w-full  max-w-[1340px] mx-auto  flex flex-col '>
    <div className='w-full h-content mb-20 flex justify-center flex-col items-center px-4 sm:px-10 '>
      
      <h1 className='text-center font-bold text-white capitalize lg:text-4xl text-2xl lg:leading-10 '>Paket priser</h1>
      <h2 className='mt-4 text-center text-sm sm:text-2xl'> Se mina Webbutvecklings paket</h2>
      <p className='text-blue-500 mt-4 '>Mindre lösningar längre ner</p>
    </div>
       
  
  <div className='grid grid-cols-1 gap-10 md:grid-cols-3 xl:gap-10 md:gap-8 px-6 sm:px-10'>
    {/**First card */}
      <div className='card2 flex flex-col justify-start gap-5 pb-10 px-6 items-center hover:scale-105 duration-500'>
        <div className='w-40 bg-gray-600  h-content py-2 text-white flex justify-center items-center font-bold mb-2'>Rekommenderas</div>
          <h1 className='font-bold text-2xl text-white'>Startup</h1>
          
          <div className='flex items-end'>
              
              <h1 className='text-4xl'>5999</h1>
              <h1 className='text-lg'>Kr</h1>
            
          </div>

          <Link href="/Contact" className='btn2'>Kontakt</Link>
          <hr className='mt-4 mb-4 text-white w-full h-2' />

            <ul className=''>
            <li className="text-gray-300">1-5 days delivery</li>
            <li className="text-gray-300">Figma design set-up</li>
            <li className="text-gray-300">Store strategy</li>
            <li className="text-gray-300">Full customization</li>
            <li className="text-gray-300">Fast and responsive</li>
            <li className="text-gray-300">User friendly</li>
            </ul>
         
       
      </div>

      {/**second card */}
      <div className='card2 flex flex-col justify-start gap-5 pb-10 px-6 items-center hover:scale-105 duration-500 '>
      <div className='w-40 bg-blue-500  mb-2 text-white flex justify-center items-center font-bold h-content py-2'>Vanligast</div>
          <h1 className='font-bold text-2xl text-white'>Agency</h1>
         
          <div className='flex items-end'>
          <h1 className='text-4xl'>14999</h1>
              <h1 className='text-lg  mr-1'>kr</h1>
              
            
          </div>

          <Link href="/Contact" className='btn2 hover:bg-blue-700 bg-blue-500 text-white'>Contact</Link>
          <hr className='mt-4 mb-4 text-white w-full h-2' />
          <div>
            <li className="text-gray-300">1-2 Weeks delivery</li>
            <li className="text-gray-300">Multiple Figma demos</li>
            <li className="text-gray-300">Marketing strategy</li>
            <li className="text-gray-300">Full customization</li>
            <li className="text-gray-300">Fast and responsive</li>
            <li className="text-gray-300">User friendly</li>
            <li className="text-gray-300">Sales funnel</li>
            
          </div>
          
      </div>


      {/**Last card */}
      <div className='card2 flex flex-col justify-start gap-5 pb-10 px-6 items-center hover:scale-105 duration-500'>
      <div className='w-40 bg-gray-600  h-content py-2 mb-2 text-white flex justify-center items-center font-bold'>Rekommenderas</div>
          <h1 className='font-bold text-2xl text-white'>Empire</h1>
         
          <div className='flex items-start'>
              <h1 className='text-lg'>$</h1>
              <h1 className='text-4xl'>4999</h1>
            
          </div>

          <Link href="/Contact" className='btn2'>Contact</Link>
          <hr className='mt-4 mb-4 text-white w-full h-2' />
          <div>
            <li className="text-gray-300">1-2 months delivery</li>
            <li className="text-gray-300">Multiple Figma demos</li>
            <li className="text-gray-300">Marketing strategy</li>
            <li className="text-gray-300">All inclusive</li>
            <li className="text-gray-300">Fast and responsive</li>
            <li className="text-gray-300">User interface</li>
            <li className="text-gray-300">Sales funnel</li>
            
          </div>
      </div>



  </div>
</section>
</main>
  )
};