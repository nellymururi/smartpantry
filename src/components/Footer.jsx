import { getPatternDataUrl } from './AfricanPattern';

const Footer = () => (
  <footer style={{
    position: 'relative', zIndex: 10,
    borderTop: '1px solid rgba(245,158,11,0.12)',
    padding: '60px 32px 36px',
    overflow: 'hidden',
  }}>
    {/* Colour strip at top */}
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
      background: 'linear-gradient(90deg, transparent, #F59E0B, #C84B31, #1B4F8A, #F59E0B, transparent)',
      opacity: 0.6,
    }} />

    {/* Faint pattern */}
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      backgroundImage: getPatternDataUrl('#C9980A'),
      backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
      opacity: 0.03,
    }} />

    <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

      {/* Top row — brand + product links + newsletter */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', flexWrap: 'wrap', gap: '48px',
        marginBottom: '48px',
      }}>

        {/* Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '9px',
              background: 'linear-gradient(135deg, #F59E0B, #d97706)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px',
            }}>🥘</div>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: '18px',
              background: 'linear-gradient(135deg, #fde68a, #F59E0B)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>SmartPantry</span>
          </div>
          <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'rgba(255,248,235,0.35)' }}>
            Your intelligent kitchen companion. Track groceries, reduce waste, and cook smarter — every day.
          </p>
          {/* Socials */}
          <div style={{ display: 'flex', gap: '10px' }}>
            {['𝕏', 'in', 'ig'].map((s, i) => (
              <a key={i} href="#" style={{
                width: '34px', height: '34px', borderRadius: '9px',
                background: 'rgba(255,248,235,0.05)',
                border: '1px solid rgba(255,248,235,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: 700,
                color: 'rgba(255,248,235,0.45)',
                transition: 'all 0.2s ease',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(200,75,49,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(200,75,49,0.3)';
                  e.currentTarget.style.color = '#C84B31';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,248,235,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,248,235,0.1)';
                  e.currentTarget.style.color = 'rgba(255,248,235,0.45)';
                }}
              >{s}</a>
            ))}
          </div>
        </div>

        {/* Product links only */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#C84B31',
          }}>Product</p>
          {['Features', 'How it works', 'Pricing', 'Roadmap'].map(link => (
            <a key={link} href="#"
              style={{ fontSize: '13px', color: 'rgba(255,248,235,0.38)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,248,235,0.85)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,248,235,0.38)'}
            >{link}</a>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '260px' }}>
          <p style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#1B4F8A',
          }}>Stay Updated</p>
          <p style={{ fontSize: '12px', color: 'rgba(255,248,235,0.35)', lineHeight: 1.6 }}>
            Get tips on reducing food waste and new feature updates.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <input type="email" placeholder="your@email.com"
              style={{
                padding: '10px 14px', borderRadius: '10px', fontSize: '13px',
                background: 'rgba(255,248,235,0.05)',
                border: '1px solid rgba(255,248,235,0.1)',
                color: 'rgba(255,248,235,0.8)', outline: 'none', width: '100%',
              }} />
            <button style={{
              padding: '10px 14px', borderRadius: '10px',
              fontSize: '13px', fontWeight: 700,
              color: '#ffffff',
              background: 'linear-gradient(135deg, #C84B31, #a83828)',
              border: 'none', cursor: 'pointer',
              boxShadow: '0 0 16px rgba(200,75,49,0.25)',
              transition: 'box-shadow 0.2s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(200,75,49,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 16px rgba(200,75,49,0.25)'}
            >Subscribe !</button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: '1px', marginBottom: '24px', borderRadius: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.15), transparent)',
      }} />

      {/* Bottom */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '12px',
      }}>
        <p style={{ fontSize: '12px', color: 'rgba(255,248,235,0.22)' }}>
          © 2026 SmartPantry.
        </p>
        <p style={{ fontSize: '12px', color: 'rgba(255,248,235,0.22)' }}>
          Crafted by{' '}
          <span style={{ color: '#F59E0B', fontWeight: 600 }}>Nelly Mururi</span>
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;