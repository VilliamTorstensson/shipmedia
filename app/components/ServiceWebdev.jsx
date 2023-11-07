import Link from 'next/link'

export default function ServiceWebdev() {
  return (
    <section id="websection" className="w-full h-full py-20 bg-gradient-to-b from-black  via-[#151517]/50 to-black border-t border-[#2c2c2c]">
      <div className="px-4 sm:px-10 mx-auto max-w-[1340px] grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className=" flex flex-col">
        
            <h1 className="font-bold  text-3xl z-10">
              Webdevelopment.
            </h1>
            <p className="z-10 mt-4">As a web developer with a primary focus on React and Next.js, I bring a wealth of experience and expertise to every project I undertake. These cutting-edge technologies allow me to craft web applications that are not only visually appealing but also highly performant and user-friendly.
            </p>
            <p className="z-10 mt-2 ">
            My commitment to building exceptional digital experiences goes beyond just the technology. I understand that a successful web application is a fusion of design, functionality, and user experience. I take pride in my ability to balance these elements to create websites and web applications that leave a lasting impression on users and clients alike.
            </p>
            <div className='mt-10 flex gap-5 items-center'>
            <Link className='btn5 w-min mt-4' href="/Contact">Contact</Link>
            <Link className='btn3 px-6 py-3 shadow-md shadow-black w-min mt-4' href="/Pricing#pricecardsection">Pricing</Link>
            </div>
            
          </div>
         <div className='flex flex-col gap-4 '>
          <div id="GoogleSeo" className='flex gap-4'>
          <h1 className='text-3xl font-bold'>Google SEO</h1>
         
          </div>
            <p>I will boost your Google SEO through web development by optimizing site speed, ensuring mobile-friendliness, implementing structured data, creating SEO-friendly URLs, optimizing images, and enhancing website security. These improvements can lead to better search rankings and user experience.
            </p>
            <div className='flex flex-col gap-4'>
              <h1 className='text-3xl font-bold'>Figma Ad-creatives</h1>
              <p>Figma ad creatives are a game-changer for boosting online sales. They enable you to create eye-catching, consistent, and data-driven advertisements that engage your audience and adapt seamlessly to different devices. With Figma, you can refine your ad strategy for better results, ultimately driving more sales.</p>
            </div>
           
     
     
         </div>
          
      </div>
    </section>
  )
}