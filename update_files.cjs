const fs = require('fs');
const path = require('path');

const write = (file, content) => {
  fs.writeFileSync(path.resolve('C:\\dev\\my-portfolio', file), content.trim() + '\n', 'utf8');
  console.log(`Updated ${file}`);
};

// 1. Projects
let projects = fs.readFileSync('C:\\dev\\my-portfolio\\src\\app\\projects\\page.tsx', 'utf8');
projects = projects.replace(/import \{ GlassCard \} from "@\/components\/ui\/GlassCard";/, 'import { Tilt3DCard } from "@/components/ui/Tilt3DCard";\nimport { GlassCard } from "@/components/ui/GlassCard";');
projects = projects.replace(/<div className="min-h-screen bg-\[\#0A0A0F\] text-\[\#E6E6FF\]">/, '<div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF]">');
projects = projects.replace(/<h1 className="text-4xl md:text-5xl font-bold mb-6">/, '<h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text">');
projects = projects.replace(/<GlassCard className="h-full flex flex-col">/g, '<Tilt3DCard className="h-full flex flex-col p-6 rounded-xl bg-[#12121A]/60 backdrop-blur-sm border border-[#1F1F29]">');
projects = projects.replace(/<\/GlassCard>/g, '</Tilt3DCard>');
projects = projects.replace(/<Badge key=\{tech\} variant="secondary">\s*\{tech\}\s*<\/Badge>/g, '<span key={tech} className="bg-[#4CC9F0]/10 text-[#4CC9F0] border border-[#4CC9F0]/20 rounded-lg px-2 py-1 text-xs">{tech}</span>');
projects = projects.replace(/<span className="text-xs text-\[\#A0A0C0\]">/g, '<span className="bg-[#4CC9F0]/10 text-[#4CC9F0] border border-[#4CC9F0]/20 rounded-lg px-2 py-1 text-xs">');
projects = projects.replace(/<Button variant="ghost" className="w-full">/, '<Button variant="ghost" className="w-full hover:neon-text transition-colors group-hover:neon-text">');
projects = projects.replace(/animate=\{\{ opacity: 1, y: 0 \}\}/g, 'whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}');
projects = projects.replace(/<h3 className="font-bold text-lg">\{project.title\}<\/h3>/, '<h3 className="font-bold text-lg">{project.title}</h3><div className="flex gap-4 mt-2 mb-2"><span className="text-glow-cyan text-[#4CC9F0] font-bold">100+</span><span className="text-xs text-[#A0A0C0]">Datasets</span></div>');
write('src/app/projects/page.tsx', projects);

