import React from 'react'
// import Kopi1 from '../assets/images/Kopi1.png'
import Kopian from '../assets/images/kopian.png'
import Hiasan from '../assets/images/hiasan.png'
const AboutPage = () => {
  return (
    <div className="about-container">
        <div className="deskripsi">
      <h1>Discover the best coffee</h1>
      <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted..</p> 
 <button className="learn-more">Learn More</button>  
 <div className="hiasan">
        <img src={Hiasan} alt="" />
      </div>
 </div>
      <div className="coffee-cup">
        <img src={Kopian} alt="" />
      </div>
     
    </div>
     
  )
}

export default AboutPage