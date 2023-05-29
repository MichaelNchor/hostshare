import React from 'react'
import Link from 'next/link'

export default function enquire() {
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
            Enquire
        </li>
    </ol>
    </nav>

    </>
  )
}
