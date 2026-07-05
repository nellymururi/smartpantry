import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import SmartBasket from '../components/SmartBasket';
import { getPatternDataUrl } from '../components/AfricanPattern';

/* ── Sparkline SVG ── */
const Sparkline = ({ color = '#F59E0B', points = '0,20 10,15 20,17 30,8 40,12 50,4 60,7' }) => (
  <svg width="64" height="28" viewBox="0 0 64 28" fill="none">
    <polyline points={points} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <polyline points={points} stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.08" />
  </svg>
);

/* ── Pantry shelf illustration ── */
const PantryShelf = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
    {[
      ['🥫','🧴','🫙','🥫'],
      ['🥕','🧅','🍋','🧄'],
      ['🍞','🥚','🍅','🧀'],
    ].map((row, si) => (
      <div key={si}>
        <div style={{ display: 'flex', gap: '10px', paddingBottom: '6px' }}>
          {row.map((item, ii) => (
            <span key={ii} style={{ fontSize: '22px', lineHeight: 1 }}>{item}</span>
          ))}
        </div>
        <div style={{
          height: '3px', borderRadius: '2px',
// Hero card border wrapper gradient — replace the existing one
            background: 'linear-gradient(135deg, #ef4444 0%, #06b6d4 25%, #22c55e 50%, #eab308 75%, #ef4444 100%)',
          boxShadow: '0 1px 4px rgba(245,158,11,0.2)',
        }} />
      </div>
    ))}
  </div>
);

const BENTO = [
  {
    id: 'big',
    icon: '🥫',
    title: 'Track Your Pantry',
    desc: 'Add, remove and organise every item in your kitchen. Know exactly what you own, always.',
    accent: '#F59E0B',
    glow: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.16)',
    span: 2,
    big: true,
  },
  {
    id: 'expiry',
    icon: '⏰',
    title: 'Expiry Alerts',
    stat: '3 days',
    statLabel: 'avg. saved before waste',
    desc: 'Never eat expired food again.',
    accent: '#ef4444',
    glow: 'rgba(239,68,68,0.07)',
    border: 'rgba(239,68,68,0.16)',
    sparkPoints: '0,22 10,18 20,20 30,12 40,15 50,7 60,10',
    span: 1,
  },
  {
    id: 'recipes',
    icon: '🍳',
    title: 'Recipes',
    stat: '12+',
    statLabel: 'recipes from your pantry',
    desc: 'Cook with what you have.',
    accent: '#10B981',
    glow: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.16)',
    sparkPoints: '0,24 10,20 20,18 30,14 40,10 50,6 60,4',
    span: 1,
  },
  {
    id: 'shopping',
    icon: '🛒',
    title: 'Smart Shopping',
    stat: '47',
    statLabel: 'items auto-tracked',
    desc: 'Shopping lists that write themselves.',
    accent: '#6366f1',
    glow: 'rgba(99,102,241,0.07)',
    border: 'rgba(99,102,241,0.16)',
    sparkPoints: '0,20 10,16 20,19 30,11 40,13 50,5 60,8',
    span: 1,
  },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
});

