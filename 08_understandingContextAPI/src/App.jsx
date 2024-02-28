import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <div className='bg-red-600'>
        <h1 className='bg-red-600 text-white p-5 text-4xl'>Context API for State Management</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
