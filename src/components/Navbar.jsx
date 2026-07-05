import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: '24px', left: 0, right: 0,
      zIndex: 100,
      display: 'flex', justifyContent: 'center',
      padding: '0 24px',
      pointerEvents: 'none',
    }}>
      {/* Gradient border pill wrapper */}
      <div style={{
        pointerEvents: 'all',
        borderRadius: '100px',
        padding: '1px',
        background: scrolled
          ? 'linear-gradient(135deg, rgba(245,158,11,0.7), rgba(16,185,129,0.35), rgba(245,158,11,0.7))'
          : 'linear-gradient(135deg, rgba(245,158,11,0.28), rgba(16,185,129,0.14), rgba(245,158,11,0.28))',
        boxShadow: scrolled ? '0 8px 48px rgba(0,0,0,0.55), 0 0 24px rgba(245,158,11,0.07)' : 'none',
        transition: 'background 0.5s, box-shadow 0.5s',
      }}>
        <nav style={{
          borderRadius: '100px',
          background: scrolled ? 'rgba(2,10,6,0.94)' : 'rgba(2,10,6,0.78)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          padding: '11px 24px',
          display: 'flex', alignItems: 'center', gap: '28px',
          transition: 'background 0.5s',
        }}>

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <div style={{
              width: '26px', height: '26px', borderRadius: '7px', fontSize: '13px',
              background: 'linear-gradient(135deg, rgba(245,158,11,0.18), rgba(16,185,129,0.12))',
              border: '1px solid rgba(245,158,11,0.28)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>🥘</div>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '15px',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #F59E0B, #d97706)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Smart</span>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 400, fontSize: '15px',
              letterSpacing: '-0.02em',
              color: 'rgba(255,255,255,0.38)',
              marginLeft: '-4px',
            }}>Pantry</span>
          </a>

          {/* Nav links */}
          {['Home', 'Features', 'About'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{
                fontSize: '13px', fontWeight: 500, letterSpacing: '0.01em',
                color: 'rgba(255,255,255,0.42)', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.42)'}
            >{link}</a>
          ))}

          {/* CTA */}
          <a href="#auth" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '8px 18px', borderRadius: '100px',
            fontSize: '13px', fontWeight: 700, letterSpacing: '0.02em',
            color: '#020a06', background: 'linear-gradient(135deg, #F59E0B, #d97706)',
            boxShadow: '0 0 16px rgba(245,158,11,0.28)',
            transition: 'box-shadow 0.3s, transform 0.2s', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(245,158,11,0.55)'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 16px rgba(245,158,11,0.28)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >Get Started</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;