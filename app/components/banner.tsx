'use client'
import { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Subscribe from './subscribe';

export default function Banner() {
  const [showSub, setShowSub] = useState(false)
  const handleShowSub = () => setShowSub(!showSub)
  return <div className="container py-8">
    <div className="flex mx-auto columns-2 items-center w-10/12">
      <div className="w-1/2 pl-24">
        <div className='flex items-center'>
          <h2 className="text-lg font-medium text-middlegrey">
            Upcoming
          </h2>
          <span className="ml-2 text-3xl text-middlegrey material-symbols-outlined">
            campaign
          </span>
        </div>
        <h1 className="pt-6 text-6xl font-bold text-darkgrey">
          STEP IN HIGH TECH VEHICLE
        </h1>
        <h3 className="pt-6 text-xl font-normal text-lightgrey">
          Oct 12, 2023 Online
        </h3>
        <div className="pt-12">
          <button className="flex items-center rounded-3xl border-2 border-slate-500 pl-6 pr-4 py-2" onClick={handleShowSub}>
            <span className="text-base font-semibold text-darkgrey">Register for free</span>
            <span className="ml-2 text-2xl text-middlegrey material-symbols-outlined">Arrow_Forward</span>
          </button>
        </div>
      </div>
      <div className="w-1/2 pl-24">
        Flyer
      </div>
    </div>
    {
      showSub && <Subscribe showSub={showSub} handleShowSub={handleShowSub} />
    }
  </div>
}