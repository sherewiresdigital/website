"use client"
import Banner from "../components/banner"
import Posts from "../components/posts"
import Script from "next/script"
import { useRef } from "react";

export default function HomePage() {

  let curX: number = 0;
  let curY: number = 0;
  let tgX: number = 0;
  let tgY: number = 0;

  const interBubble = useRef() as React.MutableRefObject<HTMLInputElement>;

  const move = (): void => {
    console.log('Moving ................')
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    // interBubble && interBubble.current.style.transform = 'translate(${Math.round(curX)}px, ${Math.round(curY)}px)';
    requestAnimationFrame((): void => {
      move();
    });
  }

  move();

  const handleMoveMouse = (e: any): void => {
    console.log('Mose moving >>>>>>>>>>>>>>>>>>')
    tgX = e.clientX;
    tgY = e.clientY;
  }

  return (
    <div onMouseMove={handleMoveMouse}>
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
          <div className="interactive" ref={interBubble} ></div>
        </div>
      </div>

    </div>
  )
}