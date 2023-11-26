import React from 'react'
import phoneImg from './images/phone.svg';
import {useGlobalContext} from './context'

const Hero = () => {
    const {closeSubmenu} = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
          <article className='hero-info'>
              <h2>My name is Rakib hasan from Bangladesh</h2>
              <p>Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coas</p>
              <button className='btn'>Start now</button>
          </article>
          <article className='hero-images'>
            <img src={phoneImg} className="phone-img" alt='phone-img' />
           </article>
      </div>
    </section>
  )
}

export default Hero