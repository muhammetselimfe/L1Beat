import { useState } from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import TVLGraph from './components/TVLGraph/TVLGraph'
import TPSData from './components/TPSData/TPSData'
import DataList from './components/DataList/DataList'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="app">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className="main-content">
        <div className="dashboard-container">
          <div className="top-row">
            <TVLGraph />
            <TPSData />
          </div>
          <DataList />
        </div>
      </main>
    </div>
  )
}

export default App
