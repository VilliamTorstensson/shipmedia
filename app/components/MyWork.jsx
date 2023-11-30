"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Portfolio () {
 
  const card = [
    {
      id: 1,
      url: "/work1.jpg",
    },
    {
      id: 2,
      url: "/work2.jpg",
    },
    {
      id: 3,
      url: "/work3.jpg",
    },
    {
      id: 4,
      url: "/work4.jpg",
    },
    {
      id: 5,
      url: "/work5.jpg",
    },
    {
      id: 6,
      url: "/work6.jpg",
    },
    {
      id: 7,
      url: "/work7.jpg",
    },
    {
      id: 8,
      url: "/work1.jpg",
    },
    {
      id: 9,
      url: "/work2.jpg",
    },
    {
      id: 10,
      url: "/work3.jpg",
    },
    {
      id: 11,
      url: "/work4.jpg",
    },
    {
      id: 12,
      url: "/work5.jpg",
    },
  ];
const container = useRef(null);
const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start end', 'end start'],
})

const y = useTransform(scrollYProgress, [0, 1], [1, 1000])

  return (
    <main id="work" className="w-full h-full my-auto flex items-center justify-center overflow-y-hidden relative bg-[#2d2d2f] ">
      
      <div ref={container} className=' relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 z-0'>
        {card.map((item) => {
          return (
            <div  y={0} key={item.id} className="xl:top-[-45%] lg:top-[-75%] md:top-[-55%] sm:top-[-80%] xs:top-[-40%] top-[-100%] relative min-w-[50px] sm:min-w-[50px] md:min-w-[50] lg:min-w-[50px]  2xl:min-w-[50px]  flex gap-4 w-full">
              <motion.div style={{y}} >
              <Image
               
              y={y}
                src={item.url}
                alt="work"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-md"
              />
              </motion.div>
            
            </div>
          );
        })}
      </div>
      
    </main>
  )
}