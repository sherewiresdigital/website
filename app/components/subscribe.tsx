import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

export default function Subscribe() {
  return <div className="pl-8 pr-4 py-4 w-1/2 h-80 shadow-2xl">
    <div className='flex'>
      <CloseOutlinedIcon className='ml-auto' />
    </div>

    <div>
      <h1 className="text-4xl font-medium">
        Subscribe to our Newsletter
      </h1>
      <h2 className="mt-8 w-96 text-base font-normal">
        Get bi-weekly update on our upcoming events on your email
      </h2>
    </div>
    <div className='flex mt-16'>
      <div className="flex w-96 h-10 px-4 py-2 bg-white border border-slate-300 rounded-3xl">
        <ForwardToInboxIcon />
        <input type="text" value="email address" className='ml-4 text-sm shadow-sm placeholder-slate-200 focus:outline-none focus:border-none' />
      </div>
      <button className="h-10 px-4 py-2 ml-4 rounded-3xl border-2 border-slate-500 ">
        <span className="text-base">Subscribe</span>
      </button>
    </div>
  </div>
}