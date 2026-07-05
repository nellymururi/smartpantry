import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import SmartBasket from '../components/SmartBasket';
import { getPatternDataUrl } from '../components/AfricanPattern';

const Sparkline = ({ color = '#C84B31', points = '0,20 10,15 20,17 30,8 40,12 50,4 60,7' }) => (
  <svg width="64" height="28" viewBox="0 0 64 28" fill="none">
    <polyline points={points} stroke={color} strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
    <polyline points={points} stroke={color} strokeWidth="6"
      strokeLinecap="round" strokeLinejoin="round" opacity="0.08" />
  </svg>
);

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
          height: '2px', borderRadius: '2px',
          background: 'linear-gradient(90deg, rgba(200,75,49,0.5), rgba(27,79,138,0.3), transparent)',
        }} />
      </div>
    ))}
  </div>
);

const FEATURES = [
  {
    id: 'pantry', icon: '🥫', title: 'Groceries Management',
    stat: '100+', statLabel: 'items tracked',
    desc: 'Add, remove and organise every grocery in real time. Always know what you own.',
    accent: '#C84B31', glow: 'rgba(200,75,49,0.07)', border: 'rgba(200,75,49,0.2)',
    sparkPoints: '0,22 10,18 20,20 30,12 40,15 50,7 60,10',
  },
  {
    id: 'expiry', icon: '⏰', title: 'Expiry Alerts',
    stat: '0', statLabel: 'items wasted',
    desc: 'Smart notifications before your groceries expire. Never eat bad food again.',
    accent: '#1B4F8A', glow: 'rgba(27,79,138,0.07)', border: 'rgba(27,79,138,0.2)',
    sparkPoints: '0,20 10,18 20,15 30,10 40,8 50,5 60,3',
  },
  {
    id: 'recipes', icon: '🍳', title: 'Recipe Suggestions',
    stat: '12+', statLabel: 'recipes today',
    desc: 'Discover what to cook using only what you already have at home.',
    accent: '#C84B31', glow: 'rgba(200,75,49,0.07)', border: 'rgba(200,75,49,0.2)',
    sparkPoints: '0,24 10,20 20,18 30,14 40,10 50,6 60,4',
  },
  {
    id: 'shopping', icon: '🛒', title: 'Smart Shopping',
    stat: 'Auto', statLabel: 'list generated',
    desc: 'Shopping lists that write themselves when items run dangerously low.',
    accent: '#1B4F8A', glow: 'rgba(27,79,138,0.07)', border: 'rgba(27,79,138,0.2)',
    sparkPoints: '0,20 10,16 20,19 30,11 40,13 50,5 60,8',
  },
];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay },
});

