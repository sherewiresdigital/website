import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { MouseEventHandler } from 'react';

export default function Subscribe(props: { showSub: boolean, handleShowSub: MouseEventHandler }) {
  const showSub = props.showSub
  const handleShowSub = props.handleShowSub
  return <div className='absolute top-0 left-0 w-screen h-screen bg-slate-400/75'>
    {
      showSub &&  <div className="mx-auto mt-28 pl-8 pr-4 py-4 w-5/12 h-80 bg-white shadow-2xl">
      <div className='flex hover: cursor-pointer' onClick={handleShowSub}>
        <CloseOutlinedIcon className='ml-auto' />
      </div>

      <div>
        <h1 className="text-3xl font-medium text-darkgrey">
          Subscribe to our Newsletter
        </h1>
        <h2 className="mt-8 w-96 text-base font-normal text-darkgrey">
          Get bi-weekly update on our upcoming events on your email
        </h2>
      </div>
      <div className='flex mt-12'>
        <div className="flex w-96 h-10 px-4 py-2 bg-white border border-slate-300 rounded-3xl">
          <ForwardToInboxIcon />
          <input type="text" value="email address" className='ml-4 text-sm placeholder-slate-200 focus:outline-none focus:border-none' />
        </div>
        <button className="h-10 px-4 py-2 ml-4 rounded-3xl border-2 border-slate-500">
          <span className="text-base text-darkgrey font-semibold">Subscribe</span>
        </button>
      </div>
    </div>
    }
  </div>
}