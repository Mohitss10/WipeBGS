import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'


const Bgslider = () => {

    const [sliderPosition, setSliderPosition] = useState(40)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }
    return (
<div className='pb-10 md:py-20 mx-2'>
  {/* Title */}
  <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
    Remove background with high <br /> Quality and Accuracy
  </h1>

  <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>

    {/* Background image */}
    <img
      src={assets.image_w_bg}
      alt=""
      className="w-full"
      style={{
        WebkitClipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`,
        clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`
      }}
    />

    {/* Foreground image */}
    <img
      className='absolute top-0 left-0 w-full pointer-events-none'
      src={assets.image_wo_bg}
      alt=""
      style={{
        WebkitClipPath: `inset(0 0 0 ${sliderPosition}%)`,
        clipPath: `inset(0 0 0 ${sliderPosition}%)`
      }}
    />

    {/* Slider (centered over image) */}
    <input
      type="range"
      min={0}
      max={100}
      value={sliderPosition}
      onChange={handleSliderChange}
      className='slider absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 appearance-none h-1 bg-gray-300 rounded-md focus:outline-none slider-thumb'
    />
  </div>
</div>

    )
}

export default Bgslider
