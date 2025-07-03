import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById('opt-in-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section id="hero" className={`hero-section ${isVisible.hero ? 'visible' : ''}`}>
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image-container">
              <img 
                src="https://images.pexels.com/photos/9221770/pexels-photo-9221770.jpeg" 
                alt="Fidelis Ozuawala - AI Expert" 
                className="hero-image"
              />
              <div className="hero-image-glow"></div>
            </div>
          </div>
          <div className="hero-right">
            <h1 className="hero-title">
              Learn to Turn <span className="highlight">A.I.</span> Into Cash
            </h1>
            <p className="hero-subtitle">
              Join Fidelis Ozuawala's Exclusive Inner Circle to Learn Prompt Engineering, 
              A.I. Monetization & More.
            </p>
            
            {/* Opt-in Form */}
            <div id="opt-in-form" className="opt-in-container">
              <form action="https://mailer.fidelisozuawala.com/subscribe" method="POST" acceptCharset="utf-8" className="opt-in-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" placeholder="Enter your email address" required />
                </div>
                <div style={{display: 'none'}}>
                  <label htmlFor="hp">HP</label>
                  <input type="text" name="hp" id="hp" />
                </div>
                <input type="hidden" name="list" value="892sYrpE76387638P0hXpIyaR7763w" />
                <input type="hidden" name="subform" value="yes" />
                <button type="submit" name="submit" id="submit" className="cta-button primary">
                  <span>Join the Inner Circle</span>
                  <div className="button-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Should Join Section */}
      <section id="why-join" className={`why-join-section ${isVisible['why-join'] ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Why You Should Join</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Become a Prompt Engineer Fast</h3>
              <p>Master the art of AI communication and unlock unlimited earning potential</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Build & Sell Digital Products</h3>
              <p>Create high-value digital products using AI tools and scale your business</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Scale Small Businesses with A.I.</h3>
              <p>Learn how AI transforms small businesses into profitable enterprises</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Monetize ChatGPT & Midjourney</h3>
              <p>Turn popular AI tools into consistent income streams</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🛠️</div>
              <h3>Build SaaS with No Code</h3>
              <p>Create sellable micro-tools and SaaS products without programming</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Turn AI Tools into Income</h3>
              <p>Convert fun AI experiments into profitable business opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Fidelis Section */}
      <section id="about" className={`about-section ${isVisible.about ? 'visible' : ''}`}>
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Fidelis Ozuawala</h2>
              <p className="about-description">
                Fidelis Ozuawala is a seasoned, value-driven online sensation and blogger with over 15 years of experience. 
                A crypto expert and mentor, he's been featured in top media publications. He shares practical tips on 
                blogging, A.I., and his real estate development journey. Fidelis stands out for giving out high-value 
                content for free — now imagine being in his private circle.
              </p>
              <div className="quote-container">
                <blockquote className="featured-quote">
                  <span className="quote-mark">"</span>
                  A.I. is the future. Learn it now, earn from it forever.
                  <span className="quote-mark">"</span>
                </blockquote>
                <cite className="quote-author">– Fidelis Ozuawala</cite>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643" 
                alt="Fidelis Ozuawala at work" 
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className={`showcase-section ${isVisible.showcase ? 'visible' : ''}`}>
        <div className="container">
          <h2 className="section-title">Proof of Success</h2>
          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="showcase-image">
                <img 
                  src="https://images.unsplash.com/photo-1655393001768-d946c97d6fd1" 
                  alt="AI Generated Content" 
                />
                <div className="showcase-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="showcase-content">
                <h3>This AI video hit 100K+ views in 3 days</h3>
                <p>Generated using advanced AI prompting techniques</p>
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-image">
                <img 
                  src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg" 
                  alt="AI Tools Interface" 
                />
                <div className="showcase-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="showcase-content">
                <h3>Styled and generated using Midjourney + Veo3</h3>
                <p>Professional quality content created in minutes</p>
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-image">
                <img 
                  src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58" 
                  alt="AI Success Story" 
                />
                <div className="showcase-overlay">
                  <div className="stats">$15K</div>
                </div>
              </div>
              <div className="showcase-content">
                <h3>Proof AI can sell. Learn how I did it.</h3>
                <p>Real results from AI-powered digital products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className={`final-cta-section ${isVisible['final-cta'] ? 'visible' : ''}`}>
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your A.I. Journey?</h2>
            <p className="cta-subtitle">
              Join thousands of students already transforming their lives with AI
            </p>
            
            <div className="final-form-container">
              <form action="https://mailer.fidelisozuawala.com/subscribe" method="POST" acceptCharset="utf-8" className="final-opt-in-form">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div style={{display: 'none'}}>
                  <input type="text" name="hp" />
                </div>
                <input type="hidden" name="list" value="892sYrpE76387638P0hXpIyaR7763w" />
                <input type="hidden" name="subform" value="yes" />
                <button type="submit" className="cta-button secondary">
                  <span>Join Now – Start Learning & Earning with A.I.</span>
                  <div className="button-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Background Elements */}
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </div>
  );
}

export default App;