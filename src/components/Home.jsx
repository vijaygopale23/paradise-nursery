import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay" />
      <section className="hero-content">
        <p className="eyebrow">Fresh finds for greener living</p>
        <h1>Paradise Nursery</h1>
        <p className="subtitle">
          Discover lush indoor plants, low-maintenance greens, and statement pieces
          that bring calm, color, and life to every corner of your home.
        </p>
        <div className="cta-row">
          <Link to="/plants" className="primary-button">
            Get Started
          </Link>
          <Link to="/about" className="secondary-button">
            Learn More
          </Link>
        </div>
        <div className="feature-stats">
          <div>
            <strong>18+</strong>
            <span>Plant varieties</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Curated categories</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Plant love</span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
