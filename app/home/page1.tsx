import Banner from "../components/banner"
import Posts from "../components/posts"
import Script from "next/script"
import Head from "next/head";

export default function HomePage() {

  return (
    <div>
      {/* <Head>
        <script async type="typescript" src="/interaction.ts" />
      </Head> */}
        <Script type="text/javascript" src="/interaction.js" />
      {/* content */}
      <Banner />
      <Posts />
      {/* background */}
      <div className="gradient-bg -z-10">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
      
    </div>
  )
}