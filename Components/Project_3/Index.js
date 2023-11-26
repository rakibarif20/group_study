import React from 'react'
import Reviews from './Reviews'
import './index.css';
const Index = () => {
  return (
    <main>
        <section className='container'>
            <div className='title'>
                <h2>Our Reviews</h2>
                <div className='underline'></div>
            </div>
            <Reviews />
        </section>
    </main>
  )
}

export default Index