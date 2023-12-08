export default function Banner() {
  return <div className="container py-8">
    <div className="flex mx-auto columns-2 items-center w-10/12">
      <div className="px-24">
        <h2 className="text-lg font-medium">
          Upcoming
        </h2>
        <h1 className="pt-6 text-6xl font-bold">
          STEP IN HIGH
        </h1>
        <h1 className="pt-6 text-6xl font-bold">
          TECH VEHICLE
        </h1>
        <h3 className="pt-6 text-xl font-normal">
          Oct 12, 2023 Online
        </h3>
        <div className="pt-12">
        <button className="rounded-3xl border-2 border-slate-500 px-4 py-2">
          <span className="text-base font-medium">Register for free</span>
        </button>
      </div>
      </div>
      <div className="px-24">
        flyer
      </div>
    </div>
  </div>
}