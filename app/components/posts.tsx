import Image from "next/image"
import PostCover from "../../public/postcover.png"

export default function Posts() {
  return <div className="container mx-auto items-center w-10/12 py-12">
    <div className="px-24">
      {/* section title */}
      <div>
        <h2 className="text-2xl font-medium">
          Past events
        </h2>
      </div>
      {/* posts filter */}
      <div className="flex py-4 columns-2 justify-between">
        <div className="flex">
          <button className="mr-4 px-4 py-1 border border-black rounded-2xl">
            All</button>
          <button className="mr-4 px-4 py-1 border border-black rounded-2xl">
            Video</button>
          <button className="mr-4 px-4 py-1 border border-black rounded-2xl">
            Podcast</button>
          <button className="mr-4 px-4 py-1 border border-black rounded-2xl">
            Article</button>
        </div>
        <div className="text-base/8 font-medium underline">
          <a href="#">View More</a></div>
      </div>
      {/* posts listing */}
      <div className="flex py-4 justify-between columns-4">
        <div className="w-56">
          <Image src={PostCover} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-slate-500">
            Technolgy AI
          </h6>
          <h6 className="text-lg text-slate-900 font-medium">
            Enabling technology to empower women
          </h6>
          <h6 className="py-2 text-base text-slate-500 font-light">
            Sep 11th 2023
          </h6>
        </div>
        <div className="w-56">
          <Image src={PostCover} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-slate-500">
            Technolgy AI
          </h6>
          <h6 className="text-lg text-slate-900 font-medium">
            Enabling technology to empower women
          </h6>
          <h6 className="py-2 text-base text-slate-500 font-light">
            Sep 11th 2023
          </h6>
        </div>
        <div className="w-56">
          <Image src={PostCover} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-slate-500">
            Technolgy AI
          </h6>
          <h6 className="text-lg text-slate-900 font-medium">
            Enabling technology to empower women
          </h6>
          <h6 className="py-2 text-base text-slate-500 font-light">
            Sep 11th 2023
          </h6>
        </div>
        <div className="w-56">
          <Image src={PostCover} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-slate-500">
            Technolgy AI
          </h6>
          <h6 className="text-lg text-slate-900 font-medium">
            Enabling technology to empower women
          </h6>
          <h6 className="py-2 text-base text-slate-500 font-light">
            Sep 11th 2023
          </h6>
        </div>
      </div>
    </div>
  </div>
}