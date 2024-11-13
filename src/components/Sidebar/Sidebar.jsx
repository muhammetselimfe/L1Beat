import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Navigation</h2>
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <NavLink to="/" className={({ isActive }) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="sidebar-icon">📊</span>
              Dashboard
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/analytics" className={({ isActive }) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="sidebar-icon">📈</span>
              Analytics
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/transactions" className={({ isActive }) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="sidebar-icon">💸</span>
              Transactions
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/settings" className={({ isActive }) => 
              `sidebar-link ${isActive ? 'active' : ''}`
            }>
              <span className="sidebar-icon">⚙️</span>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
