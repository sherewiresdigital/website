'use client'
import React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Logo from "../../public/SheRewires_Digital_Logo_Color.png"
import Subscribe from "./subscribe"

enum Page {
  Home = "Home",
  Archive = "Archive",
  About = "About"
}

export default function Header() {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState<null | Page>(null)
  const [showSub, setShowSub] = useState(false)
  const handleShowSub = () => setShowSub(!showSub)
  useEffect(() => {
    switch (pathname) {
      case "/home": setCurrentPage(Page.Home); break;
      case "/archive": setCurrentPage(Page.Archive); break;
      case "/about": setCurrentPage(Page.About); break;
      default: setCurrentPage(Page.Home); break;
    }
  }, [pathname])
  return <div className="container py-8">
    <div className="flex mx-auto columns-3 items-center justify-between w-10/12">
      <div>
        <Image src={Logo} alt="logo" className="w-32" priority />
      </div>
      <ul className="flex columns-3 gap-x-12 text-base">
        {
          [
            ['Home', '/home'],
            ['Archive', '/archive'],
            ['About', '/about']
          ].map(([title, url]) => 
            <li className="w-20" key={title}>
              {
                currentPage === title
                ? <a href={`http://localhost:3000${url}`} className="font-medium border-b-2 border-indigo-600">
                  <span className="text-darkgrey">{title}</span></a>
                : <a href={`http://localhost:3000${url}`} className="hover:font-medium">
                  <span className="text-middlegrey hover:text-middlegrey">{title}</span></a>
              }
            </li>
          )
        }
      </ul>
      <div>
        <button className="px-4 py-2 rounded-3xl border-2 border-slate-500" onClick={handleShowSub}>
          <span className="text-base font-semibold text-darkgrey">Subscribe</span>
        </button>
      </div>
    </div>
    {
      showSub && <Subscribe showSub={showSub} handleShowSub={handleShowSub} />
    }
  </div>
}