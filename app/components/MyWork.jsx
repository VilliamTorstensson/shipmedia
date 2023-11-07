
import Image from 'next/image'

export default function MyWork() {
  return (
  <section className='flex flex-col justify-center items-center w-full h-full 2xl:max-w-[1340px] 2xl:px-10 mx-auto py-20'>
   
    <div className='w-full flex justify-center items-center'>
      <h1 className='px-4 text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 upper mb-20 text-center'>Latest Work And Projects.</h1>
    </div>
    <div className='absolute w-full bg-gradient-to-b from-transparent to-black/50 lg:flex hidden'></div>
    <div className=' grid grid-cols-2 sm:grid-cols-2 gap-5 md:grid-cols-3 '>
      
      <div className=' w-full h-full md:order-1 order-1'>
        <Image width={500} height={400} src="/coffee.jpg" />
      </div>
      <div className=' w-full h-full md:order-1 order-2'>
        <Image width={500} height={400} src="/NIKE.jpg" />
      </div>
      <div className=' w-full h-full md:order-1 order-4'>
        <Image width={500} height={400} src="/greenland.jpg" />
      </div>
      <div className=' w-full h-full md:order-1 order-3'>
        <Image width={500} height={400} src="/wildlife.jpg" />
      </div>
      <div className=' w-full h-full md:order-1 order-5'>
        <Image width={500} height={400} src="/vr.jpg" />
      </div>
      <div className=' w-full h-full md:order-1 order-6'>
        <Image width={500} height={400} src="/hamburger.jpg" />
      </div>
    
    </div>

  </section>
  )
}