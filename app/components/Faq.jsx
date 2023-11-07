"use client"

import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'What are the advantages of using React?',
      answer: 'React allows for reusable UI components, improved performance, and easier debugging.',
    },
    {
      id: 3,
      question: 'How fast can i get my website?',
      answer: 'it depends on the complexity of the website. but usually 1-3 weeks ',
    },
    {
      id: 4,
      question: 'How will a website increase my sales?',
      answer: 'a website will increase your sales by making your business more visible to potential customers and making it easier for customers to find and contact you. Or buy your products/services directly online thrugh your e-commerce website.',
    },
  ];

  const handleQuestionClick = (id) => {
    if (selectedQuestion === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  return (
    
    <div className='w-full
      justify-start flex flex-col items-center py-20 sm:px-10 px-4 max-w-[1340px] mx-auto'>
      <div className=' gap-5 w-full justify-start flex flex-col'>
      <h1 className='w-full items-start text-6xl font-black bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500'>FAQs</h1>
      <p className='mb-10'>Frequently asked questions. <br />Here are some common questions about my services.</p>
      </div>
      {questions.map((q) => (
        
        <div className='flex-col flex w-full ' key={q.id}>
            <div className={`cursor-pointer border-b textgray-200 border-[#323232] rounded-sm w-full px-4 py-4 ${q.id === 1 ? 'border-t' : ''}`}>
            <div className='w-full flex justify-between' onClick={() => handleQuestionClick(q.id)}>
            <h3 className='font-bold' onClick={() => handleQuestionClick(q.id)}>{q.question} </h3>
            
          <IoIosArrowDown className='inline-block' />
            </div>
           
          {selectedQuestion === q.id && <p className='py-2'>{q.answer}</p>}
        
          </div>
          
        </div>
      
      ))}
    </div>
  );
};

export default Faq;
