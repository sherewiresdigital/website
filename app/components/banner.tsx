'use client'
import { useState } from 'react';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Subscribe from './subscribe';

export default function Banner() {
  const [showSub, setShowSub] = useState(false)
  const handleShowSub = () => setShowSub(!showSub)
  return <div className="container py-8">
    <div className="flex mx-auto columns-2 items-center w-10/12">
      <div className="w-1/2 pl-24">
        <div className='flex'>
          <h2 className="text-lg font-medium text-middlegrey">
            Upcoming
          </h2>
          {/* <svg></svg> */}
          <CampaignOutlinedIcon className='ml-4 w-8 h-8 font-light stroke-1'/>
        </div>
        <h1 className="pt-6 text-6xl font-bold text-darkgrey">
          STEP IN HIGH TECH VEHICLE
        </h1>
        <h3 className="pt-6 text-xl font-normal text-lightgrey">
          Oct 12, 2023 Online
        </h3>
        <div className="pt-12">
          <button className="rounded-3xl border-2 border-slate-500 px-4 py-2" onClick={handleShowSub}>
            <span className="text-base font-medium text-darkgrey">Register for free</span>
            <ArrowForwardIcon className='ml-4' />
          </button>
        </div>
      </div>
      <div className="w-1/2 pl-24">
        flyer
      </div>
    </div>
    {
      showSub && <Subscribe showSub={showSub} handleShowSub={handleShowSub} />
    }
  </div>
}