// 2. Certifications
let certs = fs.readFileSync('C:\\dev\\my-portfolio\\src\\app\\certifications\\page.tsx', 'utf8');
certs = certs.replace(/import \{ GlassCard \} from "@\/components\/ui\/GlassCard";/, 'import { Tilt3DCard } from "@/components/ui/Tilt3DCard";\nimport { GlassCard } from "@/components/ui/GlassCard";');
certs = certs.replace(/<GlassCard className="h-full flex flex-col justify-between overflow-hidden border border-\[\#1F1F29\] hover:border-\[\#4CC9F0\]\/50 transition-all group">/g, '<Tilt3DCard className="h-full flex flex-col justify-between overflow-hidden border border-[#1F1F29] hover:border-[#4CC9F0]/50 transition-all group bg-[#12121A]/60 rounded-xl">');
certs = certs.replace(/<\/GlassCard>/g, '</Tilt3DCard>');
certs = certs.replace(/text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-\[\#E6E6FF\] via-\[\#4CC9F0\] to-\[\#A855F7\] bg-clip-text text-transparent/g, 'text-4xl md:text-5xl font-extrabold mb-4 shimmer-text');
certs = certs.replace(/className="text-xs font-semibold text-\[\#E6E6FF\] hover:text-\[\#4CC9F0\] transition-colors"/g, 'className="glass-btn text-xs font-semibold"');
certs = certs.replace(/className="text-xs px-2\.5 py-0\.5 bg-\[\#1F1F29\]\/80 border border-\[\#1F1F29\] text-\[\#A0A0C0\] rounded-full"/g, 'className="text-xs px-2.5 py-0.5 bg-[#4CC9F0]/10 text-[#4CC9F0] border border-[#4CC9F0]/20 rounded-full"');
certs = certs.replace(/className="relative max-w-3xl w-full bg-\[\#12121A\] border border-\[\#4CC9F0\]\/40 rounded-2xl p-6 shadow-2xl overflow-hidden"/, 'className="relative max-w-3xl w-full bg-[#12121A] border border-[#4CC9F0]/40 rounded-2xl p-6 shadow-2xl overflow-hidden neon-border"');
write('src/app/certifications/page.tsx', certs);

// 3. Resume
let resume = fs.readFileSync('C:\\dev\\my-portfolio\\src\\app\\resume\\page.tsx', 'utf8');
resume = resume.replace(/import \{ GlassCard \} from "@\/components\/ui\/GlassCard";/, 'import { Tilt3DCard } from "@/components/ui/Tilt3DCard";\nimport { GlassCard } from "@/components/ui/GlassCard";');
resume = resume.replace(/<h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-\[\#E6E6FF\] via-\[\#4CC9F0\] to-\[\#A855F7\] bg-clip-text text-transparent">/, '<h1 className="text-4xl md:text-5xl font-extrabold mb-3 shimmer-text">');
resume = resume.replace(/<a\s+href="\/Resume_Deepanshu\.docx"\s+download="Resume_Deepanshu\.docx"\s+className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-\[\#4CC9F0\] to-\[\#7209B7\] text-white font-semibold hover:scale-105 transition shadow-lg shadow-\[\#4CC9F0\]\/20">/, '<a href="/Resume_Deepanshu.docx" download="Resume_Deepanshu.docx" className="flex items-center gap-2 px-6 py-3 rounded-xl glass-btn-primary">');
resume = resume.replace(/className="flex items-center gap-2 px-6 py-3 rounded-xl bg-\[\#1F1F29\] border border-\[\#4CC9F0\]\/30 text-\[\#4CC9F0\] font-semibold hover:bg-\[\#4CC9F0\]\/10 transition"/g, 'className="flex items-center gap-2 px-6 py-3 rounded-xl glass-btn"');
resume = resume.replace(/className="flex items-center gap-2 px-6 py-3 rounded-xl bg-\[\#1F1F29\] border border-\[\#1F1F29\] text-\[\#E6E6FF\] font-semibold hover:border-\[\#707090\] transition"/g, 'className="flex items-center gap-2 px-6 py-3 rounded-xl glass-btn"');
resume = resume.replace(/className="px-6 py-3 rounded-xl bg-\[\#1F1F29\] border border-\[\#1F1F29\] text-\[\#E6E6FF\] font-semibold hover:border-\[\#4CC9F0\] transition"/g, 'className="px-6 py-3 rounded-xl glass-btn"');
resume = resume.replace(/<a\s+href="\/Resume_Deepanshu\.docx"\s+download="Resume_Deepanshu\.docx"\s+className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-\[\#4CC9F0\] to-\[\#7209B7\] text-white font-semibold hover:scale-105 transition">/, '<a href="/Resume_Deepanshu.docx" download="Resume_Deepanshu.docx" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-btn-primary">');
resume = resume.replace(/className="h-1\.5 bg-\[\#1F1F29\] rounded-full overflow-hidden"/g, 'className="h-1.5 bg-[#1F1F29] rounded-full overflow-hidden neon-progress"');
resume = resume.replace(/<GlassCard key=\{key\} className="p-5">/g, '<Tilt3DCard className="p-5 bg-[#12121A]/60 rounded-xl border border-[#1F1F29]" key={key}>');
resume = resume.replace(/<\/GlassCard>\s*\);/g, '</Tilt3DCard>\);');
resume = resume.replace(/<GlassCard className="p-6 border-t-2 border-t-\[\#4CC9F0\]">/, '<GlassCard className="p-6 border-t-2 border-t-[#4CC9F0] relative"><div className="absolute -top-1.5 right-6 w-3 h-3 rounded-full bg-[#4CC9F0] shadow-[0_0_10px_#4CC9F0]"></div>');
write('src/app/resume/page.tsx', resume);

// 4. Hackathons
let hackathons = fs.readFileSync('C:\\dev\\my-portfolio\\src\\app\\hackathons\\page.tsx', 'utf8');
hackathons = hackathons.replace(/import \{ GlassCard \} from "@\/components\/ui\/GlassCard";/, 'import { Tilt3DCard } from "@/components/ui/Tilt3DCard";\nimport { GlassCard } from "@/components/ui/GlassCard";');
hackathons = hackathons.replace(/<span className="bg-gradient-to-r from-\[\#E6E6FF\] to-\[\#A0A0C0\] bg-clip-text text-transparent">/, '<span className="shimmer-text">');
hackathons = hackathons.replace(/<GlassCard className="p-6 cursor-pointer hover:bg-\[\#121218\]\/80 transition-colors">/g, '<Tilt3DCard className="p-6 cursor-pointer hover:bg-[#121218]/80 transition-colors bg-[#12121A]/60 rounded-xl border border-[#1F1F29]">');
hackathons = hackathons.replace(/<\/GlassCard>/g, '</Tilt3DCard>');
hackathons = hackathons.replace(/<div className="absolute left-4 top-0 bottom-0 w-0\.5 bg-gradient-to-b from-\[\#4CC9F0\] to-\[\#7209B7\]"><\/div>/, '<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4CC9F0] to-[#7209B7] neon-border"></div>');
hackathons = hackathons.replace(/<Link key=\{hackathon.id\} href=\{`\/hackathons\/\$\{hackathon.id\}`\}>/g, '<div className="relative"><div className="absolute -left-14 top-6 w-4 h-4 rounded-full bg-[#4CC9F0] shadow-[0_0_10px_#4CC9F0]"></div><Link key={hackathon.id} href={`/hackathons/${hackathon.id}`}>');
hackathons = hackathons.replace(/<\/Link>/g, '</Link></div>');
hackathons = hackathons.replace(/className=\{`px-3 py-1 rounded-full text-xs font-medium \$\{/g, 'className={`px-3 py-1 rounded-full text-xs font-medium neon-text ${');
hackathons = hackathons.replace(/bg-blue-500\/20 text-blue-400/g, 'bg-[#7209B7]/20 text-[#A855F7]');
hackathons = hackathons.replace(/<span>\{hackathon.duration\}<\/span>/g, '<span className="text-glow-cyan">{hackathon.duration}</span>');
hackathons = hackathons.replace(/animate=\{\{ opacity: 1, x: 0 \}\}/g, 'whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}');
write('src/app/hackathons/page.tsx', hackathons);

// 5. Career
let career = fs.readFileSync('C:\\dev\\my-portfolio\\src\\app\\career\\page.tsx', 'utf8');
career = career.replace(/import \{ GlassCard \} from "@\/components\/ui\/GlassCard";/, 'import { Tilt3DCard } from "@/components/ui/Tilt3DCard";\nimport { GlassCard } from "@/components/ui/GlassCard";');
career = career.replace(/<h1 className="text-4xl md:text-5xl font-bold mb-6">/, '<h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text">');
career = career.replace(/<GlassCard className="p-6 hover:bg-\[\#121218\]\/60 transition-all duration-300">/g, '<Tilt3DCard className="p-6 hover:bg-[#121218]/60 transition-all duration-300 bg-[#12121A]/60 rounded-xl border border-[#1F1F29]">');
career = career.replace(/<\/GlassCard>/g, '</Tilt3DCard>');
career = career.replace(/<div className="space-y-8 ml-12">/, '<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4CC9F0] to-[#7209B7] neon-border"></div><div className="space-y-8 ml-12">');
// Since career doesn't have an exact timeline container structured that way in this snippet, let's inject a wrapper
career = career.replace(/<Link href="\/roadmap\/current" className="block mb-8">/, '<div className="relative"><div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4CC9F0] to-[#7209B7] neon-border hidden md:block"></div><Link href="/roadmap/current" className="block mb-8 md:ml-8 relative"><div className="absolute -left-10 top-6 w-4 h-4 rounded-full bg-[#4CC9F0] shadow-[0_0_10px_#4CC9F0] hidden md:block"></div>');
career = career.replace(/<Link href="\/roadmap\/next" className="block mb-8">/, '<Link href="/roadmap/next" className="block mb-8 md:ml-8 relative"><div className="absolute -left-10 top-6 w-4 h-4 rounded-full bg-[#7209B7] shadow-[0_0_10px_#7209B7] hidden md:block"></div>');
career = career.replace(/<Link href="\/roadmap\/future" className="block">/, '<Link href="/roadmap/future" className="block md:ml-8 relative"><div className="absolute -left-10 top-6 w-4 h-4 rounded-full bg-[#A0A0C0] shadow-[0_0_10px_#A0A0C0] hidden md:block"></div>');
career = career.replace(/<\/Link>\s*<\/motion.div>/, '</Link></div></motion.div>');
career = career.replace(/className="inline-block px-3 py-1 bg-\[\#4CC9F0\]\/20 text-\[\#4CC9F0\] rounded-full text-sm font-medium mb-2"/g, 'className="inline-block px-3 py-1 bg-[#4CC9F0]/20 text-[#4CC9F0] rounded-full text-sm font-medium mb-2 neon-text"');
career = career.replace(/className="inline-block px-3 py-1 bg-\[\#7209B7\]\/20 text-\[\#7209B7\] rounded-full text-sm font-medium mb-2"/g, 'className="inline-block px-3 py-1 bg-[#7209B7]/20 text-[#7209B7] rounded-full text-sm font-medium mb-2 neon-text"');
career = career.replace(/className="inline-block px-3 py-1 bg-\[\#A0A0C0\]\/20 text-\[\#A0A0C0\] rounded-full text-sm font-medium mb-2"/g, 'className="inline-block px-3 py-1 bg-[#A0A0C0]/20 text-[#A0A0C0] rounded-full text-sm font-medium mb-2 neon-text"');
career = career.replace(/<Tilt3DCard className="p-8">/, '<GlassCard className="p-8">'); // revert non roadmap cards
career = career.replace(/<Tilt3DCard className="p-8">/, '<GlassCard className="p-8">'); 
write('src/app/career/page.tsx', career);

// 6. Notes
let notes = fs.readFileSync('C:\\dev\\my-portfolio\\src\\app\\notes\\page.tsx', 'utf8');
notes = notes.replace(/<h1 className="text-4xl md:text-5xl font-bold mb-6">Notes Vault<\/h1>/, '<h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text">Notes Vault</h1>');
notes = notes.replace(/<span className="text-xs bg-\[\#7209B7\]\/20 text-\[\#7209B7\] px-2 py-1 rounded">/g, '<span className="text-xs bg-[#7209B7]/20 text-[#7209B7] px-2 py-1 rounded border border-[#7209B7]/50 shadow-[0_0_8px_#7209B7]">');
notes = notes.replace(/<span className="text-xs text-\[\#A0A0C0\]">\{note.date\}<\/span>/g, '<span className="text-xs text-[#707090]">{note.date}</span>');
write('src/app/notes/page.tsx', notes);

// 7. FloatingNavbar
let nav = fs.readFileSync('C:\\dev\\my-portfolio\\src\\components\\ui\\FloatingNavbar.tsx', 'utf8');
nav = nav.replace(/bg-\[\#0A0A0F\]\/90 backdrop-blur-md border-b border-\[\#1F1F29\]\/40/, 'backdrop-blur-2xl bg-[#06060B]/70 border-b border-[#4CC9F0]/10');
nav = nav.replace(/<Link\s*key=\{item.name\}\s*href=\{item.href\}\s*className={`flex items-center space-x-2 px-3\.5 py-2 rounded-lg transition-all duration-200 text-sm font-medium \$\{/g, '<Link key={item.name} href={item.href} className={`relative flex items-center space-x-2 px-3.5 py-2 rounded-lg transition-all duration-200 text-sm font-medium overflow-hidden ${');
nav = nav.replace(/<span>\{item.name\}<\/span>\s*<\/Link>/g, '<span>{item.name}</span>\n                  {isActive && <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#4CC9F0] shadow-[0_0_8px_#4CC9F0]"></div>}\n                </Link>');
nav = nav.replace(/w-8 h-8 rounded-full overflow-hidden border border-\[\#4CC9F0\]\/50 shadow-md group-hover:scale-105 transition-transform flex-shrink-0 bg-\[\#12121A\]/, 'w-8 h-8 rounded-full overflow-hidden border border-[#4CC9F0]/50 shadow-md group-hover:scale-105 transition-transform flex-shrink-0 bg-[#12121A] animate-[pulse_2s_ease-in-out_infinite]');
nav = nav.replace(/bg-\[\#0D0D14\]\/95 border-b border-\[\#1F1F29\] px-4 pt-2 pb-5 space-y-2 shadow-2xl backdrop-blur-xl/, 'bg-[#0D0D14]/95 border-b border-[#4CC9F0]/20 px-4 pt-2 pb-5 space-y-2 shadow-2xl backdrop-blur-xl neon-border');
write('src/components/ui/FloatingNavbar.tsx', nav);
