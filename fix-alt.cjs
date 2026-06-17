const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');

function getAllJsx(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...getAllJsx(full));
    else if (entry.name.endsWith('.jsx') || entry.name.endsWith('.js')) results.push(full);
  }
  return results;
}

let totalFixed = 0;

function fixFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  const orig = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== orig) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed: ' + path.relative(__dirname, filePath));
    totalFixed++;
  }
}

// ── 1. Loop-based decorative images: item.img, item.icon, feedback images ──
// These are alongside text headings/descriptions, so they're decorative in context.
const ARIA_PATTERNS = [
  // item.img patterns
  ['src={item.img?.src || item.img} alt=""', 'src={item.img?.src || item.img} alt="" aria-hidden="true"'],
  ['src={item.img} alt=""', 'src={item.img} alt="" aria-hidden="true"'],
  // item.icon patterns
  ['src={item.icon?.src || item.icon} alt=""', 'src={item.icon?.src || item.icon} alt="" aria-hidden="true"'],
  ['src={item.icon} alt=""', 'src={item.icon} alt="" aria-hidden="true"'],
  // item.logo
  ['src={item.logo?.src || item.logo} alt=""', 'src={item.logo?.src || item.logo} alt="" aria-hidden="true"'],
  // feedback images (carousel)
  ['src={feedback[feedBackIndex].img?.src || feedback[feedBackIndex].img}', 'src={feedback[feedBackIndex].img?.src || feedback[feedBackIndex].img} aria-hidden="true"'],
  ['src={feedBackArray[feedBackArrayIndex].img?.src || feedBackArray[feedBackArrayIndex].img} alt=""', 'src={feedBackArray[feedBackArrayIndex].img?.src || feedBackArray[feedBackArrayIndex].img} alt="" aria-hidden="true"'],
  // overviewIcon
  ['src={overviewIcon} alt=""', 'src={overviewIcon} alt="" aria-hidden="true"'],
  // servicebannerpattern, spiral, main (decorative background images)
  ['src={servicebannerpattern} alt=""', 'src={servicebannerpattern} alt="" aria-hidden="true"'],
  ['src={spiral} alt=""', 'src={spiral} alt="" aria-hidden="true"'],
  ['src={eyeImg} alt=""', 'src={eyeImg} alt="" aria-hidden="true"'],
  // healthrect decorative images
  ['src={healthrect2} alt=""', 'src={healthrect2} alt="" aria-hidden="true"'],
  ['src={healthrect3} alt=""', 'src={healthrect3} alt="" aria-hidden="true"'],
  // laptop as decorative
  ['src={laptop} alt=""', 'src={laptop} alt="" aria-hidden="true"'],
  // stories carousel images
  ['src={stories[storyIndex].img?.src || stories[storyIndex].img} alt=""', 'src={stories[storyIndex].img?.src || stories[storyIndex].img} alt="" aria-hidden="true"'],
];

// ── 2. Certificate images — content images with specific alt text ──
const CERT_REPLACEMENTS_HOME = [
  ['src={c1} alt=""', 'src={c1} alt="ISO Certification"'],
  ['src={c2} alt=""', 'src={c2} alt="CMMI Certification"'],
  ['src={c3} alt=""', 'src={c3} alt="EICE Technology Quality Certification"'],
  ['src={c4} alt=""', 'src={c4} alt="EICE Technology Certified"'],
  ['src={cert} alt=""', 'src={cert} alt="EICE Technology Certifications"'],
];

