import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Message from './Message'
import Profile from './Profile'
import Settings from './Settings'


const Home = () => {
  return (
    <>
    <div className='flex'>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' Component={Home} />
          <Route path='/Message' Component={Message} />
          <Route path='/Profile' Component={Profile} />
          <Route path='/Settings' Component={Settings} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
    
  )
}

export default Home