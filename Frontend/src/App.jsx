import React from 'react'
import Home from '../../Frontend/src/home/Home.jsx'
import Courses from '../../Frontend/src/courses/Courses.jsx'
import Signup from './componets/Signup.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='dark:bg-slate-800 dark:text-white'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>

    </>

  )
}

export default App