const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <div className="announcement">Good for your home. Better for the planet. <span>Let’s make the switch.</span> <span aria-hidden="true">↗</span></div>
      <header className="header container">
        <a className="logo" href="#home" aria-label="Solara home"><span className="sun">✳</span> solara<span className="logo-dot">.</span></a>
        <nav aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#about">Our approach</a><a href="#solutions">Solutions</a><a href="#contact">Contact</a></nav>
        <a className="button button-small" href="#contact">Let’s talk solar <Arrow /></a>
      </header>
      <main id="home">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> CLEAN ENERGY. BRIGHTER LIVING.</div>
            <h1>A brighter future.<br />Starts on <span>your roof.</span></h1>
            <p>Turn everyday sunshine into extraordinary possibilities. Simple, reliable solar energy for your home and the world around it.</p>
            <div className="hero-actions"><a className="button" href="#solutions">Find your solar solution <Arrow /></a><a className="text-link" href="#about">Get to know us <span>→</span></a></div>
            <div className="hero-note"><span className="little-sun">☀</span> Powered by sunshine. Built around you.</div>
          </div>
          <div className="hero-art">
            <img src="/solar-home.svg" alt="Illustration of a modern home with rooftop solar panels surrounded by green hills" />
            <div className="energy-card"><span className="energy-icon">↗</span><div><small>A little sunshine goes a long way</small><strong>Your home. Your power.</strong></div><span className="energy-dot" /></div>
            <div className="art-label">THE FUTURE LOOKS SUNNY <span>☀</span></div>
          </div>
        </section>
        <section className="trust-strip container" aria-label="Our commitments"><p>Better energy.<br /><strong>Every step of the way.</strong></p><div><span>◉</span> Thoughtfully designed</div><div><span>⌁</span> Expert installation</div><div><span>♧</span> A smaller footprint</div><div><span>↗</span> Long-term peace of mind</div></section>
        <section className="solutions container" id="solutions">
          <div className="section-heading"><div><div className="eyebrow">MADE FOR THE WAY YOU LIVE</div><h2>Your sunshine.<br />A world of possibilities.</h2></div><p>From your first question to your first sunny day on solar, we make clean energy feel like second nature.</p></div>
          <div className="cards">
            <a className="solution-card" href="#contact"><div className="card-top"><span className="card-icon">▦</span><span className="circle-arrow">↗</span></div><span className="card-number">01 / CAPTURE</span><h3>Solar for your home</h3><p>Make your rooftop work harder with a solar system designed around your everyday energy needs.</p><span className="card-link">Explore home solar <span>→</span></span></a>
            <a className="solution-card featured" href="#contact"><div className="card-top"><span className="card-icon">ϟ</span><span className="circle-arrow">↗</span></div><span className="card-number">02 / STORE</span><h3>Save a little sunshine</h3><p>Keep the good energy going. Battery storage helps you use your solar power on your own schedule.</p><span className="card-link">Discover battery storage <span>→</span></span></a>
            <a className="solution-card" href="#contact"><div className="card-top"><span className="card-icon">⌁</span><span className="circle-arrow">↗</span></div><span className="card-number">03 / CONNECT</span><h3>A smarter kind of energy</h3><p>Get a clearer picture of your power with simple monitoring that keeps you connected to your home.</p><span className="card-link">Meet smarter energy <span>→</span></span></a>
          </div>
        </section>
        <section className="about container" id="about"><div className="about-symbol" aria-hidden="true">✳</div><div><div className="eyebrow">SMALL SWITCH. BIG POSSIBILITIES.</div><h2>Good energy starts<br />with good people.</h2><p>We believe a cleaner future should feel within reach. That’s why our approach is simple: listen first, design thoughtfully, and be there for every step of your solar journey.</p></div></section>
        <section className="founder container" id="founder" aria-labelledby="founder-heading">
          <div className="founder-quote">
            <span className="founder-sun" aria-hidden="true">✳</span>
            <blockquote>“A brighter future should begin with something as simple as feeling at home.”</blockquote>
            <div className="founder-person"><span className="founder-initials" aria-hidden="true">AM</span><div><strong>Alex Morgan</strong><span>Founder, Solara · Sample profile</span></div></div>
          </div>
          <div className="founder-story">
            <div className="eyebrow">A NOTE FROM OUR FOUNDER</div>
            <h2 id="founder-heading">It started with a roof.<br />And a bigger idea.</h2>
            <p>When Alex began exploring solar for a family home, one thing stood out: making a positive change felt far more complicated than it needed to be. There were big promises, unfamiliar terms, and too few straightforward answers.</p>
            <p>Solara grew from a simple idea: give people the clarity and care we would want for our own families. Bring together thoughtful design, practical advice, and people who love what they do.</p>
            <p>Today, that idea still guides every conversation. One home, one rooftop, and one brighter beginning at a time.</p>
            <a className="text-link" href="#contact">Start your own solar story <span aria-hidden="true">→</span></a>
          </div>
        </section>
        <section className="contact container" id="contact"><div><div className="eyebrow">YOUR NEXT CHAPTER IS BRIGHT</div><h2>Ready for a little more sunshine?</h2><p>Your journey to better energy starts with a conversation.</p></div><a className="button" href="mailto:hello@example.com">Say hello <Arrow /></a></section>
      </main>
      <footer className="container"><a className="logo" href="#home"><span className="sun">✳</span> solara.</a><p>© {new Date().getFullYear()} Solara. A brighter every day.</p><span className="demo-label">Demo website · Sample content</span></footer>
    </>
  );
}
