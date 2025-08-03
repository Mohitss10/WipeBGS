import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Bgslider from '../components/Bgslider'
import Testimonial from '../components/Testimonial'
import Upload from '../components/Upload'


const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Bgslider />
      <Testimonial/>
      <Upload/>
    </div>
  )
}

export default Home
