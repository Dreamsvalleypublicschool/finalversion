const fs = require('fs');
const path = require('path');

const logoPath = path.resolve('public/school_assets/dvps_official_logo.png');
const logoBase64 = fs.readFileSync(logoPath).toString('base64');
const logoDataUri = `data:image/png;base64,${logoBase64}`;

// 1. FRONT CARD SVG (CLEAN WHITE BACKGROUND - NO RAINBOW SHINE)
const frontSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 900" width="640" height="900">
  <defs>
    <!-- Crisp White Card Background -->
    <linearGradient id="whiteCardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>

    <!-- Saffron Orange Header / Accent Gradient -->
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F4511E" />
      <stop offset="100%" stop-color="#FF7A00" />
    </linearGradient>

    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.12" />
    </filter>
  </defs>

  <!-- Solid Crisp White Card Base -->
  <rect width="640" height="900" rx="36" fill="url(#whiteCardGrad)" stroke="#CBD5E1" stroke-width="2.5" />

  <!-- Inset Border with Saffron/Orange Accent -->
  <rect x="14" y="14" width="612" height="872" rx="28" fill="none" stroke="#E2E8F0" stroke-width="2" />
  <rect x="18" y="18" width="604" height="864" rx="24" fill="none" stroke="#F4511E" stroke-width="1.5" stroke-opacity="0.4" />

  <!-- Lanyard Slot (punch hole for ring) -->
  <rect x="250" y="30" width="140" height="24" rx="12" fill="#F1F5F9" stroke="#94A3B8" stroke-width="2" />

  <!-- TOP HEADER SECTION -->
  <g transform="translate(320, 105)">
    <!-- School Name (Top) in Navy & Orange -->
    <text text-anchor="middle" y="0" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#172B73" letter-spacing="2">
      DREAMS VALLEY
    </text>
    <text text-anchor="middle" y="32" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="27" fill="#F4511E" letter-spacing="2">
      PUBLIC SCHOOL
    </text>

    <!-- Tagline / Medium Pill -->
    <rect x="-140" y="48" width="280" height="24" rx="12" fill="#EFF6FF" stroke="#BFDBFE" stroke-width="1.5" />
    <text text-anchor="middle" y="65" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" fill="#1E40AF" letter-spacing="2.5">
      [ ENGLISH MEDIUM ]
    </text>
  </g>

  <!-- BADA SA LOGO (BIG IN CENTER ON PURE WHITE) -->
  <g transform="translate(95, 205)" filter="url(#softShadow)">
    <!-- Outer Soft Saffron Border Ring -->
    <circle cx="225" cy="225" r="230" fill="#FFFFFF" stroke="#F4511E" stroke-width="3" stroke-opacity="0.4" />
    <!-- Embedded High-Res Official DVPS Logo -->
    <image href="${logoDataUri}" x="5" y="5" width="440" height="440" preserveAspectRatio="xMidYMid meet" />
  </g>

  <!-- BOTTOM SECTION: NURSERY TO CLASS 12TH -->
  <g transform="translate(320, 715)">
    <!-- Main Banner for Nursery to 12th Class -->
    <rect x="-240" y="0" width="480" height="66" rx="33" fill="url(#orangeGrad)" filter="url(#softShadow)" stroke="#FFFFFF" stroke-width="2" />
    
    <text text-anchor="middle" y="42" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="27" fill="#FFFFFF" letter-spacing="1.5">
      NURSERY TO CLASS 12TH
    </text>

    <!-- Streams Line in School Navy -->
    <text text-anchor="middle" y="96" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="14" fill="#172B73" letter-spacing="2">
      MATHS · BIOLOGY · COMMERCE · ARTS
    </text>

    <!-- Established & Location Strip in Slate -->
    <text text-anchor="middle" y="122" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="12" fill="#64748B" letter-spacing="1.5">
      ESTD. 2016  ·  ICHOL, SATNA (M.P.)
    </text>
  </g>

  <!-- Bottom Clean Accent Line -->
  <rect x="220" y="864" width="200" height="4" rx="2" fill="#F4511E" opacity="0.8" />
