import './Sidebar.css'

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h2>Navigation</h2>
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a href="#dashboard" className="sidebar-link active">
              <span className="sidebar-icon">📊</span>
              Dashboard
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#analytics" className="sidebar-link">
              <span className="sidebar-icon">📈</span>
              Analytics
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#transactions" className="sidebar-link">
              <span className="sidebar-icon">💸</span>
              Transactions
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#settings" className="sidebar-link">
              <span className="sidebar-icon">⚙️</span>
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
