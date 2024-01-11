export default function Footer() {
  return <div className="container py-8">
    <div className="flex mx-auto columns-2 items-start w-10/12">
      <div className="flex-column justify-start px-24 w-2/3">
        <h1 className="text-3xl font-medium">
          Join our community
        </h1>
        <h6 className="pt-6 text-base font-normal w-96">
          Join us today to connect, learn, and thrive in an
          environment where your brilliance shines and your
          ideas transform the future of tech
        </h6>
      </div>
      <div className="w-1/3">
        <h1 className="text-3xl font-medium">
          Find us at
        </h1>
        <div>
          <ul className="py-4 list-none">
            <li className="pb-2">
              <span className="font-medium">Youtube: She Rewires Digital</span>
            </li>
            <li className="pb-2">
              <span className="font-medium">Wechat: She Rewires Digital</span>
            </li>
            <li className="pb-2">
              <span className="font-medium">小宇宙: She Rewires Digital</span>
            </li>
            <li className="pb-2">
              <span className="font-medium">小红书: She Rewires Digital</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
}