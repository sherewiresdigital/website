'use client'
import { useState } from "react"
import Image from "next/image"
import PostCover75 from "../../public/75期海报图片.png"
import PostCover72 from "../../public/72期-圆桌-自动驾驶行业观察日记.png"
import PostCover67 from "../../public/67期_让有效反馈在职场流通的科学与艺术.png"
import PostCover66 from "../../public/66期海报文件-持续内核驱动力.jpg"
import PostCover41 from "../../public/41期海报图片-PM的职业道路.png"
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
      <div className="py-4 grid gap-4 grid-cols-4 justify-between">
        <div className="w-56">
          <a href="https://www.bilibili.com/read/cv29782894/?spm_id_from=333.999.0.0" target="_blank">
            <Image src={PostCover75} alt="logo" className="w-56 bg-cover" priority />
            <h6 className="mt-2 py-2 text-sm text-lightgrey">
              职场 成长
            </h6>
            <h6 className="text-lg text-darkgrey font-medium">
              职场探索没有标准答案
            </h6>
            <h6 className="py-2 text-base text-lightgrey font-light">
              1/7/2024
            </h6>
          </a>
        </div>
        <div className="w-56">
          <a href="https://www.bilibili.com/read/cv25934295/?spm_id_from=333.999.0.0" target="_blank">
            <Image src={PostCover72} alt="logo" className="w-56" priority />
            <h6 className="mt-2 py-2 text-sm text-lightgrey">
              自动驾驶 科普 圆桌会议 探索 观察 女性 从业
            </h6>
            <h6 className="text-lg text-darkgrey font-medium">
              自动驾驶行业观察日记：女性从业者的探索之路
            </h6>
            <h6 className="py-2 text-base text-lightgrey font-light">
              8/6/2023
            </h6>
          </a>
        </div>
        <div className="w-56">
          <a href="https://www.bilibili.com/read/cv23102085/?spm_id_from=333.999.0.0" target="_blank">
            <Image src={PostCover67} alt="logo" className="w-56" priority />
            <h6 className="mt-2 py-2 text-sm text-lightgrey">
              有效反馈 反馈 职场 反馈的艺术
            </h6>
            <h6 className="text-lg text-darkgrey font-medium">
              让有效反馈在职场流通的科学与艺术
            </h6>
            <h6 className="py-2 text-base text-lightgrey font-light">
              4/8/2023
            </h6>
          </a>
        </div>
        <div className="w-56">
          <a href="https://www.bilibili.com/read/cv22509189/?spm_id_from=333.999.0.0" target="_blank">
            <Image src={PostCover66} alt="logo" className="w-56" priority />
            <h6 className="mt-2 py-2 text-sm text-lightgrey">
              自我 成长
            </h6>
            <h6 className="text-lg text-darkgrey font-medium">
              寻找内核驱动力
            </h6>
            <h6 className="py-2 text-base text-lightgrey font-light">
              3/23/2023
            </h6>
          </a>
        </div>
        <div className="w-56">
          <Image src={PostCover41} alt="logo" className="w-56" priority />
          <h6 className="mt-2 py-2 text-sm text-lightgrey">
            项目管理 产品管理 中国女性 硅谷 团队管理 产品职业
          </h6>
          <h6 className="text-lg text-darkgrey font-medium">
            PM 的职业道路
          </h6>
          <h6 className="py-2 text-base text-lightgrey font-light">
            1/31/2024
          </h6>
        </div>
        <div className="w-56">
          <a href="https://www.bilibili.com/read/cv13350106/?spm_id_from=333.999.0.0" target="_blank">
            <Image src={PostCover} alt="logo" className="w-56" priority />
            <h6 className="mt-2 py-2 text-sm text-lightgrey">
              项目管理 产品管理 中国女性 硅谷 团队管理 产品职业
            </h6>
            <h6 className="text-lg text-darkgrey font-medium">
              PM 的职业道路
            </h6>
            <h6 className="py-2 text-base text-lightgrey font-light">
              1/31/2024
            </h6>
          </a>
        </div>
      </div>
    </div>
  </div>
}