</svg>`;

// 2. BACK CARD SVG (CLEAN WHITE BACKGROUND - NO RAINBOW SHINE)
const backSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 900" width="640" height="900">
  <defs>
    <!-- Crisp White Card Background -->
    <linearGradient id="whiteCardGradBack" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>

    <filter id="softShadowBack" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#000000" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Solid Crisp White Card Base -->
  <rect width="640" height="900" rx="36" fill="url(#whiteCardGradBack)" stroke="#CBD5E1" stroke-width="2.5" />
  <rect x="14" y="14" width="612" height="872" rx="28" fill="none" stroke="#E2E8F0" stroke-width="2" />
  <rect x="18" y="18" width="604" height="864" rx="24" fill="none" stroke="#F4511E" stroke-width="1.5" stroke-opacity="0.4" />

  <!-- Lanyard Slot -->
  <rect x="250" y="30" width="140" height="24" rx="12" fill="#F1F5F9" stroke="#94A3B8" stroke-width="2" />

  <!-- Top Header -->
  <g transform="translate(320, 95)">
    <text text-anchor="middle" y="0" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="21" fill="#172B73" letter-spacing="1.5">
      DREAMS VALLEY PUBLIC SCHOOL
    </text>
    <text text-anchor="middle" y="24" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" fill="#F4511E" letter-spacing="2">
      INSTITUTIONAL DIRECTORY &amp; ACCREDITATION
    </text>
    <line x1="-240" y1="36" x2="240" y2="36" stroke="#E2E8F0" stroke-width="1.5" />
  </g>

  <!-- 1. MOTTO & SHLOKA BLOCK -->
  <g transform="translate(45, 150)" filter="url(#softShadowBack)">
    <rect width="550" height="78" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    <text x="275" y="32" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="15" fill="#D97706" letter-spacing="1">
      MOTTO: &quot;LEARN, GROW, SUCCEED!&quot;
    </text>
    <text x="275" y="58" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="13" fill="#172B73" letter-spacing="0.5">
      || तमसो मा ज्योतिर्गमय || (Lead Us From Darkness To Light)
    </text>
  </g>

  <!-- 2. OFFICIAL LICENSE & ACCREDITATION DETAILS -->
  <g transform="translate(45, 242)" filter="url(#softShadowBack)">
    <rect width="550" height="152" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />
    
    <text x="25" y="30" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="13" fill="#F4511E" letter-spacing="1">
      ACCREDITATION &amp; REGISTRATION NUMBERS
    </text>

    <!-- Row 1: DISE & School Code -->
    <g transform="translate(25, 60)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">DISE CODE:</text>
      <text x="140" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#172B73" font-weight="800">23130806809</text>
      
      <text x="290" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">SCHOOL CODE:</text>
      <text x="420" font-family="system-ui, -apple-system, sans-serif" font-size="14" fill="#172B73" font-weight="800">312328</text>
    </g>

    <!-- Divider -->
    <line x1="25" y1="80" x2="525" y2="80" stroke="#F1F5F9" stroke-width="1.5" />

    <!-- Row 2: Society & Estd -->
    <g transform="translate(25, 105)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">SOCIETY:</text>
      <text x="140" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#1E293B" font-weight="700">Gaharwar Educational &amp; Welfare Society</text>
    </g>

    <!-- Row 3: Curriculum -->
    <g transform="translate(25, 132)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">CURRICULUM:</text>
      <text x="140" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#16A34A" font-weight="700">English Medium · Co-Educational · Estd. 2016</text>
    </g>
  </g>

  <!-- 3. CAMPUS ADDRESS & CONTACTS -->
  <g transform="translate(45, 410)" filter="url(#softShadowBack)">
    <rect width="550" height="235" rx="14" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5" />

    <text x="25" y="30" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="13" fill="#F4511E" letter-spacing="1">
      OFFICIAL CONTACTS &amp; CAMPUS DESK
    </text>

    <!-- Principal Number -->
    <g transform="translate(25, 62)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">PRINCIPAL DESK:</text>
      <text x="170" font-family="monospace" font-size="14" fill="#172B73" font-weight="800">+91 87705 77137</text>
    </g>

    <!-- Director Number -->
    <g transform="translate(25, 92)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">DIRECTOR OFFICE:</text>
      <text x="170" font-family="monospace" font-size="14" fill="#334155" font-weight="700">+91 87702 20157</text>
    </g>

    <!-- Transport Helpline -->
    <g transform="translate(25, 122)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">TRANSPORT / BUS:</text>
      <text x="170" font-family="monospace" font-size="14" fill="#334155" font-weight="700">+91 79990 32327</text>
    </g>

    <!-- Email -->
    <g transform="translate(25, 152)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">OFFICIAL EMAIL:</text>
      <text x="170" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#D97706" font-weight="700">dreamsvalleypublicschool@gmail.com</text>
    </g>

    <!-- Divider -->
    <line x1="25" y1="172" x2="525" y2="172" stroke="#F1F5F9" stroke-width="1.5" />

    <!-- Full Address -->
    <g transform="translate(25, 198)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#64748B" font-weight="600">CAMPUS ADDRESS:</text>
      <text x="170" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#1E293B" font-weight="600">
        Near Toll-way, Satna Road, Ichol,
      </text>
      <text x="170" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#1E293B" font-weight="600">
        Teh.- Unchehra, Distt.- Satna (M.P.), Pin - 485661
      </text>
    </g>
  </g>

  <!-- 4. BOTTOM CREDENTIALS BANNER -->
  <g transform="translate(45, 660)" filter="url(#softShadowBack)">
    <rect width="550" height="150" rx="14" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5" />

    <text x="25" y="30" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="13" fill="#F4511E" letter-spacing="1">
      ACADEMIC PROGRAMS &amp; FACILITIES
    </text>

    <text x="25" y="60" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#334155" font-weight="600">
      • Classes Offered: Nursery, LKG, UKG, 1st to 12th Standard
    </text>
    <text x="25" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#334155" font-weight="600">
      • Senior Secondary: Mathematics, Biology, Commerce &amp; Arts
    </text>
    <text x="25" y="110" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#334155" font-weight="600">
      • Amenities: CCTV Smart Campus · GPS Transport Fleet · Sports Arena
    </text>
    <text x="25" y="135" font-family="system-ui, -apple-system, sans-serif" font-size="11" fill="#16A34A" font-weight="700">
      ✓ Authorized Institution Identity Pass · Parent Portal: schoolmitra.com
    </text>
  </g>

  <!-- Footer Seal -->
  <g transform="translate(320, 855)">
    <text text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" fill="#172B73" letter-spacing="2">
      DREAMS VALLEY PUBLIC SCHOOL · ICHOL, SATNA
    </text>
    <text text-anchor="middle" y="18" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="11" fill="#64748B">
      DISE: 23130806809  ·  ESTD. 2016
    </text>
  </g>
</svg>`;

fs.writeFileSync('public/school_assets/id_card_front.svg', frontSvg);
fs.writeFileSync('public/school_assets/id_card_back.svg', backSvg);
console.log('Successfully generated white-background id_card_front.svg and id_card_back.svg!');