const Home = () => (
  <>
    {/* ══ HERO ══ */}
    <section id="home" style={{
      minHeight: '100vh', position: 'relative', zIndex: 10,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '100px 32px 80px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <motion.div {...inView(0)}>
          {/* Hero card — red/blue gradient border */}
          <div style={{
            borderRadius: '28px', padding: '1px',
            background: 'linear-gradient(135deg, rgba(200,75,49,0.6) 0%, rgba(27,79,138,0.3) 40%, rgba(200,75,49,0.15) 70%, rgba(27,79,138,0.4) 100%)',
            animation: 'heroBorder 3s ease-in-out infinite',
          }}>
            <div style={{
              borderRadius: '27px',
              background: 'rgba(10,6,2,0.6)',
              backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.4), 0 32px 80px rgba(0,0,0,0.6)',
              position: 'relative', overflow: 'hidden',
              padding: '60px 64px',
            }}>
              {/* Specular glare */}
              <div style={{
                position: 'absolute', top: 0, left: 0,
                width: '40%', height: '50%', pointerEvents: 'none',
                background: 'radial-gradient(circle at 12% 12%, rgba(255,255,255,0.05) 0%, transparent 60%)',
              }} />
              {/* Faint adinkra inside */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: '27px', pointerEvents: 'none',
                backgroundImage: getPatternDataUrl('#C9980A'),
                backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
                opacity: 0.025,
              }} />

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
                    background: 'rgba(200,75,49,0.08)',
                    border: '1px solid rgba(200,75,49,0.25)',
                  }}>
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
                      background: '#C84B31',
                      boxShadow: '0 0 8px rgba(200,75,49,1), 0 0 16px rgba(200,75,49,0.5)',
                      animation: 'liveDot 2.4s ease-in-out infinite', display: 'inline-block',
                    }} />
                    <span style={{
                      fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em',
                      textTransform: 'uppercase', color: 'rgba(255,248,235,0.65)', whiteSpace: 'nowrap',
                    }}>Your intelligent kitchen companion</span>
                  </motion.div>

                  {/* Headline */}
                  <motion.div {...inView(0.18)}>
                    <div style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 900,
                      fontSize: 'clamp(3.2rem, 6.5vw, 6rem)',
                      lineHeight: 1.0, letterSpacing: '-0.04em',
                    }}>
                      <div style={{
                        WebkitTextStroke: '2px #ffffff',
                        color: 'transparent', display: 'block',
                      }}>SMART</div>
                      <div style={{
                        background: 'linear-gradient(135deg, #fde68a 0%, #F59E0B 45%, #d97706 100%)',
                        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 28px rgba(245,158,11,0.3))',
                        display: 'block',
                      }}>PANTRY.</div>
                    </div>
                  </motion.div>

                  {/* Switching feature titles */}
                  <motion.div {...inView(0.26)}>
                    <TypeAnimation
                      sequence={[
                        '🥫  Groceries Management', 3000,
                        '⏰  Expiry Alerts ', 3000,
                        '🍳  Recipe Suggestions ', 3000,
                        '🛒  Smart Shopping Lists ', 3000,
                        '📊  Track what you own, in real time', 3000,
                        '♻️  Reduce food waste, save money', 3000,
                      ]}
                      wrapper="span"
                      speed={55}
                      repeat={Infinity}
                      style={{
                        fontSize: '18px', fontWeight: 700, display: 'block',
                        color: 'rgba(255,248,235,0.85)',
                      }}
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.p {...inView(0.32)} style={{
                    fontSize: '15px', lineHeight: 1.85,
                    color: 'rgba(255,248,235,0.38)', maxWidth: '440px',
                  }}>
                    Smart Pantry connects your kitchen to intelligence, tracking everything
                    you own, alerting you before things expire, and turning your ingredients
                    into meals you'll love.
                  </motion.p>

                  {/* Buttons — red primary, white ghost */}
                  <motion.div {...inView(0.38)} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <motion.a href="#auth"
                      whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(200,75,49,0.55)' }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '7px',
                        padding: '13px 30px', borderRadius: '10px',
                        fontSize: '14px', fontWeight: 700, letterSpacing: '0.01em',
                        color: '#ffffff',
                        background: 'linear-gradient(135deg, #C84B31, #a83828)',
                        boxShadow: '0 0 22px rgba(200,75,49,0.3), 0 4px 20px rgba(0,0,0,0.4)',
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}
                    >Get Started </motion.a>

                    <motion.a href="#features"
                      whileHover={{
                        background: 'rgba(255,255,255,0.08)',
                        borderColor: 'rgba(255,255,255,0.3)',
                        color: '#ffffff', scale: 1.02,
                      }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: 'inline-flex', alignItems: 'center',
                        padding: '13px 30px', borderRadius: '10px',
                        fontSize: '14px', fontWeight: 600,
                        color: 'rgba(255,248,235,0.55)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}
                    >See Features </motion.a>
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
      </div>
    </section>

    {/* ══ FEATURES — all 4 in one row ══ */}
    <section id="features" style={{
      position: 'relative', zIndex: 10,
      padding: '80px 32px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

        {/* Section label */}
        <motion.div {...inView(0)} style={{
          display: 'flex', flexDirection: 'column', gap: '12px',
          marginBottom: '48px',
        }}>
          <span style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#C84B31',
          }}>What we do</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 900,
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            letterSpacing: '-0.03em', color: '#ffffff',
          }}>Everything your kitchen needs</h2>
        </motion.div>

        {/* 4 cards — one row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px', width: '100%',
        }} id="feature-grid">
          {FEATURES.map((card, i) => (
            <motion.div key={card.id} {...inView(0.1 + i * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              style={{
                borderRadius: '20px', padding: '28px',
                display: 'flex', flexDirection: 'column', gap: '14px',
                position: 'relative', overflow: 'hidden',
                background: 'rgba(10,6,2,0.65)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: `1px solid ${card.border}`,
                boxShadow: `inset 0 0 50px ${card.glow}, 0 8px 40px rgba(0,0,0,0.35)`,
                cursor: 'default',
              }}
            >
              {/* Top shimmer */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
                background: `linear-gradient(90deg, transparent, ${card.accent}55, transparent)`,
                pointerEvents: 'none',
              }} />
              {/* Adinkra watermark */}
              <div style={{
                position: 'absolute', bottom: '-16px', right: '-16px',
                width: '100px', height: '100px', pointerEvents: 'none',
                backgroundImage: getPatternDataUrl(card.accent),
                backgroundRepeat: 'repeat', backgroundSize: '100px 100px',
                opacity: 0.05,
              }} />

              {/* Icon */}
              <div style={{
                width: '46px', height: '46px', borderRadius: '13px',
                fontSize: '21px', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: card.glow, border: `1px solid ${card.border}`,
              }}>{card.icon}</div>

              {/* Accent line */}
              <div style={{
                width: '22px', height: '2px', borderRadius: '2px',
                background: card.accent, boxShadow: `0 0 8px ${card.accent}88`,
              }} />

              {/* Stat */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{
                  fontFamily: "'Syne',sans-serif", fontWeight: 800,
                  fontSize: '1.9rem', lineHeight: 1, letterSpacing: '-0.03em',
                  color: card.accent,
                }}>{card.stat}</p>
                <p style={{ color: 'rgba(255,248,235,0.25)', fontSize: '11px', letterSpacing: '0.02em' }}>
                  {card.statLabel}
                </p>
              </div>

              <p style={{
                color: '#ffffff', fontFamily: "'Syne',sans-serif",
                fontWeight: 700, fontSize: '14px',
              }}>{card.title}</p>
              <p style={{ color: 'rgba(255,248,235,0.35)', fontSize: '12px', lineHeight: 1.7 }}>
                {card.desc}
              </p>
              <Sparkline color={card.accent} points={card.sparkPoints} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ ABOUT ══ */}
    <section id="about" style={{
      position: 'relative', zIndex: 10,
      padding: '80px 32px 100px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

        {/* Gradient border wrapper */}
        <motion.div {...inView(0)} style={{
          borderRadius: '28px', padding: '1px',
          background: 'linear-gradient(135deg, rgba(27,79,138,0.5) 0%, rgba(200,75,49,0.25) 50%, rgba(27,79,138,0.5) 100%)',
        }}>
          <div style={{
            borderRadius: '27px',
            background: 'rgba(10,6,2,0.65)',
            backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.5)',
            padding: '60px 64px',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Faint adinkra */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '27px', pointerEvents: 'none',
              backgroundImage: getPatternDataUrl('#C9980A'),
              backgroundRepeat: 'repeat', backgroundSize: '200px 200px',
              opacity: 0.03,
            }} />
            {/* Specular */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '35%', height: '45%', pointerEvents: 'none',
              background: 'radial-gradient(circle at 85% 10%, rgba(27,79,138,0.08) 0%, transparent 60%)',
            }} />

            <div style={{
              display: 'flex', flexDirection: 'row',
              gap: '64px', flexWrap: 'wrap', alignItems: 'center',
            }}>

              {/* Left — text */}
              <div style={{
                flex: '1 1 380px', minWidth: 0,
                display: 'flex', flexDirection: 'column', gap: '24px',
              }}>
                <motion.div {...inView(0.1)}>
                  <span style={{
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em',
                    textTransform: 'uppercase', color: '#1B4F8A',
                  }}>About Smart Pantry</span>
                  <h2 style={{
                    fontFamily: "'Syne', sans-serif", fontWeight: 900,
                    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                    letterSpacing: '-0.03em', color: '#ffffff', marginTop: '12px',
                  }}>Built for the modern kitchen</h2>
                </motion.div>

                <motion.p {...inView(0.18)} style={{
                  fontSize: '15px', lineHeight: 1.9,
                  color: 'rgba(255,248,235,0.45)', maxWidth: '480px',
                }}>
                  Smart Pantry was built out of a simple frustration : too much food wasted, too many forgotten groceries, and too little time to plan meals. We set out to build a smarter way to manage your kitchen.
                </motion.p>
                <motion.p {...inView(0.24)} style={{
                  fontSize: '15px', lineHeight: 1.9,
                  color: 'rgba(255,248,235,0.45)', maxWidth: '480px',
                }}>
                  By connecting what you own with what you can cook, Smart Pantry helps you make the most of every ingredient, reducing waste, saving money, and putting better meals on the table.
                </motion.p>

                <motion.a {...inView(0.3)} href="#auth"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    padding: '12px 28px', borderRadius: '10px', width: 'fit-content',
                    fontSize: '14px', fontWeight: 700,
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #C84B31, #a83828)',
                    boxShadow: '0 0 20px rgba(200,75,49,0.28)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 36px rgba(200,75,49,0.55)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(200,75,49,0.28)'}
                >Start for free </motion.a>
              </div>

              {/* Right — stats */}
              <motion.div {...inView(0.2)} style={{
                flex: '1 1 260px',
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
              }}>
                {[
                  { num: '10k+', label: 'Items tracked daily', color: '#C84B31' },
                  { num: '85%', label: 'Less food wasted', color: '#1B4F8A' },
                  { num: '200+', label: 'Recipe suggestions', color: '#1B4F8A' },
                  { num: '4.9★', label: 'Average user rating', color: '#C84B31' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: '24px 20px', borderRadius: '16px',
                    background: 'rgba(255,248,235,0.03)',
                    border: `1px solid ${stat.color}22`,
                    display: 'flex', flexDirection: 'column', gap: '6px',
                  }}>
                    <p style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: 900,
                      fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.03em',
                      color: stat.color,
                    }}>{stat.num}</p>
                    <p style={{
                      fontSize: '12px', lineHeight: 1.5,
                      color: 'rgba(255,248,235,0.38)',
                    }}>{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

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
        #feature-grid { grid-template-columns: repeat(2,1fr) !important; }
      }
      @media (max-width: 540px) {
        #feature-grid { grid-template-columns: 1fr !important; }
        section { padding-left: 18px !important; padding-right: 18px !important; }
      }
    `}</style>
  </>
);

export default Home;