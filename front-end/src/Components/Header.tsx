import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import './Header.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className="header-page">
      <nav>
        <Link className="nav-brand" to="/home">Gilded</Link>

        <div className="nav-items">
          <button
            type="button"
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <line x1="1" y1="1" x2="21" y2="21" stroke="var(--blush)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="21" y1="1" x2="1" y2="21" stroke="var(--blush)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <line x1="0" y1="1" x2="22" y2="1" stroke="var(--blush)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="8" x2="22" y2="8" stroke="var(--blush)" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="15" x2="22" y2="15" stroke="var(--blush)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>

          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/booking">Book Now</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/account">Account</Link></li>
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="nav-backdrop"
          role="presentation"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  )
}