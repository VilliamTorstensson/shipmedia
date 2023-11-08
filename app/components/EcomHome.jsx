import Link from 'next/link'
import { FaShopify, FaWordpress, FaReact } from 'react-icons/fa';

export default function EcomHome() {
  return (
    <section className="w-full h-full border-t border-b bg-gradient-to-b from-black via-[#151517]/70 to-black border-[#323232] ">
          <div className="max-w-[1340px] mx-auto w-full h-full flex flex-col gap-20 px-4 sm:px-10 items-center justify-center py-20">

            <div className="w-full flex flex-col justify-center items-center gap-10 sm:gap-20">
              <h1 className="font-black text-3xl md:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-400 capitalize">Ecommerce solutions</h1>
              <div className='shadow-lg shadow-black py-[2px] px-[2px] rounded-lg flex justify-center items-center bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500'>
              <Link href="/Pricing#Esection" className='btn5 shadow-none '><span className=' text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold from-gray-300 via-gray-500 to-gray-400 uppercase' >pricing</span></Link>
              </div>
              </div>
              
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 ">

              {/**Shopify */}
              <Link href="/Pricing#ShopifySection">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-10 rounded-xl shadow-lg shadow-black card2 hover:scale-105 duration-500">
                  <FaShopify className='text-4xl text-[#95BF47]'/>
                  <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-xl'>Shopify.</h1>
                    <p className='text-sm'>
                      Shopify is the go-to e-commerce platform due to its user-friendliness, customizable templates, and seamless payment integration, making it effortless to create and manage online stores.
                      </p>
                  </div>
              </div>
              
              </Link>
              {/**Woocommerce */}
              <Link href="/Pricing#WoocommerceSection">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-10 rounded-xl shadow-lg shadow-black card2 hover:scale-105 duration-500">
                  <FaWordpress className='text-4xl'/>
                  <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-xl'>WooCommerce.</h1>
                    <p className='text-sm'>
                      
                      WooCommerce is a superb choice for e-commerce. Its flexibility and scalability make it ideal for businesses of all sizes. With a wide range of customizable features, it's easy to create a tailored online store. 
                      </p>
                  </div>
              </div>
              </Link>
              {/**React */}
              <Link href="/Pricing#EcomAppsection">
              <div className="w-full h-full p-4 flex flex-col items-start justify-center gap-10 rounded-xl shadow-lg shadow-black card2 hover:scale-105 duration-500">
                  <FaReact className='text-4xl text-[#61DBFB]'/>
                  <div className='flex flex-col gap-3'>
                    <h1 className='font-bold text-xl'>React.</h1>
                    <p className='text-sm'>
                      
                        React is ideal for e-commerce web applications due to its speed, interactivity, and component-based architecture. It offers seamless user experiences, efficient data handling, and easy scalability.
                      </p>
                  </div>
              </div>
              </Link>
            </div>
          </div>
    </section>
  )
}