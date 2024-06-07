import React from 'react'
import Banner from '../Banner'
import ImageWithOverly from '../ImageWithOverly'
import Happy_Hour_img from "../../assets/Happy_Hour_img.png"
const Home = () => {
  return (
    <div>
      <Banner/>
      <ImageWithOverly className="flex flex-col justify-center items-center" src={Happy_Hour_img}>
        <div className="flex flex-col justify-center items-center">
        <h2 className='text-[128px] font-upright font-semibold text-[#DCCA87]'>Happy Hours</h2>
        <p className='text-white text-[32px] font-upright font-bold'>Monday - Friday  (4:00 Pm - 7:00 pm)</p>
        </div>
      </ImageWithOverly>
    </div>
  )
}

export default Home