// ── 3. Industry content images ──
const INDUSTRY_FILES = {
  'Healthcare.jsx': [
    ['src={ehr} alt=""',   'src={ehr} alt="Electronic Health Records system"'],
    ['src={ha} alt=""',    'src={ha} alt="Healthcare analytics dashboard"'],
    ['src={hms} alt=""',   'src={hms} alt="Hospital management system"'],
    ['src={mdi} alt=""',   'src={mdi} alt="Medical diagnostics interface"'],
    ['src={ts} alt=""',    'src={ts} alt="Telemedicine solution"'],
    ['src={healthrect1} alt=""', 'src={healthrect1} alt="Healthcare IT solutions"'],
  ],
  'Financial.jsx': [
    ['src={main} alt=""', 'src={main} alt="Financial technology solutions"'],
  ],
  'Logistics.jsx': [
    ['src={main} alt=""', 'src={main} alt="Logistics management solutions"'],
  ],
  'Legal.jsx': [
    ['src={main} alt=""', 'src={main} alt="Legal technology solutions"'],
  ],
  'Digitalmedia.jsx': [
    ['src={main} alt=""', 'src={main} alt="Digital media technology solutions"'],
  ],
  'Educational.jsx': [
    ['src={main} alt=""', 'src={main} alt="Education technology solutions"'],
  ],
  'Enterprise.jsx': [
    ['src={main} alt=""', 'src={main} alt="Enterprise software solutions"'],
  ],
  'Oilandgas.jsx': [
    ['src={main} alt=""', 'src={main} alt="Oil and gas technology solutions"'],
  ],
};

// ── 4. Case study images ──
const CSTUDY_FILES = {
  'PertroSIM.jsx': [
    ['src={petrosim1} alt=""', 'src={petrosim1} alt="PetroSIM refinery simulation tool"'],
    ['src={petrosim2} alt=""', 'src={petrosim2} alt="PetroSIM process analysis interface"'],
  ],
  'Relimonitor.jsx': [
    ['src={temp} alt=""',  'src={temp} alt="RE.LI Monitor real-time sensor dashboard"'],
    ['src={temp2} alt=""', 'src={temp2} alt="RE.LI Monitor SCADA monitoring interface"'],
  ],
  'EspctQuote.jsx': [
    ['src={espctquote1} alt=""', 'src={espctquote1} alt="ESPCT Quote sales tool interface"'],
    ['src={espctquote2} alt=""', 'src={espctquote2} alt="ESPCT Quote quotation management"'],
  ],
  'InventoryAi.jsx': [
    ['src={temp} alt=""',  'src={temp} alt="Inventory AI management dashboard"'],
    ['src={temp2} alt=""', 'src={temp2} alt="Inventory AI analytics interface"'],
  ],
};

// ── 5. Scopes.jsx (About page challenges) ──
const SCOPES_REPLACEMENTS = [
  ['src={ConstrainedBudget} alt=""', 'src={ConstrainedBudget} alt="Constrained budget challenge illustration"'],
  ['src={EvolvingScope} alt=""',     'src={EvolvingScope} alt="Evolving scope challenge illustration"'],
  ['src={UnclearRequirements} alt=""', 'src={UnclearRequirements} alt="Unclear requirements challenge illustration"'],
  ['src={budget1} alt=""', 'src={budget1} alt="Project budget management"'],
  ['src={budget2} alt=""', 'src={budget2} alt="Budget tracking and analysis"'],
  ['src={budget3} alt=""', 'src={budget3} alt="Financial budget overview"'],
];

// Apply ARIA patterns to all JSX files
const allFiles = getAllJsx(SRC);
for (const file of allFiles) {
  fixFile(file, ARIA_PATTERNS);
}

// Apply cert replacements to all Certificate.jsx files
for (const file of allFiles) {
  if (path.basename(file) === 'Certificate.jsx') {
    fixFile(file, CERT_REPLACEMENTS_HOME);
  }
}

// Apply industry fixes
for (const file of allFiles) {
  const name = path.basename(file);
  if (INDUSTRY_FILES[name] && file.includes('Allindus')) {
    fixFile(file, INDUSTRY_FILES[name]);
  }
}

// Apply case study fixes
for (const file of allFiles) {
  const name = path.basename(file);
  if (CSTUDY_FILES[name]) {
    fixFile(file, CSTUDY_FILES[name]);
  }
}

// Apply Scopes.jsx fixes
for (const file of allFiles) {
  if (path.basename(file) === 'Scopes.jsx') {
    fixFile(file, SCOPES_REPLACEMENTS);
  }
}

console.log(`\nDone. ${totalFixed} files updated.`);
