import React, { useState, useEffect } from 'react'
import Logo from './camera.svg'
import './index.css'

function Header() {
  // Function to get the initial theme
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme
    } else {
      return 'light'
    }
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    // Apply the theme to the body
    document.body.className = theme

    // Save the theme to local storage
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleThemeChange = (themeValue) => {
    setTheme(themeValue)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} width="55" height="50" alt="logo" />
          <span className="fs-1 text-primary">Memory Album</span>
        </a>


{/* Theme selection dropdown (visible on all screens) */}
<div class="dropdown navbar-nav justify-content-end">
  <button class="nav-link dropdown-toggle btn text-primary" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="bi bi-brightness-high"></span>
  </button>
  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
    <li>
      <button type="button" class="dropdown-item" onClick={() => handleThemeChange('light-theme')}>
        Light
      </button>
    </li>
    <li>
      <button type="button" class="dropdown-item" onClick={() => handleThemeChange('dark-theme')}>
        Dark
      </button>
    </li>
  </ul>
</div>
      </div>
    </nav>
  )
}

export default Header
