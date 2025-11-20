import React, { useEffect, useRef } from 'react'

export default function Hero() {

    const vidRef=useRef();

    useEffect(()=>{
        if(vidRef.current) vidRef.current.playbackRate=2;
    },[]);

  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src='/title.png' alt=''/>
        </div>
        <video ref={vidRef} src='/videos/hero.mp4' autoPlay muted playsInline/>

        <button>Buy</button>
        <p>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}  
