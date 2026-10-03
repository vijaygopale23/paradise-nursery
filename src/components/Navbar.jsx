import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const itemCount = useSelector((state) => state.cart.itemCount)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/plants', label: 'Plants' },
    { to: '/about', label: 'About Us' },
    { to: '/cart', label: `Cart (${itemCount})` },
  ]

  return (
    <header className="navbar">
      <div className="brand-block">
        <span className="brand-icon" aria-hidden="true">
          🌿
        </span>
        <span className="brand-name">Paradise Nursery</span>
      </div>
      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
