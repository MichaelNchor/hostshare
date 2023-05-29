import React, {useState, Fragment} from 'react'
import { Popover, Transition } from '@headlessui/react'
import Datepicker from "react-tailwindcss-datepicker";
import NumberPicker from "react-widgets/NumberPicker";
import "react-widgets/styles.css";

export default function SearchBox() {

    const [value, setValue] = useState({
      startDate: new Date(),
      endDate: new Date().setMonth(11)
  });

  const handleValueChange = (newValue) => {
      console.log("newValue:", newValue);
      setValue(newValue);
  }
    //z-index:2 , height: incr, dialogue shows

  return (
    <>
    <div className="relative flex items-center divide-x divide-gray-300 space-x-2 text-sm justify-center border-[1px] rounded-full p-2 shadow-sm hover:shadow-md">
    <Popover className='relative'>
    {({open}) => (
    <>
    <Popover.Button className={`${open ? '' : 'text-opacity-90'} block p-2`}>Anywhere</Popover.Button>
    <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
    {/* <Popover.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
    <Popover.Panel className="absolute right-[-10.5rem] shadow-lg border-[1px] border-gray-50 bg-white rounded-xl flex z-[37] w-96 h-96 justify-center items-center opacity-100">
        <div className="flex w-full flex-wrap h-96 justify-center items-stretch">
        <div className='bg-gray-100 w-1/3 border-[1px] border-gray-200 rounded-lg m-2 flex justify-center items-center p-2 hover:bg-gray-300'>I'm flexible</div>
        <div className='bg-gray-100 w-1/3 border-[1px] border-gray-200 rounded-lg m-2 flex justify-center items-center p-2 hover:bg-gray-300'>Europe</div>
        <div className='bg-gray-100 W-1/3 border-[1px] border-gray-200 rounded-lg m-2 flex justify-center items-center p-2 hover:bg-gray-300'>United Kingdom</div>
        <div className='bg-gray-100 w-1/3 border-[1px] border-gray-200 rounded-lg m-2 flex justify-center items-center p-2 hover:bg-gray-300'>United States</div>
        <div className='bg-gray-100 w-1/3 border-[1px] border-gray-200 rounded-lg m-2 flex justify-center items-center p-2 hover:bg-gray-300'>Canada</div>
        <div className='bg-gray-100 w-1/3 border-[1px] border-gray-200 rounded-lg m-2 flex justify-center items-center p-2 hover:bg-gray-300'>Middle East</div>
        </div>
      </Popover.Panel>
      </Transition>
      </>
      )}
    </Popover>
    <Popover className='relative'>
    {({open}) => (
    <>
    <Popover.Button className={`${open ? '' : 'text-opacity-90'} block p-2`}>Any Week</Popover.Button>
    <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
    {/* <Popover.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
    <Popover.Panel className="absolute right-[-8.5rem] shadow-lg border-[1px] border-gray-50 bg-white rounded-xl flex z-[37] w-80 h-18 justify-center mx-auto items-center opacity-100">

    <Datepicker popoverDirection="down"  primaryColor={"teal"} value={value} onChange={handleValueChange} />

      </Popover.Panel>
      </Transition>
      </>
      )}
    </Popover>
    <Popover className='relative'>
    {({open}) => (
    <>
    <Popover.Button className={`${open ? '' : 'text-opacity-90'} block p-2`}>Add Guests</Popover.Button>
    <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
    {/* <Popover.Overlay className="fixed inset-0 bg-black opacity-30" /> */}
    <Popover.Panel className="absolute right-[-10rem] shadow-lg border-[1px] border-gray-50 bg-white rounded-xl flex z-[37] w-96 justify-center items-center opacity-100">
        <div className="w-full">
        <div className='m-2'>
        <span className='text-sm text-gray-600'>Adults</span>
        <div><NumberPicker defaultValue={1} /></div>
        </div>

        <div className='m-2'>
        <span className='text-sm text-gray-600'>Children</span>
        <div><NumberPicker defaultValue={1} /></div>
        </div>

        <div className='m-2'>
        <span className='text-sm text-gray-600'>Infants</span>
        <div><NumberPicker defaultValue={1} /></div>
        </div>

        </div>
    </Popover.Panel>
      </Transition>
      </>
      )}
    </Popover>
    <button className='block bg-[#329a9a] rounded-full p-[6px]'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-200">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
    </button>
    </div>
    </>
  )
}
