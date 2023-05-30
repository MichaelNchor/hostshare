import React, {useState} from 'react'
import SearchBox from './SearchBox';
import Image from 'next/image';
import Link from 'next/link';
import {
  rooms,
  rooms_gray,
  pools,
  pools_gray,
} from '../assets/icons/index';

import {
    logo_black, 
    logo_white,
    logo_green,
    yt_video,
    logo,
} from '../assets/images/index';

export default function Navbar() {

  return (
    <>
  <nav className="max-md:hidden z-[36] relative lg:px-12 px-3 flex w-full flex-wrap items-center border-gray-150 border-b-[1px] justify-between py-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:py-4 bg-gray-50">
    <div className="flex w-full items-center justify-between px-3">
      <div>
        <a className="text-xl dark:text-black" href="#">
        Introducing Hostshare Rooms and 50+ features
        </a>
      </div>
      <div>
        <div className="flex flex-nowrap text-gray-700 items-center divide-x divide-gray-300" href="#">
        <Image src={yt_video} width="50" height="50" className="filter grayscale-0 hover:grayscale rounded-md mr-4" alt=""/>Explore
        <div className='ml-4'><span className='flex flex-nowrap ml-4'>Learn more</span></div>
        </div>
      </div>
    </div>
  </nav>
<div className='sticky top-0 z-[36] bg-white'>
<nav
  className="max-md:hidden flex w-full border-gray-150 border-b-[1px] lg:py-7 flex-wrap items-center lg:px-12 px-3 justify-between  lg:flex-wrap lg:justify-start py-4"
  data-te-navbar-ref>
  <div className="flex w-full flex-wrap items-center justify-between px-3">
    <Link
      href='/'
      className="block border-0 bg-transparent text-neutral-200 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
      type="button"
      data-te-collapse-init
      data-te-target="#navbarSupportedContent4"
      aria-controls="navbarSupportedContent4"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <Image src={logo} width="50" height="50" alt=""/>
    </Link>

    <div className="!visible mt-2 hidden basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto" id="navbarSupportedContent4" data-te-collapse-item>
      <Link href='/' className="pr-2 text-xl font-semibold text-white">
        <Image src={logo_green} width="150" height="150" alt=""/>
      </Link>
    </div>

    <SearchBox />

    <div className="relative flex flex-nowrap items-center space-x-1">
    <button className='block p-3 text-sm hover:bg-gray-100 rounded-full'>Discover</button>
    <button className='block p-3 hover:bg-gray-100 rounded-full'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    </button>    
      <div className="relative" data-te-dropdown-ref>
        <a
          className="border-[1px] hover:shadow-md p-2 rounded-full hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-te-dropdown-toggle-ref
          aria-expanded="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7">
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd" />
        </svg>
          <Image
            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
            className="rounded-full h-[34px]"
            alt=""
            height='34'
            width='34'
            loading="lazy" />
        </a>
        <ul
          className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton2"
          data-te-dropdown-menu-ref>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
              >Action</a>
          </li>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
              >Another action</a>
          </li>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
              href="#"
              data-te-dropdown-item-ref
              >Something else here</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <nav className='w-full sticky top-0'>
  <div className="items-center m-6 max-md:block shadow-md flex-nowrap hidden space-x-2 text-sm justify-center border-[1px] rounded-full p-2 hover:shadow-lg">
  <div className="flex justify-between">
        <button className='block rounded-full p-[6px]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </button>
        <div className='w-2/3 flex flex-col items-start mr-0'>
        <div className='font-semibold'>Anywhere</div>
        <div className='flex flex-row'>
        <div className='text-sm text-gray-500'>Anyweek</div>&#x2022;
        <div className='text-sm text-gray-500'>Add guests</div>
        </div>
        </div>
        <button className='block rounded-full p-[6px] border-[1px] border-gray-300'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
        </button>
    </div>
  </div>
  </nav>
  </div>
  
  </>
  )
}
