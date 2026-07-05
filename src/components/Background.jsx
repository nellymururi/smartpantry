import mudcloth from '../assets/smartpantry_visual.jpg';

const Background = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>

    {/* Warm off-white base — not cold black */}
    <div style={{ position: 'absolute', inset: 0, background: '#0d0a04' }} />

    {/* Mudcloth — more visible now */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url(${mudcloth})`,
      backgroundSize: '480px auto',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      opacity: 0.22,
    }} />

    {/* Lighter overlay — lets pattern breathe */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'rgba(10,7,2,0.62)',
    }} />

    {/* Warm gold centre wash */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 50% 35%, rgba(180,110,0,0.12) 0%, transparent 60%)',
    }} />

    {/* Subtle red orb — top left */}
    <div style={{
      position: 'absolute', top: '5%', left: '3%',
      width: '420px', height: '420px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(200,75,49,0.1) 0%, transparent 70%)',
      filter: 'blur(80px)',
    }} />

    {/* Subtle blue orb — bottom right */}
    <div style={{
      position: 'absolute', bottom: '10%', right: '5%',
      width: '380px', height: '380px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(27,79,138,0.12) 0%, transparent 70%)',
      filter: 'blur(70px)',
    }} />

    {/* Edge vignette */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at center, transparent 25%, rgba(8,5,1,0.7) 100%)',
    }} />
  </div>
);

export default Background;