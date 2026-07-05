import { useEffect, useRef } from 'react';

const GROCERIES = [
  '🍅','🥦','🧅','🥕','🍋','🥚','🧄','🍞',
];

const SmartBasket = () => {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.g-item');
    if (!items) return;
    const total = items.length;
    items.forEach((el, i) => {
      const t = i / (total - 1);
      const angle = t * Math.PI;
      const tx = (t - 0.5) * 2 * 105;
      const ty = -(Math.sin(angle) * 78 + 14);
      el.style.setProperty('--tx', `${tx}px`);
      el.style.setProperty('--ty', `${ty}px`);
      el.style.animationDelay = `${i * 0.28}s`;
    });
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', width: '300px', height: '300px', flexShrink: 0 }}>

      {/* Ambient glow — no spin */}
      <div style={{
        position: 'absolute', inset: '-28px', borderRadius: '50%',
background: 'radial-gradient(circle, rgba(139,32,32,0.18) 0%, rgba(26,58,107,0.08) 55%, transparent 70%)',        filter: 'blur(22px)',
        animation: 'spGlow 3s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Static gradient border */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        padding: '1.5px',
        background: 'linear-gradient(135deg, rgba(245,158,11,0.75) 0%, rgba(16,185,129,0.3) 45%, rgba(245,158,11,0.15) 65%, rgba(16,185,129,0.45) 100%)',
        animation: 'spBorder 3s ease-in-out infinite',
      }}>
        <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'transparent' }} />
      </div>

      {/* Glass circle */}
      <div style={{
        position: 'absolute', inset: '3px', borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 30%, rgba(14,46,28,0.97) 0%, rgba(4,14,9,0.99) 100%)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        overflow: 'hidden',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.4)',
      }}>
        {/* Specular glare */}
        <div style={{
          position: 'absolute', top: '8%', left: '12%',
          width: '38%', height: '38%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.055) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* Adinkra tile inside */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent('<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M22 22 Q29 11 36 19 Q43 27 36 34 Q28 42 18 35 Q8 27 14 16 Q20 5 34 11" fill="none" stroke="#C9980A" stroke-width="1.8" stroke-linecap="round"/><polyline points="54,44 62,56 70,44 78,56 86,44" fill="none" stroke="#C9980A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="4,96 14,107 24,96 34,107 44,96" fill="none" stroke="#C9980A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="169" cy="104" r="13" fill="none" stroke="#C9980A" stroke-width="1.8"/><polyline points="108,138 118,152 128,138 138,152 148,138" fill="none" stroke="#C9980A" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>')}`,
          backgroundRepeat: 'repeat', backgroundSize: '100px 100px',
          opacity: 0.11,
        }} />
        {/* Top shimmer */}
        <div style={{
          position: 'absolute', top: 0, left: '18%', right: '18%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)',
        }} />
      </div>

      {/* Basket */}
      <div style={{
        position: 'absolute', left: '50%', top: '54%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
      }}>
        <span style={{
          fontSize: '64px', lineHeight: 1, userSelect: 'none', display: 'block',
          filter: 'drop-shadow(0 0 18px rgba(245,158,11,0.72)) drop-shadow(0 3px 10px rgba(0,0,0,0.9))',
          animation: 'spFloat 5s ease-in-out infinite',
        }}>🧺</span>

        {/* Wifi */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
          {[3,2,1].map(i => (
            <div key={i} style={{
              width: `${i*7}px`, height: `${i*3.5}px`,
              borderTop: '1.5px solid rgba(16,185,129,0.8)', borderRadius: '50%',
              animation: `spWifi 2s ease-in-out ${(3-i)*0.22}s infinite`,
            }} />
          ))}
          <div style={{
            width: '5px', height: '5px', borderRadius: '50%', marginTop: '2px',
            background: '#10B981', boxShadow: '0 0 8px rgba(16,185,129,1)',
          }} />
        </div>
      </div>

      {/* Groceries */}
      {GROCERIES.map((emoji, i) => (
        <div key={i} className="g-item" style={{
          position: 'absolute', left: '50%', top: '54%',
          transform: 'translate(-50%, -50%)',
          fontSize: '21px', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none', zIndex: 20,
          animation: 'spArc 6s cubic-bezier(0.34,1.15,0.64,1) infinite',
        }}>{emoji}</div>
      ))}

      <style>{`
        @keyframes spArc {
          0%   { transform:translate(-50%,-50%) translate(0,0) scale(0.05); opacity:0; }
          10%  { opacity:1; transform:translate(-50%,-50%) translate(0,0) scale(0.4); }
          38%  { transform:translate(-50%,-50%) translate(var(--tx),var(--ty)) scale(1); opacity:1; }
          62%  { transform:translate(-50%,-50%) translate(var(--tx),var(--ty)) scale(1); opacity:1; }
          85%  { transform:translate(-50%,-50%) translate(calc(var(--tx)*0.1),-3px) scale(0.45); opacity:0.4; }
          100% { transform:translate(-50%,-50%) translate(0,0) scale(0.05); opacity:0; }
        }
        @keyframes spFloat {
          0%,100% { transform:translateY(0); }
          50%      { transform:translateY(-7px); }
        }
        @keyframes spGlow {
          0%,100% { opacity:0.5; }
          50%      { opacity:1; }
        }
        @keyframes spBorder {
          0%,100% { opacity:0.65; }
          50%      { opacity:1; }
        }
        @keyframes spWifi {
          0%,100% { opacity:0.18; }
          50%      { opacity:1; }
        }
      `}</style>
    </div>
  );
};

export default SmartBasket;