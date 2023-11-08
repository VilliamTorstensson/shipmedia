import Image from 'next/image'
import Link from 'next/link'
import { BsCodeSlash, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BiLogoMeta } from 'react-icons/bi'
import { FaFigma, FaShopify } from 'react-icons/fa'
export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-black to-[#151517] w-full h-full sm:py-40 py-20 sm:px-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-[1340px] mx-auto">
         {/*left container */}

        <div className='grid md:grid-cols-[1fr_2fr] items-start grid-cols-1 gap-10'>
        <div className='flex w-full justify-center'>
          <Image alt="Me" src="/jag.jpeg" className=' rounded-full border-gray-100 border-2 ' width={180} height={180}/>
        </div>
       
        <div className='flex flex-col gap-5 justify-center md:items-start items-center h-full'>
          <h1 className='font-bold text-gray-100 text-4xl sm:text-start text-center'>Villiam Torstensson</h1>
          <p className='text-md text-center md:text-start'>I'm a webdeveloper and graphic designer based in Sweden. I specialize in building cutting-edge websites using React with Next.js as my trusted framework, with my attention for details i create seamless, responsive, and user-friendly web solutions that not only meet but exceed expectations. <span className='text-gray-100'>Let's collaborate and turn your online vision into reality.</span> </p>
         
        </div>
        </div>

        {/*right container */}
       <div className='grid grid-rows-3 w-full gap-5'>
        {/*Upper */}
        <Link href="/Services">
        <div className='card2 hover:scale-105 duration-500 p-3 grid grid-cols-2 gap-4 '>
          <div className='bg-[#151517]  shadow-md shadow-black rounded-xl p-4 w-full flex flex-col justify-center  '>
            <h1 className='font-bold text-3xl sm:text-4xl'>01</h1>
            <p className='sm:text-md text-sm'>Years experience</p>
          </div>

          <div className='bg-[#151517]  shadow-md shadow-black rounded-xl p-4 w-full flex flex-col justify-center  '>
            <h1 className='font-bold text-3xl sm:text-4xl'>50+</h1>
            <p className='sm:text-md text-sm'>Projects built</p>
          </div>
        </div>
        </Link>


        {/*middle */}
        <Link href="/Services">
        <div className='card2 hover:scale-105 duration-500 p-3 h-full flex items-start gap-3 sm:gap-5  justify-center '>
          
        
            <div className='p-2 bg-[#151517] shadow-md shadow-black h-full w-full flex items-center justify-center rounded-xl'><BsCodeSlash className='text-4xl' /></div>
            <div className='p-2 bg-[#151517] shadow-md shadow-black h-full w-full flex items-center justify-center rounded-xl'> <FaFigma className='text-4xl' /></div>
            <div className='p-2 bg-[#151517] shadow-md shadow-black h-full w-full flex items-center justify-center rounded-xl'> <FaShopify className='text-4xl' /></div>
            <div className='p-2 bg-[#151517] shadow-md shadow-black h-full w-full flex items-center justify-center rounded-xl'>  <BiLogoMeta className='text-4xl' /></div>  
        </div>

        </Link>



        {/*lower */}
        <Link href="/Contact">
        <div className='card2 h-full hover:scale-105 duration-500'>
          <div className='w-full h-full justify-center items-center  rounded-xl flex'>
            <h1 className='sm:text-4xl text-[1.6rem] text-white font-bold'>let's work < span className='text-blue-500'>together</span> <BsFillArrowRightCircleFill className='ml-2 inline-block' /></h1>
          </div>
        </div>
       </Link>
             </div>
    
      </div>
    </section>
   
  )
}