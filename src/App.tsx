import { useState } from 'react'
import './App.css'
import MainPanel from './components/MainPanel'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="w-full flex flex-row bg-zinc-900">
      <Sidebar />
      <MainPanel />
    </div>
  )
}

export default App
