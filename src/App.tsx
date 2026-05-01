import './index.css'

export default function App() {
  return (
    <div className="outer-wrapper">
      <div className="main-container">
        
        {/* Navbar */}
        <header>
          <a href="https://www.bitget.com/" className="logo" target="_blank" rel="noopener noreferrer">Bitget</a>
          <div className="header-icons">
            <a href="https://www.bitget.com/login" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="User" />
            </a>
            <a href="https://www.bitget.com/asset" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <div className="hero">
          
          {/* Left */}
          <div className="left">
            <h1>Trade Crypto.<br/>Grow Your Wealth.</h1>
            <p><span className="sub-text">Trade 800+ cryptocurrencies on a <br /> secure platform.</span></p>

            <div className="buttons">
              <a href="https://www.bitget.com/spot/BTCUSDT" className="primary" target="_blank" rel="noopener noreferrer">Start Trading</a>
              <a href="https://www.bitget.com/markets" className="secondary" target="_blank" rel="noopener noreferrer">Explore Markets</a>
            </div>

            <div className="features">
              <div className="item">
                <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Secure</span>
              </div>
              <div className="item">
                <svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="16 6 23 6 23 13"/></svg>
                <span>Advanced Tools</span>
              </div>
              <div className="item">
                <svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                <span>24/7 Support</span>
              </div>
              <div className="item">
                <svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                <span>Rewards</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="hero-image right">
            <img src="https://i.postimg.cc/vHx2kc4S/IMG-20260430-WA0016.jpg" alt="" />
          </div>

        </div>

      </div>
    </div>
  )
}
