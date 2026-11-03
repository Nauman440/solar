export const metadata = {
  title: 'About Us — Solara',
  description: 'Meet the idea and people behind Solara. Sample content for a solar company website.',
};

const values = [
  ['01 / CLARITY', 'Straightforward by nature', 'Good decisions start with clear answers. We explain your options in everyday language, so you can choose what feels right for your home.'],
  ['02 / CARE', 'People before panels', 'Every home has a different story. We start by listening, then design a thoughtful approach around the people who live there.'],
  ['03 / PURPOSE', 'A brighter everyday', 'We believe small, practical changes can move us toward a cleaner future. Solar is our way of helping that future feel a little closer.'],
];

export default function AboutPage() {
  return (
    <>
      <div className="announcement">Good for your home. Better for the planet. <span>Let’s make the switch.</span> <span aria-hidden="true">↗</span></div>
      <header className="header container">
        <a className="logo" href="/" aria-label="Solara home"><span className="sun" aria-hidden="true">✳</span> solara.</a>
        <nav aria-label="Main navigation"><a href="/">Home</a><a className="active" href="/about" aria-current="page">About us</a><a href="/#solutions">Solutions</a><a href="/#contact">Contact</a></nav>
        <a className="button button-small" href="/#contact">Let’s talk solar <span aria-hidden="true">↗</span></a>
      </header>
      <main>
        <section className="hero container about-page-hero" aria-labelledby="about-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> A LITTLE ABOUT US</div>
            <h1 id="about-title">Good people.<br />Great energy.<br /><span>A shared future.</span></h1>
            <p>We’re Solara, a team built around one simple belief: clean energy should feel easy to understand and natural to bring home.</p>
            <a className="text-link" href="#our-story">Discover our story <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art">
            <img src="/solar-home.svg" alt="A modern solar-powered home nestled among green hills" />
            <div className="energy-card"><span className="energy-icon" aria-hidden="true">☀</span><div><small>Our purpose, every day</small><strong>Make brighter living possible.</strong></div></div>
          </div>
        </section>
        <section className="founder container" id="our-story" aria-labelledby="story-title">
          <div className="founder-quote">
            <span className="founder-sun" aria-hidden="true">✳</span>
            <blockquote>“We wanted to build the kind of solar company we’d recommend to our own families.”</blockquote>
            <div className="founder-person"><span className="founder-initials" aria-hidden="true">AM</span><div><strong>Alex Morgan</strong><span>Founder, Solara · Sample profile</span></div></div>
          </div>
          <div className="founder-story">
            <div className="eyebrow">OUR STORY</div>
            <h2 id="story-title">One question.<br />A brighter beginning.</h2>
            <p>It began when our founder, Alex, started looking into solar for a family home. The possibilities were exciting, but the process felt confusing. Why couldn’t a positive change come with a simpler experience?</p>
            <p>That question became Solara. We imagined a company where friendly conversations, thoughtful design, and practical guidance came together from the very first hello.</p>
            <p>Our story is still being written. The idea behind it stays the same: help people feel confident about their energy, their homes, and the future they’re building.</p>
          </div>
        </section>
        <section className="container about-values" aria-labelledby="values-title">
          <div className="section-heading"><div><div className="eyebrow">WHAT KEEPS US GROUNDED</div><h2 id="values-title">Our values.<br />In everything we do.</h2></div><p>Technology brings the power. The way we treat people makes the difference.</p></div>
          <div className="cards">{values.map(([label, title, description]) => <article className="solution-card" key={label}><span className="card-number">{label}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </section>
        <section className="contact container" aria-labelledby="about-contact-title"><div><div className="eyebrow">LET’S BUILD SOMETHING BRIGHTER</div><h2 id="about-contact-title">Your story could be next.</h2><p>Tell us what a brighter home looks like to you.</p></div><a className="button" href="mailto:hello@example.com">Say hello <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer className="container"><a className="logo" href="/" aria-label="Solara home"><span className="sun" aria-hidden="true">✳</span> solara.</a><p>© {new Date().getFullYear()} Solara. A brighter every day.</p><span className="demo-label">Demo website · Sample content</span></footer>
    </>
  );
}
