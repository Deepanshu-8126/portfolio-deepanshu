const fs = require('fs');

const fix = (file) => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<GlassCard(>| className=)/g, '<Tilt3DCard$1');
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Fixed ${file}`);
}

fix('src/app/projects/page.tsx');
fix('src/app/certifications/page.tsx');
fix('src/app/resume/page.tsx');
fix('src/app/hackathons/page.tsx');
fix('src/app/career/page.tsx');
