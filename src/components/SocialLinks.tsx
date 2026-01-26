import { Instagram, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { personalInfo } from '@/data/info'

export default function SocialLinks() {
  const socials = [
    { icon: Instagram, href: personalInfo.social.instagram, label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Send, href: personalInfo.social.telegram, label: 'Telegram', color: 'hover:text-blue-500' },
    { icon: Github, href: personalInfo.social.github, label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter', color: 'hover:text-sky-500' },
  ]

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 ${social.color} hover:scale-110 hover:border-current transition-all`}
          aria-label={social.label}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  )
}