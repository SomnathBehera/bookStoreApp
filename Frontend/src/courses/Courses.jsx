import React from 'react'
import Navabar from '../componets/Navabar'
import Course from '../componets/Course'
import Footer from '../componets/Footer'
import list from '../../public/list.json'

function Courses() {
  console.log(list)
  return (
    <>  
      <Navabar />
      <div className=" min-h-screen">
        <Course />
      </div>
      <Footer />
    </>

  )
}

export default Courses