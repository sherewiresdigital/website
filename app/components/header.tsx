'use client'
import React from "react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Logo from "../../public/SheRewires_Digital_Logo_Color.png"
import Subscribe from "./subscribe"

enum Page {
  Home = "home",
  Archive = "archive",
  About = "about"
}

export default function Header() {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState<null | Page>(null)
  const [showSub, setShowSub] = useState(false)
  const handleShowSub = () => setShowSub(!showSub)
  useEffect(() => {
    switch (pathname) {
      // case "/": setCurrentPage(Page.Home); break;
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
        <li className="w-20">
          {
            currentPage === Page.Home
              ? <a href="http://localhost:3000/home" className="font-medium border-b-2 border-indigo-600">
                <span className="text-darkgrey">Home</span></a>
              : <a href="http://localhost:3000/home" className="hover:font-medium">
                <span className="text-middlegrey hover:text-middlegrey">Home</span></a>
          }
        </li>
        <li className="w-20 h-6">
          {
            currentPage === Page.Archive
              ? <a href="http://localhost:3000/archive" className="font-medium border-b-2 border-indigo-600">
                <span className="text-darkgrey">Archive</span></a>
              : <a href="http://localhost:3000/archive" className="hover:font-medium">
                <span className="text-middlegrey hover:text-middlegrey">Archive</span></a>
          }
        </li>
        <li className="w-20 h-6">
          {
            currentPage === Page.About
              ? <a href="http://localhost:3000/about" className="font-medium border-b-2 border-indigo-600">
                <span className="text-darkgrey">About Us</span></a>
              : <a href="http://localhost:3000/about" className="hover:font-medium">
                <span className="text-middlegrey hover:text-middlegrey">About Us</span></a>
          }
        </li>
      </ul>
      <div>
        <button className="rounded-3xl border-2 border-slate-500 px-4 py-2" onClick={handleShowSub}>
          <span className="text-base text-darkgrey">Subscribe</span>
        </button>
      </div>
    </div>
    {
      showSub && <Subscribe showSub={showSub} handleShowSub={handleShowSub} />
    }
  </div>
}