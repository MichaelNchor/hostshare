import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/Navbar'
import SubNav from '@/components/SubNav'
import Toggle from '../components/Toggle'
import Tile from '@/components/Tile'

const inter = Inter({ subsets: ['latin'] })

export default function Home({categories}) {
  return (
    <>
    <SubNav categories={categories} />
    <div className='lg:mx-auto mx-8 h-16 border-[1px] rounded-lg lg:w-[40rem] flex flex-row justify-between items-center'>
      <div className='flex divide-x divide-gray-300'>
      <div className='px-4 text-sm font-semibold'>Display total price</div>
      <div className='px-4 text-sm'>Includes all fees, before taxes</div>
      </div>
      <div className='mx-4'>
      <Toggle />
      </div>
    </div>
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


export async function getServerSideProps() {
  const {categories} = await import('/data/listings.json');
  console.log(categories)

  return {
    props: {
      categories: categories, 
    }
  }

}
