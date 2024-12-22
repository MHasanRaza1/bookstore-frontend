import React from 'react'
import Navbar from '../components/Navbar'
import Courses from '../components/Courses'
import Footer from '../components/Footer'

const Course = () => {
  return (
    <div>
        <Navbar/>
        <div className='mt-[-50px]'>
          <Courses />
        </div>
        <Footer />
    </div>
  )
}

export default Course