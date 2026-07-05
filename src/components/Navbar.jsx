import { useState, useEffect } from 'react';
import { getPatternDataUrl } from './AfricanPattern';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(245,158,11,0.12)',
      transition: 'background 0.5s ease, backdrop-filter 0.5s ease',
      background: scrolled ? 'rgba(13,10,4,0.92)' : 'rgba(13,10,4,0.75)',
      backdropFilter: 'blur(32px)',
      WebkitBackdropFilter: 'blur(32px)',
      overflow: 'hidden',
    }}>

      {/* Pattern strip at bottom — mirrors footer top strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #F59E0B, #C84B31, #1B4F8A, #F59E0B, transparent)',
        opacity: 0.5,
      }} />

      {/* Faint pattern background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: getPatternDataUrl('#C9980A'),
        backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
        opacity: 0.025,
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 32px',
        height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative',
      }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '9px',
            background: 'linear-gradient(135deg, #F59E0B, #d97706)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px', flexShrink: 0,
          }}>🥘</div>
          <span style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '18px',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #fde68a, #F59E0B)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>Smart</span>
          <span style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 300, fontSize: '18px',
            letterSpacing: '-0.02em', marginLeft: '-4px',
            color: 'rgba(255,248,235,0.45)',
          }}>Pantry</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {['Home', 'Features', 'About'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              style={{
                fontSize: '14px', fontWeight: 500,
                color: 'rgba(255,248,235,0.45)',
                padding: '7px 14px', borderRadius: '8px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'rgba(255,248,235,0.9)';
                e.currentTarget.style.background = 'rgba(255,248,235,0.06)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,248,235,0.45)';
                e.currentTarget.style.background = 'transparent';
              }}
            >{link}</a>
          ))}

          {/* Divider */}
          <div style={{
            width: '1px', height: '20px', margin: '0 8px',
            background: 'rgba(255,248,235,0.1)',
          }} />

          {/* CTA — red */}
          <a href="#auth" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '9px 22px', borderRadius: '9px',
            fontSize: '14px', fontWeight: 700, letterSpacing: '0.01em',
            color: '#ffffff',
            background: 'linear-gradient(135deg, #C84B31, #a83828)',
            boxShadow: '0 0 20px rgba(200,75,49,0.3)',
            transition: 'all 0.25s ease', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 32px rgba(200,75,49,0.55)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(200,75,49,0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >Get Started </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-btn"
          style={{
            display: 'none', background: 'none', border: 'none',
            color: '#F59E0B', fontSize: '22px', cursor: 'pointer',
          }}
        >{menuOpen ? '✕' : '☰'}</button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          padding: '16px 32px 24px',
          background: 'rgba(13,10,4,0.98)',
          borderTop: '1px solid rgba(245,158,11,0.1)',
          display: 'flex', flexDirection: 'column', gap: '4px',
        }}>
          {['Home', 'Features', 'About'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '14px', fontWeight: 500,
                color: 'rgba(255,248,235,0.55)',
                padding: '10px 12px', borderRadius: '8px',
              }}
            >{link}</a>
          ))}
          <a href="#auth"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '8px', padding: '12px',
              borderRadius: '9px', textAlign: 'center',
              fontSize: '14px', fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #C84B31, #a83828)',
            }}
          >Get Started </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;