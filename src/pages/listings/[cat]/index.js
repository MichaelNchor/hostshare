import React from 'react'
import Tile from '@/components/Tile'
import Link from 'next/link'

export default function listingsCat({listing}) {
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
    <h5 className='text-2xl text-center font-bold m-4 pt-2'>Listings</h5>
    <div className='flex flex-wrap m-6 mx-24 justify-center'>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
    </>    
  )
}

export async function getStaticPaths(){

    const {categories} = await import('/data/listings.json');
    const allpaths = categories.map(ev => {
        return {
            params: {
                cat: ev['type'].toString(),
            }            
        }
    })

    console.log(allpaths)

    return {
        paths : allpaths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const type = context?.params.cat;
    const {data} = await import('/data/listings.json');
    console.log(data)

    const listing = data.filter(ev => ev.type === type)

    console.log(context)
    return {
        props:{listing}
    }
}
