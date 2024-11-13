import { useState, useEffect } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

function Header({ onMenuClick }) {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10

      setPrevScrollPos(currentScrollPos)
      setVisible(isVisible)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  return (
    <header className={`header ${visible ? '' : 'header-hidden'}`}>
      <div className="header-container">
        <button className="mobile-menu-btn" onClick={onMenuClick}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="logo">
          <img src={logo} alt="L1Beat Logo" />
        </div>
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  )
}

export default Header
