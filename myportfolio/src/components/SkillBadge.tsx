'use client'

import { useState, useEffect, useRef } from 'react'

interface SkillBadgeProps {
  skill: {
    name: string
    level: number
    icon: string
  }
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentLevel, setCurrentLevel] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 1500
      const steps = 60
      const increment = skill.level / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= skill.level) {
          setCurrentLevel(skill.level)
          clearInterval(timer)
        } else {
          setCurrentLevel(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, skill.level])

  return (
    <div ref={ref} className="glass rounded-xl p-5 border border-white/5 hover:border-primary-500/50 transition-all group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-white">{skill.name}</span>
        </div>
        <span className="text-sm font-mono font-bold text-primary-500">
          {currentLevel}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-2 bg-dark-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${currentLevel}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}