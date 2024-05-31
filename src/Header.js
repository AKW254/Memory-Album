import React ,{ useState, useEffect } from 'react';
import Logo from './camera.svg';
import "./index.css";
function Header() {
const [theme, setTheme] = useState(() => {
    // Get theme from local storage or default to 'light'
    return localStorage.getItem('theme') || 'light-theme';
  });

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
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto  text-decoration-none">
            <img src={ Logo} width="55" height="60" alt='logo'/>
           <span className="fs-2">Memory Album</span>
          </a>

                   <div className="dropdown text-end ms-auto">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-moon-stars-fill"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text" style={{ position: 'absolute', inset: 'auto 0px 0px auto', margin: '0px', transform: 'translate(0px, -44px)' }} data-popper-placement="top-end">
              <li>
                <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false" onClick={() => handleThemeChange('light-theme')}>
                  <i className="bi bi-brightness-high me-2"></i> Light
                </button>
              </li>
              <li>
                <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="true" onClick={() => handleThemeChange('dark-theme')}>
                  <i className="bi bi-moon-stars-fill me-2"></i> Dark
                </button>
              </li>
  
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
