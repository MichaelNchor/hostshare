import React, {useRef, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {
  home,
  home_gray,
  list,
  list_gray,
  contact,
  contact_gray,
} from '../assets/icons/index';

export default function SubNav({categories}) {
  
  // const Pages = 
  // [{_id: 1 , name: 'Home', icon: home_gray, icon_hover: home, href: '/'},
  //  {_id: 2 , name: 'Listings', icon: list_gray, icon_hover: list, href: '/listings'},
  //  {_id: 3 , name: 'Enquire', icon: contact_gray, icon_hover: contact, href: '/enquire'},
  // ];

  // const Pages = [
  // {
  //   "id": "1178",
  //   "type": "home",
  //   "title": "Home",
  // },
  // {
  //   "id": "8678",
  //   "type": "rooms",
  //   "title": "Rooms",
  // },
  // {
  //   "id": "677",
  //   "type": "amazing-pools",
  //   "title": "Amazing pools"
  // },
  // {
  //   "id": "5348",
  //   "type": "cabins",
  //   "title": "Cabins"
  // },
  // {
  //   "id": "4104",
  //   "type": "countryside",
  //   "title": "Countryside"
  // },
  // {
  //   "id": "7765",
  //   "type": "skiing",
  //   "title": "Skiing"
  // },
  // {
  //   "id": "8144",
  //   "type": "lake",
  //   "title": "Lake"
  // },
  // {
  //   "id": "789",
  //   "type": "beachfront",
  //   "title": "Beachfront"
  // },
  // {
  //   "id": "8535",
  //   "type": "iconic-cities",
  //   "title": "Iconic cities"
  // },
  // {
  //   "id": "8658",
  //   "type": "play",
  //   "title": "Play"
  // },
  // {
  //   "id": "8536",
  //   "type": "amazing-views",
  //   "title": "Amazing views"
  // },
  // {
  //   "id": "8101",
  //   "type": "vineyards",
  //   "title": "Vineyards"
  // },
  // {
  //   "id": "8522",
  //   "type": "lakefront",
  //   "title": "Lakefront"
  // },
  // {
  //   "id": "8661",
  //   "type": "trending",
  //   "title": "Trending"
  // },
  // {
  //   "id": "8102",
  //   "type": "national-parks",
  //   "title": "National parks"
  // },
  // {
  //   "id": "8662",
  //   "type": "new",
  //   "title": "New"
  // },
  // {
  //   "id": "8175",
  //   "type": "farms",
  //   "title": "Farms"
  // },
  // {
  //   "id": "8186",
  //   "type": "tiny-homes",
  //   "title": "Tiny homes"
  // },
  // {
  //   "id": "634",
  //   "type": "camping",
  //   "title": "Camping"
  // },
  // {
  //   "id": "5731",
  //   "type": "chefs-kitchens",
  //   "title": "Chef's kitchens"
  // },
  // {
  //   "id": "5366",
  //   "type": "skiinout",
  //   "title": "Ski-in/out"
  // },
  // {
  //   "id": "8526",
  //   "type": "surfing",
  //   "title": "Surfing"
  // },
  // {
  //   "id": "8525",
  //   "type": "golfing",
  //   "title": "Golfing"
  // },
  // {
  //   "id": "8538",
  //   "type": "bed-breakfasts",
  //   "title": "Bed & breakfasts"
  // },
  // {
  //   "id": "8528",
  //   "type": "design",
  //   "title": "Design"
  // },
  // {
  //   "id": "8099",
  //   "type": "desert",
  //   "title": "Desert"
  // },
  // {
  //   "id": "8521",
  //   "type": "grand-pianos",
  //   "title": "Grand pianos"
  // },
  // {
  //   "id": "8148",
  //   "type": "aframes",
  //   "title": "A-frames"
  // },
  // {
  //   "id": "8226",
  //   "type": "offthegrid",
  //   "title": "Off-the-grid"
  // },
  // {
  //   "id": "8159",
  //   "type": "barns",
  //   "title": "Barns"
  // },
  // {
  //   "id": "8188",
  //   "type": "treehouses",
  //   "title": "Treehouses"
  // },
  // {
  //   "id": "8657",
  //   "type": "top-of-the-world",
  //   "title": "Top of the world"
  // },
  // {
  //   "id": "8192",
  //   "type": "yurts",
  //   "title": "Yurts"
  // },
  // {
  //   "id": "8115",
  //   "type": "mansions",
  //   "title": "Mansions"
  // },
  // {
  //   "id": "8157",
  //   "type": "containers",
  //   "title": "Containers"
  // },
  // {
  //   "id": "1073",
  //   "type": "boats",
  //   "title": "Boats"
  // },
  // {
  //   "id": "8253",
  //   "type": "luxe",
  //   "title": "Luxe"
  // },
  // {
  //   "id": "8173",
  //   "type": "domes",
  //   "title": "Domes"
  // },
  // {
  //   "id": "8543",
  //   "type": "creative-spaces",
  //   "title": "Creative spaces"
  // },
  // {
  //   "id": "8174",
  //   "type": "earth-homes",
  //   "title": "Earth homes"
  // },
  // {
  //   "id": "8176",
  //   "type": "houseboats",
  //   "title": "Houseboats"
  // },
  // {
  //   "id": "8225",
  //   "type": "omg",
  //   "title": "OMG!"
  // },
  // {
  //   "id": "5708",
  //   "type": "adapted",
  //   "title": "Adapted"
  // },
  // {
  //   "id": "675",
  //   "type": "islands",
  //   "title": "Islands"
  // },
  // {
  //   "id": "8047",
  //   "type": "castles",
  //   "title": "Castles"
  // },
  // {
  //   "id": "8524",
  //   "type": "historical-homes",
  //   "title": "Historical homes"
  // },
  // {
  //   "id": "7769",
  //   "type": "beach",
  //   "title": "Beach"
  // }]

 const Pages = categories;

 const btn_left_el = useRef(null);
 const btn_right_el = useRef(null);
 const content_el = useRef(null);

  const [ishovered, setHovered] = useState({});

  const isHovered = (currpage) => {
    setHovered(currpage);
  }

  const isOut = () => {
    setHovered({});
  }

  const scroll = () => {
      const   btn_left = document.getElementById('btn_left'),
              btn_right = document.getElementById('btn_right'),
              content = document.getElementById('con');
      const content_scroll_width = content.scrollWidth;
      let content_scoll_left = content.scrollLeft;
      btn_right.addEventListener('click', () => {
          content_scoll_left += 100;
          if (content_scoll_left >= content_scroll_width) { content_scoll_left = content_scroll_width; }
          content.scrollLeft = content_scoll_left;
      });
      btn_left.addEventListener('click', () => {
          content_scoll_left -= 100;
          if (content_scoll_left <= 0) {
              content_scoll_left = 0;
          }
          content.scrollLeft = content_scoll_left;
      });
  }

  const styles = [
    {text: 'text-[10pt] my-2 text-center w-24 text-center m-2', bar:'bg-black h-[2px]'},
    {text: 'text-[10pt] my-2 text-center text-gray-400 w-24 text-center m-2', bar: 'bg-gray-400 h-[2px]'},
  ]

  return (
    <>
    <div className='flex px-12'>
    <div className='w-14 flex justify-center items-center'>
    <button
        type="button"
        className="left-0 z-[30] pr-1 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={() => scroll('left')}
        ref={btn_left_el}
        id="btn_left"
    >
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-100/30 group-hover:bg-white/50 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none  border-[1px] border-gray-600">
        <svg
            aria-hidden="true"
            className="w-4 h-4 text-gray-900 sm:w-5 sm:h-5 dark:text-white"
            fill="none"
            stroke="#000000"
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
    </div>
    <div id='con'  className='child z-[29] top-10 px-12 bg-white no-scrollbar sticky overflow-x-auto lg:top-[6.95rem] flex lg:px-12 justify-center items-center'>
    {Pages.map(function(p){
    return <Link  key={p["id"]} href={`/listings/${p["type"]}`} className="flex items-center justify-center"><div onMouseOut={()=>isOut(p)} onMouseOver={()=>isHovered(p)} className='flex flex-col my-7 mx-6 cursor-pointer'>
    {/* <Image src={p["title"] == ishovered["title"]?home:home_gray} width="40" height="40" alt={p["title"]} className='mx-auto grayscale' /> */}
    <span className={p["title"] == ishovered["title"]?styles[0].text:styles[1].text}>{p["title"]}</span>
    <div className={p["title"] == ishovered["title"]?styles[0].bar:styles[1].bar}></div>
    </div>
    </Link>
    })}
  </div>
  <div className='w-14 flex justify-center items-center'>
  <button
        type="button"
        className="left-0 z-[30] pl-1 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev=""
        onClick={() => scroll('right')}
        ref={btn_right_el}
        id="btn_right"
    >
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-100/30 group-hover:bg-white/50 dark:group-hover:bg-gray-200/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none  border-[1px] border-gray-600">
        <svg
            aria-hidden="true"
            className="w-4 h-4 text-gray-900 sm:w-5 sm:h-5 dark:text-white"
            fill="none"
            stroke="#000000"
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
  </div>
    </>
  )
}