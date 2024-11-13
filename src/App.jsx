import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard'
import BlockchainDetails from './components/BlockchainDetails/BlockchainDetails'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <Router>
      <div className="app">
        <Header onMenuClick={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/blockchain/:id" element={<BlockchainDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
