import Image from "next/image"
export default function ServiceHero () {
  return (
    <section className="w-full h-full mt-[60px] py-20 bg-gradient-to-b from-black to-[#151517] ">
     <div className="w-full flex flex-col items-center mb-20 justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold xl:text-5xl  capitalize text-center px-4 sm:px-10 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 pb-2">I create websites using react and next js.</h1>
     </div>
     
      <div className="grid grid-cols-3  gap-5 max-w-[1340px] px-4 sm:px-10 mx-auto">
        <div className="scale-110 md:scale-100 mdz-10 -rotate-12 lg:rotate-0">
          <Image src="/fullnike.svg" width={400} height={400} alt="svg" />
        </div>
        <div className="z-20">
          <Image className="scale-150 md:scale-110" src="/steakhouse2.svg" width={400} height={400} alt="svg" />
        </div>
        <div className="scale-110 md:scale-100 rotate-12 z-10 lg:rotate-0">
          <Image className="" src="/fullcoffee.svg" width={400} height={400} alt="svg" />
        </div>
      </div>
    </section>
  )
}