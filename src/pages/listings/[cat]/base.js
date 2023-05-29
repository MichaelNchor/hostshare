import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function base() {
  return (
    <>
    <nav className="flex mt-12 mb-6 min-lg:mx-28 mx-12 rounded-md bg-neutral-50 px-5 py-3 ">
    <ol className="list-reset flex">
        <li>
        <Link href='/' legacyBehavior>
        <a className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
            Home
        </a>
        </Link>
        </li>
        <li>
        <span className="mx-2 text-neutral-500 dark:text-neutral-300">/</span>
        </li>
        <li className="text-[#329a9a] dark:text-[#329a9a]">
            Listings
        </li>
    </ol>
    </nav>
    <div className='flex m-12 mx-28 justify-between '>
    <div className='flex text-2xl font-semibold'>
    Casa Nicole
    </div>
    <div className='flex space-x-4'>
    <button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
    </button>
    <button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
    </button>
    </div>
    </div>
    <div className='flex m-12 mx-28 justify-start text-md space-x-2'>
    <button className='inline-flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
    4.95
    </button>
    <div>
    22 reviews</div>&#x2022;
    <div>
    Málaga, Spain
    </div> 
    </div>
    

    <div className='flex m-12 mx-28 justify-start flex-wrap'>
    <div className='flex h-full max-md:w-full w-1/2'>
    <img src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp" className="rounded-md shadow-lg p-1" />    
    </div>
    <div className='flex h-auto max-md:w-full w-1/2 flex-wrap'>
    <img src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp" className="p-1 w-1/2 min-lg:w-full rounded-md shadow-lg" />
    <img src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp" className="p-1 w-1/2 min-lg:w-full rounded-md shadow-lg" />
    <img src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp" className="p-1 w-1/2 min-lg:w-full rounded-md shadow-lg" />    
    <img src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp" className="p-1 w-1/2 min-lg:w-full rounded-md shadow-lg" />
    </div>
    </div> 

    <div inline-datepicker="true" data-date="02/25/2022"></div>
    </>
  )
}
