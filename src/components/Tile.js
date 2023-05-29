import React, {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {

} from '../assets/images/index'

export default function Tile() {
    const slides = [
    {
        url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
        url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
        url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

  return (
    <>
    <Link href='/'>
    <div className="rounded-lg lg:m-3 m-4">
    <div
    id="indicators-carousel"
    className="relative md:w-80 w-96"
    data-carousel="static"
    >
    <div className="relative overflow-hidden rounded-lg md:h-80 h-96">
        <div
        className="duration-700 ease-in-out"
        >
        <Image
            src={slides[currentIndex].url}
            className="absolute block h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
            alt="..."
            // width="100"
            // height="100"
        />
        </div>
    </div>
    <div className="absolute z-20 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
    {slides.map((slide, slideIndex) => (
        <button
        key={slideIndex}
        type="button"
        className="w-3 h-3 rounded-full bg-white/30 dark:bg-gray-100/30"
        aria-current="true"
        aria-label="Slide"
        onClick={()=> goToSlide(slideIndex)}
        />
    ))}
    </div>
    
    <button
    type='button'
    className='absolute top-0 right-0 z-20 p-4'
    >
    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
    </button>

    <button
        type="button"
        className="absolute top-0 left-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={prevSlide}
    >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-100/30 group-hover:bg-white/50 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
            />
        </svg>
        <span className="sr-only">Previous</span>
        </span>
    </button>
    <button
        type="button"
        className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next=""
        onClick={nextSlide}
    >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-100/30 group-hover:bg-white/50 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
            aria-hidden="true"
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
            />
        </svg>
        <span className="sr-only">Next</span>
        </span>
    </button>
    </div>
    <div className='flex pt-2 justify-between'>
    <div className='font-semibold'>Lac-Beaucoup, Canada</div>
    <div className='flex flex-nowrap font-semibold'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
    4.98
    </div>
    </div>
    <div className='text-gray-500 text-sm'>Viewed 1,236 times last week</div>
    <div className='text-gray-500 text-sm'>May 24 - 29</div>
    <div className='flex flex-nowrap mt-2'><div className='font-semibold'>$1,399 </div> night</div>
    </div>
    </Link>
    </>
    )
}
