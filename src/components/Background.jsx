import mudcloth from '../assets/smartpantry_visual.jpg';

const Background = () => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>

    {/* True dark base */}
    <div style={{ position: 'absolute', inset: 0, background: '#020a06' }} />

    {/* Mudcloth image — raised opacity so it's actually visible */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `url(${mudcloth})`,
      backgroundSize: '480px auto',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      opacity: 0.35,
    }} />

    {/* Dark overlay — lighter than before so image shows through */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'rgba(2,10,6,0.72)',
    }} />

    {/* Warm amber tone wash */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 50% 40%, rgba(161,98,7,0.1) 0%, transparent 65%)',
    }} />

    {/* Colour orbs */}
    <div style={{
      position: 'absolute', top: '8%', left: '4%',
      width: '500px', height: '500px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(6,95,70,0.22) 0%, transparent 70%)',
      filter: 'blur(80px)',
    }} />
    <div style={{
      position: 'absolute', bottom: '12%', right: '6%',
      width: '420px', height: '420px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(161,98,7,0.15) 0%, transparent 70%)',
      filter: 'blur(70px)',
    }} />

    {/* Edge vignette */}
    <div style={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at center, transparent 20%, rgba(2,10,6,0.75) 100%)',
    }} />
  </div>
);

export default Background;