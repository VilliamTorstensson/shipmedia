import Image from 'next/image'
import Link from 'next/link'
export default function Hero () {
  return (
    <section className="w-full h-full bg-gradient-to-b from-black via-[#151517] to-black py-20  mt-20">
      <div className="w-full h-full max-w-[1340px] mx-auto flex flex-col gap-5 sm:gap-10 items-center justify-center px-4 sm:px-10">
        <div className=' bg-sky-800 w-[25px] h-[25px] rounded-full absolute 2xl:left-[600px] left-10 sm:left-20 top-40'>
        </div>
        <div className='bg-sky-500 w-[15px] h-[15px] rounded-full absolute 2xl:right-[550px] right-5 sm:right-20 top-60'>
        </div>
        <div className='  bg-sky-900 w-[30px] h-[30px] rounded-full absolute 2xl:right-[600px] right-5 sm:right-20 top-[500px]'>
        </div>
        <div className=' bg-sky-700 w-[10px] h-[10px] rounded-full absolute 2xl:left-[650px] left-20 top-[600px]'>
        </div>
        <div className="flex justify-center items-center flex-col mb-0">
          <Image src="/jag.jpeg" width={80} height={80} alt="me" className="z-20 rounded-full border-2" />
          <h1 className='font-mono capitalize font-semibold text-gray-400 mt-4'>Webbutvecklare</h1>
          <div className='flex justify-center items-center'>
            <h1 className=' bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-white text-2xl font-bold capitalize text-center z-20'> Villiam Torstensson</h1>
          </div>
        
        </div>
        <div className='w-full h-full flex-col gap-5 sm:gap-10 flex justify-center items-center'>
            <h1 className='z-20 text-white text-[1.5rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black  capitalize text-center leading-8'>
              Skapar Digitala Produkter,<br /> Varumärken, Och Upplevelser.
            </h1>
            <p className='text-center z-20 lg:w-[60%] mx-auto'><span className='text-white z-20 font-semibold'>Jag levererar snabba och användarvänliga hemsidor.</span><br className='sm:flex hidden'/> Nå ut till en bredare målgrupp med en stakark närvaro online</p>
           
            <Link href='/Contact' className="blur-none z-20 bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500 btn5 rounded-full hover:from-blue-600 hover:via-sky-700 hover:to-blue-700">Kontakta Mig</Link>
            
           
          </div>
      </div>
    </section>
  )
}