const Home = () => {
  const glowRef = useRef(null);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      position: 'relative', zIndex: 10,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '120px 32px 80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* ══ HERO CARD ══ */}
        <motion.div {...inView(0)}>
          {/* Gradient border wrapper — pulses */}
          <div ref={glowRef} style={{
            borderRadius: '28px',
            padding: '1px',
            background: 'linear-gradient(135deg, rgba(245,158,11,0.55) 0%, rgba(16,185,129,0.25) 40%, rgba(245,158,11,0.1) 65%, rgba(16,185,129,0.35) 100%)',
            animation: 'heroBorder 3s ease-in-out infinite',
            position: 'relative',
          }}>
            {/* Glass card */}
            <div style={{
              borderRadius: '27px',
              background: 'rgba(4,14,9,0.55)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.3), 0 32px 80px rgba(0,0,0,0.6)',
              position: 'relative',
              overflow: 'hidden',
              padding: '60px 64px',
            }}>

              {/* Specular glare */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '45%', height: '55%', pointerEvents: 'none',
                background: 'radial-gradient(circle at 15% 15%, rgba(255,255,255,0.05) 0%, transparent 60%)',
              }} />

              {/* Adinkra inside panel — very faint */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '27px',
                backgroundImage: getPatternDataUrl('#C9980A'),
                backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
                opacity: 0.03, pointerEvents: 'none',
              }} />

              {/* Two-column layout */}
              <div style={{
                display: 'flex', flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between',
                gap: '48px', flexWrap: 'wrap',
              }}>

                {/* LEFT */}
                <div style={{
                  flex: '1 1 400px', minWidth: 0,
                  display: 'flex', flexDirection: 'column', gap: '26px',
                }}>

                  {/* Badge */}
                  <motion.div {...inView(0.12)} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '9px',
                    padding: '6px 14px', borderRadius: '100px', width: 'fit-content',
                    background: 'rgba(16,185,129,0.07)',
                    border: '1px solid rgba(16,185,129,0.2)',
                  }}>
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                      background: '#10B981',
                      boxShadow: '0 0 8px rgba(16,185,129,1), 0 0 16px rgba(16,185,129,0.5)',
                      animation: 'liveDot 2.4s ease-in-out infinite', display: 'inline-block',
                    }} />
                    <span style={{
                      fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'rgba(16,185,129,0.82)', whiteSpace: 'nowrap',
                    }}>Your intelligent kitchen companion</span>
                  </motion.div>

                  {/* Headline — Syne 900, stacked */}
                  <motion.div {...inView(0.18)}>
                    <div style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 900,
                      fontSize: 'clamp(3.2rem, 6.5vw, 6rem)',
                      lineHeight: 1.0, letterSpacing: '-0.04em',
                    }}>
                      {/* SMART — white outline */}
                      <div style={{
                        WebkitTextStroke: '2px #ef4444',
                        color: 'transparent',
                        display: 'block',
                      }}>SMART</div>
                      {/* PANTRY — amber filled */}
                      <div style={{
                        background: 'linear-gradient(135deg, #fde68a 0%, #F59E0B 45%, #d97706 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 32px rgba(245,158,11,0.28))',
                        display: 'block',
                      }}>PANTRY.</div>
                    </div>
                  </motion.div>

                  {/* Type animation */}
                  <motion.div {...inView(0.26)} style={{
                    display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '7px',
                  }}>
                    <span style={{ fontSize: '17px', fontWeight: 300, color: 'rgba(255,255,255,0.35)' }}>
                      We help you
                    </span>
                    <TypeAnimation
                      sequence={[
                        'track your groceries.', 2600,
                        'reduce food waste.', 2600,
                        'catch expired items early.', 2600,
                        'discover new recipes.', 2600,
                        'plan your weekly shop.', 2600,
                        'take control of your kitchen.', 2600,
                      ]}
                      wrapper="span"
                      speed={62}
                      repeat={Infinity}
                      style={{
                        fontSize: '17px', fontWeight: 700,
                        background: 'linear-gradient(90deg, #F59E0B, #d97706)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 10px rgba(245,158,11,0.4))',
                      }}
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.p {...inView(0.32)} style={{
                    fontSize: '15px', lineHeight: 1.85,
                    color: 'rgba(255,255,255,0.35)', maxWidth: '440px',
                  }}>
                    Smart Pantry connects your kitchen to intelligence — tracking everything
                    you own, alerting you before things expire, and turning your ingredients
                    into meals you'll love.
                  </motion.p>

                  {/* Buttons */}
                  <motion.div {...inView(0.38)} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <motion.a
                      href="#auth"
                      whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(245,158,11,0.5)' }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '7px',
                        padding: '13px 30px', borderRadius: '100px',
                        fontSize: '14px', fontWeight: 700, letterSpacing: '0.02em',
                        color: '#020a06', background: 'linear-gradient(135deg, #F59E0B, #d97706)',
                        boxShadow: '0 0 22px rgba(245,158,11,0.28), 0 4px 20px rgba(0,0,0,0.4)',
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}
                    >Get Started <span>→</span></motion.a>

                    <motion.a
                      href="#features"
                      whileHover={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '13px 30px', borderRadius: '100px',
                        fontSize: '14px', fontWeight: 600, letterSpacing: '0.02em',
                        color: 'rgba(255,255,255,0.48)',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}
                    >See Features ↓</motion.a>
                  </motion.div>
                </div>

                {/* RIGHT — basket */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  style={{ flexShrink: 0 }}
                >
                  <SmartBasket />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══ BENTO GRID ══ */}
        <div id="features" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          width: '100%',
        }}>
          {BENTO.map((card, i) => (
            <motion.div
              key={card.id}
              {...inView(0.1 + i * 0.08)}
              whileHover={{
                y: -5,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              style={{
                gridColumn: card.span === 2 ? 'span 2' : 'span 1',
                borderRadius: '20px',
                padding: card.big ? '32px' : '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: card.big ? '20px' : '14px',
                position: 'relative',
                overflow: 'hidden',
                background: 'rgba(4,14,9,0.6)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: `1px solid ${card.border}`,
                boxShadow: `inset 0 0 50px ${card.glow}, 0 8px 40px rgba(0,0,0,0.32)`,
                cursor: 'default',
              }}
            >
              {/* Adinkra watermark */}
              <div style={{
                position: 'absolute', bottom: '-20px', right: '-20px',
                width: '120px', height: '120px', pointerEvents: 'none',
                backgroundImage: getPatternDataUrl(card.accent),
                backgroundRepeat: 'repeat', backgroundSize: '120px 120px',
                opacity: 0.055,
              }} />

              {/* Top shimmer */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
                background: `linear-gradient(90deg, transparent, ${card.accent}44, transparent)`,
                pointerEvents: 'none',
              }} />

              {/* Icon */}
              <div style={{
                width: '46px', height: '46px', borderRadius: '13px', fontSize: '21px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: card.glow, border: `1px solid ${card.border}`,
                flexShrink: 0,
              }}>{card.icon}</div>

              {/* Accent line */}
              <div style={{
                width: '22px', height: '2px', borderRadius: '2px',
                background: card.accent, boxShadow: `0 0 8px ${card.accent}88`,
              }} />

              {/* Content */}
              {card.big ? (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <p style={{ color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '16px' }}>
                      {card.title}
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '13px', lineHeight: 1.7, maxWidth: '320px' }}>
                      {card.desc}
                    </p>
                  </div>
                  <PantryShelf />
                </>
              ) : (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <p style={{
                      fontFamily: "'Syne',sans-serif", fontWeight: 800,
                      fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.03em',
                      color: card.accent,
                    }}>{card.stat}</p>
                    <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '11px', letterSpacing: '0.02em' }}>
                      {card.statLabel}
                    </p>
                  </div>
                  <p style={{ color: '#fff', fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '14px' }}>
                    {card.title}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.32)', fontSize: '12px', lineHeight: 1.65 }}>
                    {card.desc}
                  </p>
                  <Sparkline color={card.accent} points={card.sparkPoints} />
                </>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes heroBorder {
          0%,100% { opacity:0.7; }
          50%      { opacity:1; }
        }
        @keyframes liveDot {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.35; transform:scale(0.7); }
        }
        @media (max-width: 900px) {
          #features { grid-template-columns: repeat(2,1fr) !important; }
          #features > *[style*="span 2"] { grid-column: span 2 !important; }
        }
        @media (max-width: 560px) {
          #features { grid-template-columns: 1fr !important; }
          #features > *[style*="span 2"] { grid-column: span 1 !important; }
          section { padding: 96px 18px 60px !important; }
        }
      `}</style>
    </section>
  );
};

export default Home;