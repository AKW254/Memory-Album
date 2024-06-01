import React, { useState, useEffect } from 'react';
import Logo from './camera.svg';
import "./index.css";

function Header() {
  // Function to get the initial theme
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    } else {
      return 'light';
    }
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    // Apply the theme to the body
    document.body.className = theme;

    // Save the theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = (themeValue) => {
    setTheme(themeValue);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} width="55" height="60" alt='logo' />
          <span className="fs-2">Memory Album</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-moon-stars-fill"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <button type="button" className="dropdown-item" onClick={() => handleThemeChange('light-theme')}>
                    <i className="bi bi-brightness-high me-2"></i> Light
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item" onClick={() => handleThemeChange('dark-theme')}>
                    <i className="bi bi-moon-stars-fill me-2"></i> Dark
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
