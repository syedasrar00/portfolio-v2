import React from 'react'
import About from './components/About'
import Header from './components/Header'
import MediaLinks from './components/MediaLinks'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

export default function App() {
  return (
    <div className='bg-gradient-to-t from-gray-200 to-gray-900 min-h-screen'>
      <Header />
      <Profile />
      <Navbar />
      <MediaLinks />
      <About />
    </div>
  )
}
