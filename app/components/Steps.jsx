"use client"
import { BiSolidDownArrow } from 'react-icons/bi'
import { useState } from 'react'
import Link from 'next/link'
export default function Steps () {

  const [isopen, setIsopen] = useState(false)
  const [isopen2, setIsopen2] = useState(false)
  const [isopen3, setIsopen3] = useState(false)
  const [isopen4, setIsopen4] = useState(false)


  const handleClick = () => {
    setIsopen(!isopen)
  }
  const handleClick2 = () => {
    setIsopen2(!isopen2)
  }
  const handleClick3 = () => {
    setIsopen3(!isopen3)
  }
  const handleClick4 = () => {
    setIsopen4(!isopen4)
  }
  return (
    <section className="py-10 sm:py-20 w-full h-full bg-gradient-to-b from-black via-[#151517] to-black">
     
      <div className="max-w-[1340px] mx-auto px-4 w-full sm:px-10 flex flex-col items-center h-full">
        <div className="gap-6 flex flex-col items-center justify-center w-full">
          <h1 className="text-center md:text-6xl text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400
           font-extrabold py-2">Din hemsida i 4 steg</h1>    
          <p className="text-center text-gray-200 text-lg sm:text-xl">Min process säkerställer att vi skapar en webbplats <br className=' hidden sm:flex'/>skräddarsydd efter ditt företags behov</p>    
          <BiSolidDownArrow  className='my-4 text-6xl text-gray-200 '/>  
        </div>

        {/**steps start */}
          
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-5 mt-10'>
          
          <div onClick={handleClick} className='h-fit bg-[#090909] rounded-sm shadow-lg shadow-black w-full p-6 flex gap-6 flex-col justify-between'>
            <div className='flex justify-between w-full items-center'>
             <h1 className='p-2 bg-[#090909] border border-[#323232] rounded-full h-[45px] w-[45px] flex justify-center items-center'>01</h1>
              <h1 className='p-2 bg-[#090909] border border-[#323232]'>2 timmar</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='uppercase'>Matchar vi?</p>
              <h1 className='uppercase  text-2xl font-bold'>Planerings möte</h1>
            </div>
            {isopen ? (
              <p className='text-gray-200'>
              Innan vi börjar fastställer vi om och på vilket sätt jag kan hjälpa dig. Vilka är dina krav för din nya webbplats? Varför behöver du en ny webbplats? Vilka mål har du, och vilka problem kan vi lösa med en ny webbplats?</p>
              
            ) : ( 
              <p className='text-gray-300 underline cursor-pointer hover:text-blue-700'>Läs mer</p>
            )}

          </div>

          {/**2 */}
          <div onClick={handleClick2} className='h-fit bg-[#090909] rounded-sm shadow-lg shadow-black w-full p-6 flex gap-6 flex-col justify-between'>
            <div className='flex justify-between w-full items-center'>
             <h1 className='p-2 bg-[#090909] border border-[#323232] rounded-full h-[45px] w-[45px] flex justify-center items-center'>02</h1>
              <h1 className='p-2 bg-[#090909] border border-[#323232]'>1-7 dagar</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='uppercase'>Prototyp magi</p>
              <h1 className='uppercase text-2xl font-bold'>webbdesign</h1>
            </div>
            {isopen2 ? (
              <p className='text-gray-200'>Nu kommer magin. Baserat på vårt möte skapar jag en exklusiv design perfekt anpassad till ditt varumärke. En webbdesign som särskiljer dig från din konkurrens, passar din målgrupp idealiskt och erbjuder en utmärkt användarupplevelse.</p>
              
            ) : ( 
              <p className='text-gray-300 underline cursor-pointer hover:text-blue-700'>Läs mer</p>
            )}

          </div>
           
            {/**3 */}
            <div onClick={handleClick3} className='h-fit bg-[#090909] rounded-sm shadow-lg shadow-black w-full p-6 flex gap-6 flex-col justify-between'>
            <div className='flex justify-between w-full items-center'>
             <h1 className='p-2 bg-[#090909] border border-[#323232] rounded-full h-[45px] w-[45px] flex justify-center items-center'>03</h1>
              <h1 className='p-2 bg-[#090909] border border-[#323232]'>1-7 dagar</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='uppercase'>mer magi</p>
              <h1 className='uppercase text-2xl font-bold'>webbutveckling</h1>
             
            </div>
            {isopen3 ? (
              <p className='text-gray-200'>I detta steg ger vi liv åt din nya exklusiva design. Du kommer att få en skräddarsydd webbplats byggd med React och Next.js. Animationer kommer att läggas till för att skapa extra glädje till användaren av din webbplats och särskilja dig från den tråkiga konkurrensen.</p>
              
            ) : ( 
              <p className='text-gray-300 underline cursor-pointer hover:text-blue-700'>Läs mer</p>
            )}
          </div>
          {/*4 */}
          <div onClick={handleClick4} className='h-fit bg-[#151517] rounded-xl rounded-sm shadow-lg shadow-black w-full p-6 flex gap-6 flex-col justify-between'>
            <div className='flex justify-between w-full items-center'>
             <h1 className='p-2 bg-[#151517] border border-[#323232] rounded-full h-[45px] w-[45px] flex justify-center items-center'>04</h1>
              <h1 className='p-2 bg-[#090909] border border-[#323232]'>2 timmar</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='uppercase'>Redo att börja</p>
              <h1 className='uppercase text-2xl font-bold'>Webbplatsanvändning</h1>
          
            </div>
            {isopen4 ? (
              <p className='text-gray-200'>Jag kommer att visa dig hur du snabbt och enkelt gör ändringar på din nya webbplats. Dessutom kommer du att få personliga videolektioner som du kan komma åt när som helst. Om du stöter på problem längs vägen är jag här för att hjälpa dig.</p>
              
            ) : ( 
              <p className='text-gray-300 underline cursor-pointer hover:text-blue-700'>Läs mer</p>
            )}
          </div>
        </div>
   
      
      </div>
    </section>
  )
}