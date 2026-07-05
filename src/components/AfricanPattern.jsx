const TILE = (color) => `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 22 Q29 11 36 19 Q43 27 36 34 Q28 42 18 35 Q8 27 14 16 Q20 5 34 11" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="74" y1="6" x2="74" y2="34" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="80" y1="6" x2="80" y2="34" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="86" y1="6" x2="86" y2="34" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="92" y1="6" x2="92" y2="34" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="121" cy="11" r="2.2" fill="${color}"/>
  <circle cx="121" cy="20" r="2.2" fill="${color}"/>
  <circle cx="121" cy="29" r="2.2" fill="${color}"/>
  <rect x="144" y="6" width="39" height="39" fill="none" stroke="${color}" stroke-width="1.8"/>
  <polyline points="144,29 164,29 164,8" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="4" y1="52" x2="44" y2="52" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="4" y1="59" x2="44" y2="59" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="4" y1="66" x2="44" y2="66" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="4" y1="73" x2="44" y2="73" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <polyline points="54,44 62,56 70,44 78,56 86,44" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="54,56 62,68 70,56 78,68 86,56" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M98,48 Q104,42 110,48 Q116,54 122,48 Q128,42 134,48 Q140,54 146,48" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M98,57 Q104,51 110,57 Q116,63 122,57 Q128,51 134,57 Q140,63 146,57" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <polyline points="154,44 170,58 186,44" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="154,58 170,72 186,58" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="4,96 14,107 24,96 34,107 44,96" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="56" y="86" width="36" height="36" fill="none" stroke="${color}" stroke-width="1.8"/>
  <rect x="63" y="93" width="22" height="22" fill="none" stroke="${color}" stroke-width="1.2"/>
  <polyline points="63,104 75,104 75,95" fill="none" stroke="${color}" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="104" y1="86" x2="104" y2="121" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="111" y1="86" x2="111" y2="121" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="118" y1="86" x2="118" y2="121" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="169" cy="104" r="13" fill="none" stroke="${color}" stroke-width="1.8"/>
  <line x1="169" y1="88" x2="169" y2="83" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="169" y1="120" x2="169" y2="125" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="153" y1="104" x2="148" y2="104" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="185" y1="104" x2="190" y2="104" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="158" y1="93" x2="154" y2="89" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="180" y1="115" x2="184" y2="119" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="180" y1="93" x2="184" y2="89" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="158" y1="115" x2="154" y2="119" stroke="${color}" stroke-width="1.8" stroke-linecap="round"/>
  <polyline points="4,146 14,135 24,146 34,135 44,146" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="4,159 14,148 24,159 34,148 44,159" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <line x1="56" y1="138" x2="100" y2="138" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="56" y1="145" x2="100" y2="145" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="56" y1="152" x2="100" y2="152" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="56" y1="159" x2="100" y2="159" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
  <polyline points="108,138 118,152 128,138 138,152 148,138" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="108,155 118,169 128,155 138,169 148,155" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="164,138 172,151 188,129" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="164,160 172,173 188,151" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const getPatternDataUrl = (color = '#C9980A') =>
  `url("data:image/svg+xml,${encodeURIComponent(TILE(color))}")`;

const AfricanPattern = ({ style = {}, opacity = 0.09, color = '#C9980A' }) => (
  <div
    aria-hidden="true"
    style={{
      ...style,
      backgroundImage: getPatternDataUrl(color),
      backgroundRepeat: 'repeat',
      backgroundSize: '200px 200px',
      opacity,
    }}
  />
);

export default AfricanPattern;