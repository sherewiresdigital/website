"use client"
import Banner from "../components/banner"
import Posts from "../components/posts"
import Script from "next/script"
import { useState, useRef, useEffect } from "react";

export default function HomePage() {
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  const interBubble = useRef() as React.MutableRefObject<HTMLInputElement>;

  const move = (): void => {
    setCurX((tgX - curX) / 20)
    setCurY((tgY - curY) / 20)
    console.log('DOM -- ', interBubble.current);
    interBubble && (interBubble.current.style.transform = 'translate(${Math.round(curX)}px, ${Math.round(curY)}px)');
    requestAnimationFrame((): void => {
      move();
    });
  }

  const handleMoveMouse = (e: any): void => {
    console.log('Mouse moving >>>>>>>>>>>>>>>>>>')
    setTgX(e.clientX)
    setTgY(e.clientY)
    setCurX((tgX - curX) / 20)
    setCurY((tgY - curY) / 20)
    console.log('curX >>> ', curX, 'curY >>> ', curY)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => move(), [tgX, tgY])

  return (
    <div onMouseMove={handleMoveMouse}>
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
        <div className="gradients-container" >
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive" ref={interBubble} style={{transform: 'translate(${Math.round(curX)}px, ${Math.round(curY)}px)'}}></div>
        </div>
      </div>
    </div>
  )
}