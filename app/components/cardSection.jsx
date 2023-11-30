import Image from 'next/image'
import Link from 'next/link'
export default function CardSection() {
  return (
     <section className=" px-4 sm:px-10 py-20  w-full h-full ">
       {/*grid control*/}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-[1340px] mx-auto h-full">

          {/*first container */}
          <Link href="/Services">
          <div className="cursor-pointer w-full h-full   border-[1px] border-gray-800 shadow-xl rounded-2xl flex flex-col justify-center gap-0 hover:border-gray-500 duration-500 ease-in-out">
            <div className='flex justify-center items-center h-full w-full p-1'>
             <Image src="/work.svg" width={700} height={200} alt="svg" />
            </div>
            <div className='p-5 flex flex-col justify-start h-full'>
            <h1 className='mb-1 text-xl font-bold'>Mina Tjänster</h1>
            <p> Webbutveckling, Jag skapar användarvänliga och visuellt tilltalande hemsidor. <span className='hover:underline text-blue-500'>Läs mer</span></p>
            </div>
           
          </div>
          </Link>
          {/*second container */}

          <Link href="/Pricing">
            <div className="cursor-pointer w-full h-content border border-gray-800 shadow-xl rounded-2xl flex flex-col justify-center gap-0 hover:border-gray-500 duration-500 ease-in-out">
            <div className='flex justify-center items-center h-full w-full p-1'>
             <Image src="/pricing.svg" width={700} height={200} alt="svg" />
            </div>
            <div className='p-5 flex flex-col justify-start h-full'>
            <h1 className='text-xl font-bold mb-1'>Priser</h1>
            <p>Mina paket är anpassade för alla typer av företag oavsätt vart du befinner dig i ditt företagende.
               <span className='hover:underline text-blue-500'> Läs mer</span>
            </p>
            </div>
          </div>
          </Link>


          {/*third container */}
          <Link href='/Services#GoogleSeo'>
          <div className="cursor-pointer w-full h-full   border-[1px] border-gray-800 shadow-xl rounded-2xl flex flex-col justify-center gap-0 hover:border-gray-500 duration-500 ease-in-out">
            <div className='flex justify-center items-center h-full w-full p-1'>
             <Image src="/google.svg" width={700} height={200} alt="svg" />
            </div>
            <div className='p-5 flex flex-col justify-start h-full'>
            <h1 className='font-bold text-xl mb-1'>Google SEO</h1>
            <p>Jag ser till att din hemsida är optimerad för googles sökmotorer. <span className='hover:underline text-blue-500'>Läs mer </span></p>
            </div>
          </div>
        </Link>

        </div>
          
     </section>
   )
}