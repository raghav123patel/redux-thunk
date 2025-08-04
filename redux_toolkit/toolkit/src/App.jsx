import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserSlice from './slices/userSlice'
import Users from './Components/userComponent'
import Post from './Components/postComponent'
function App() {
  

  return (
    <>
      <Users/>
      <Post/>
    </>
  )
}

export default App
