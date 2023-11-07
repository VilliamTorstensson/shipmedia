import Image from 'next/image'
import Link from 'next/link'
export default function Hero () {
  return (
    <section className="w-full h-full bg-gradient-to-b from-black via-[#090909] to-black py-20  mt-20">
      <div className="w-full h-full max-w-[1340px] mx-auto flex flex-col gap-10 items-center justify-center px-4 sm:px-10">
        <div className='blur-sm bg-sky-700 w-[25px] h-[25px] rounded-full absolute 2xl:left-[600px] left-10 sm:left-20 top-40'>
        </div>
        <div className='bg-sky-300 w-[15px] h-[15px] rounded-full absolute 2xl:right-[550px] right-5 sm:right-20 top-60'>
        </div>
        <div className='blur-sm  bg-sky-900 w-[30px] h-[30px] rounded-full absolute 2xl:right-[600px] right-5 sm:right-20 top-[500px]'>
        </div>
        <div className=' bg-blue-500 w-[10px] h-[10px] rounded-full absolute 2xl:left-[650px] left-20 top-[600px]'>
        </div>
        <div className="flex justify-center items-center flex-col">
          <Image src="/jag.jpeg" width={80} height={80} alt="me" className="z-20 rounded-full border-2" />
          <h1 className='font-mono capitalize font-semibold text-gray-400 mt-4'>a web developer.</h1>
          <div className='flex justify-center items-center'>
            <h1 className=' bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-white text-2xl font-bold capitalize text-center z-20'> Villiam Torstensson</h1>
          </div>
        
        </div>
        <div className='w-full h-full flex-col gap-4 sm:gap-10 flex justify-center items-center'>
            <h1 className='z-20 text-white text-2xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold  capitalize text-center '>
              Building digital products,<br /> brands, and experiences.
            </h1>
            <p className='text-center z-20 lg:w-[60%] mx-auto'><span className='text-white z-20'>I deliver fast and user-friendly Websites.</span> An online presence is a powerful tool for your business, driving increased sales and revenue. It enables you to tap into a global market and sell products or services 24/7.</p>
           
            <Link href='/Contact' className="blur-none z-20 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 btn5 rounded-full hover:from-blue-600 hover:via-sky-700 hover:to-blue-700">Get started</Link>
            
           
          </div>
      </div>
    </section>
  )
}