import React from 'react'
import AboutPage from './AboutPage'

const HomePage = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-content">
        <h2>We’ve got your morning covered with</h2>
        <h1>Coffee</h1>
        <p>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
        <button className="btn">Order Now</button>
      </div>
    </div>
    <AboutPage />
    </>
  )
}

export default HomePage