'use client'
import { useState } from "react"
import Image from "next/image"
import PostCover from "../../public/postcover.png"

export default function Posts() {
  const [filterValue, setFilterValue] = useState('all')
  return <div className="container mx-auto items-center w-10/12 py-12">
    <div className="px-24">
      {/* section title */}
      <div>
        <h2 className="text-3xl font-medium text-darkgrey">
          Past events
        </h2>
      </div>
      {/* posts filter */}
      <div className="flex py-4 columns-2 justify-between">
        <div className="flex">
          {
            filterValue === 'all'
              ? <button className="mr-4 px-4 py-1 bg-middlegrey text-whitegrey text-base border border-black rounded-2xl">
                All</button>
              : <button className="mr-4 px-4 py-1 bg-lightpurple text-middlegrey text-base border border-black rounded-2xl">
                All</button>
          }
          <button className="mr-4 px-4 py-1 bg-bluepurple text-middlegrey text-base border border-black rounded-2xl ">
            Video</button>
          <button className="mr-4 px-4 py-1 bg-lightpink text-middlegrey text-base border border-black rounded-2xl">
            Podcast</button>
          <button className="mr-4 px-4 py-1 bg-lightpurple text-middlegrey text-base border border-black rounded-2xl">
            Article</button>
        </div>
        <div className="text-base/8 font-semibold underline text-darkgrey">
          <a href="#">View More</a></div>
      </div>
      {/* posts listing */}
      <div className="flex py-4 justify-between columns-4">
        <div className="w-56">
          <Image src={PostCover} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-lightgrey">
            Technolgy AI
          </h6>
          <h6 className="text-lg text-darkgrey font-medium">
            Enabling technology to empower women
          </h6>
          <h6 className="py-2 text-base text-lightgrey font-light">
            Sep 11th 2023
          </h6>
        </div>
        <div className="w-56">
          <Image src={PostCover} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-lightgrey">
            Technolgy AI
          </h6>
          <h6 className="text-lg text-darkgrey font-medium">
            Enabling technology to empower women
          </h6>
          <h6 className="py-2 text-base text-lightgrey font-light">
            Sep 11th 2023
          </h6>
        </div>
        <div className="w-56">
          <Image src={PostCover} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-lightgrey">
            Technolgy AI
          </h6>
          <h6 className="text-lg text-darkgrey font-medium">
            Enabling technology to empower women
          </h6>
          <h6 className="py-2 text-base text-lightgrey font-light">
            Sep 11th 2023
          </h6>
        </div>
        <div className="w-56">
          <Image src={PostCover} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-lightgrey">
            Technolgy AI
          </h6>
          <h6 className="text-lg text-darkgrey font-medium">
            Enabling technology to empower women
          </h6>
          <h6 className="py-2 text-base text-lightgrey font-light">
            Sep 11th 2023
          </h6>
        </div>
      </div>
    </div>
  </div>
}