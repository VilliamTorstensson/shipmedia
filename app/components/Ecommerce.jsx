import Link from 'next/link'

export default function Ecommerce() {
  return (
    <section id="Esection" className="bg-gradient-to-b from-black via-[#151517]/50 to-black border-t border-[#6d6d6d] w-full h-full py-20">
      <div className="max-w-[1340px] mx-auto flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-2 px-4 sm:px-10">
            <h1 className="font-bold text-4xl sm:px-10 px-6 text-center capitalize">ecommerce owner?.</h1>
            <h2 className='text-center font-semibold mt-2'>I offer Ecommerce solutions for any business.</h2>
          <p className="text-center mt-2">Sell your products online and reach a global audience</p>
        </div>
      {/**cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-6 sm:px-10">
        {/**first card */}
        <div id="ShopifySection" className="card hover:border-[#323232] bg-black flex flex-col justify-between items-center gap-4 py-8 px-4">
         
          <h1 className="font-bold uppercase text-2xl text-green-600">shopify </h1>
          <p className="capitalize text-center">Custom shopify store Design</p>
          <h1 className="text-2xl"><span className="text-white text-2xl">599 - 4 999 </span>$</h1>
          <hr className="h-1 border-gray-400 w-60 md:w-40 lg:w-60" />
         
          <div className="flex flex-col gap-4 ">
            <h1 className="t">Includes:</h1>
            <li className=" text-gray-300">
              1-30 days days delivery
            </li>
            <li className="text-gray-300">
              Design set-up in Figma
            </li>
            <li className="text-gray-300">
              Store strategy
            </li>
            <li className="text-gray-300">
              Migration from another platform
            </li>
            <li className="text-gray-300">
              Custom sections
            </li>
            <h1 className="text-gray-300">And more...</h1>
          </div>
          <Link className="btn4 mt-5" href="/Contact">Contact</Link>
         
          
        </div>
        {/**second card */}
        <div id="WoocommerceSection" className="card hover:border-[#323232] bg-black flex flex-col justify-between items-center gap-4 py-8 px-4">
         
         <h1 className="font-bold uppercase text-2xl text-purple-600">WooCommerce </h1>
         <p className="capitalize text-center">Custom store hosted with wordpress WooCommerce</p>
         <h1 className="text-2xl"><span className="text-white text-2xl">799 - 4 999 </span>$</h1>
         <hr className="h-1 border-gray-400 w-60 md:w-40 lg:w-60" />
        
         <div className="flex flex-col gap-4 ">
           <h1 className="t">Includes:</h1>
           <li className=" text-gray-300">
             1-30 days days delivery
           </li>
           <li className="text-gray-300">
             Design set-up in Figma
           </li>
           <li className="text-gray-300">
             Store strategy
           </li>
           <li className="text-gray-300">
             Migration from another platform
           </li>
           <li className="text-gray-300">
             Custom Sections
           </li>
           <h1 className="text-gray-300">And more...</h1>
         </div>
         <Link className="btn4 mt-5" href="/Contact">Contact</Link>
        
         
       

        </div>
        {/**third card */}
        <div id="EcomAppsection" className="card hover:border-[#323232] bg-black flex flex-col justify-between items-center gap-4 py-8 px-4">
         
         <h1 className="font-bold uppercase text-2xl text-center text-[#61DBFB]">React Application</h1>
         <p className="capitalize text-center ">a fullstack web application built with React, Next.js</p>
         <h1 className="text-2xl"><span className="text-white   text-2xl">3 999 - 9 999 </span>$</h1>
         <hr className="h-1 border-gray-400 w-60 md:w-40 lg:w-60" />
        
         <div className="flex flex-col gap-4 ">
           <h1 className="t">Includes:</h1>
           <li className=" text-gray-300">
             1-2 months delivery
           </li>
           <li className="text-gray-300">
             Design set-up in Figma
           </li>
           <li className="text-gray-300">
             Store strategy
           </li>
           <li className="text-gray-300">
            User interface
           </li>
           <li className="text-gray-300">
            Follow ups
           </li>
           <h1 className="text-gray-300">And more...</h1>
         </div>
         <Link className="btn4 mt-5" href="/Contact">Contact</Link>
        
         
       

        </div>
        

      </div>
      </div>
    
      
    </section>
    
  )
}