import { useState, useEffect, useRef } from 'react'

import bg from './assets/bg.jpg'
import bg1 from './assets/bg1.png'
import bg2 from './assets/bg2.png'
import bg3 from './assets/bg3.png'
import sun from './assets/sun.png'
import a from './assets/1.png'
import B from './assets/2.png'
import c from './assets/3.png'
import D from './assets/4.png'
import e from './assets/5.png'
import f from './assets/6.png'

import './App.css'

function App() {

  const text = useRef(null)
  const sunref = useRef(null)
  const tright = useRef(null)
  const tleft = useRef(null)
  const b = useRef(null)
  const d = useRef(null)
  const bgone = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY

      text.current.style.marginTop = `${value * 1.5}px`
      tright.current.style.left = `${value * 1.5}px`
      tright.current.style.top = `${value * 1.5}px`
      tleft.current.style.left = `${value * -1.5}px`
      tleft.current.style.top = `${value * 1.5}px`
      sunref.current.style.top = `${value * 1.5}px`

      b.current.style.top = `${value * 1.5}px`
      b.current.style.left = `${value * 1.5}px`
      d.current.style.left = `${value * -0.5}px`
      d.current.style.top = `${value * 0.2}px`

      bgone.current.style.top = `${value * 0.3}px`
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='container'>
      <header className='header'>
        <h2>LOGO</h2>
        <div className='nav'>
          <div className='item-nav'>Home</div>
          <div className='item-nav'>About</div>
          <div className='item-nav'>Login</div>
        </div>

      </header>
      <section className='box'>



        <img src={bg} alt="" className='item' />
        <img src={sun} alt="" className='item sun' ref={sunref} />

        <img src={a} alt="" className='item' />
        <img src={B} alt="" className='item' ref={b} />
        <img src={c} alt="" className='item' />
        <img src={D} alt="" className='item' ref={d} />
        <img src={e} alt="" className='item' />
        <h1 className=' text' ref={text}>Witthaya</h1>
        <img src={f} alt="" className='item' />
        <img src={bg3} alt="" className='item' ref={tleft} />
        <img src={bg2} alt="" className='item' ref={tright} />
        <img src={bg1} alt="" className='item footbg' ref={bgone} />
      </section>

      <div className='content'>
        <h2>
          ผู้จัดทำ นาย วิทยา แฝงทรัพย์ เว็บนี่ทำขึ้นเพึ่อศึกษาพัฒนาทักษะ และเป็นผลงาน
        </h2>
        <br/>
        
      </div>

    </div>
  )
}

export default App
