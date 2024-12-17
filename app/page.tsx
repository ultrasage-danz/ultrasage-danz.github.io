'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sun, Moon } from 'lucide-react'
import { marked } from 'marked'

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [content, setContent] = useState('')

  useEffect(() => {
    fetchReadme()
  }, [])

  async function fetchReadme() {
    try {
      const response = await fetch('README.md')
      if (!response.ok) throw new Error('Failed to load README')
      const markdown = await response.text()
      const htmlContent = marked.parse(markdown)
      setContent(htmlContent)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground min-h-screen">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">riles</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="grid gap-8">
            {/* Hero Section */}
            <section className="text-center">
              <h1 className="text-4xl font-bold mb-4">Software Engineer & AI Enthusiast</h1>
              <p className="text-muted-foreground text-lg">Building the future with code</p>
            </section>

            {/* Tools & Technologies */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Languages and Tools</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { name: 'Jupyter', icon: '/jupyter-original.svg' },
                  { name: 'JavaScript', icon: '/javascript-original.svg' },
                  { name: 'HTML5', icon: '/html5-original.svg' },
                  { name: 'Java', icon: '/java-original.svg' },
                  { name: 'Python', icon: '/python-original.svg' },
                  { name: 'Solidity', icon: '/solidity-original.svg' },
                  { name: 'TypeScript', icon: '/typescript-original.svg' },
                  { name: 'PHP', icon: '/php-original.svg' },
                  { name: 'TensorFlow', icon: '/tensorflow-original.svg' },
                  { name: 'Google Cloud', icon: '/googlecloud-original.svg' },
                  { name: 'MySQL', icon: '/mysql-original.svg' },
                  { name: 'PostgreSQL', icon: '/postgresql-original.svg' },
                ].map((tool) => (
                  <Card key={tool.name} className="p-4 flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                    <img src={tool.icon} alt={tool.name} className="w-12 h-12" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </Card>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">AI Project</h3>
                  <p className="text-muted-foreground mb-4">
                    A machine learning project using TensorFlow and scikit-learn
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/ultrasage-danz/ai-project" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">Blockchain DApp</h3>
                  <p className="text-muted-foreground mb-4">
                    Decentralized application built with Solidity and Web3.js
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/ultrasage-danz/dapp" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">Robotics Control</h3>
                  <p className="text-muted-foreground mb-4">
                    Raspberry Pi based robotics control system
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/ultrasage-danz/robotics" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </Card>
              </div>
            </section>

            {/* GitHub Stats */}
            <section>
              <h2 className="text-2xl font-bold mb-6">GitHub Stats</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=ultrasage-danz&show_icons=true&locale=en&layout=compact&theme=algolia"
                  alt="Most Used Languages"
                  className="w-full"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api?username=ultrasage-danz&show_icons=true&theme=algolia&locale=en"
                  alt="GitHub Stats"
                  className="w-full"
                />
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=ultrasage-danz&theme=algolia"
                  alt="GitHub Streak"
                  className="w-full"
                />
              </div>
            </section>
          </div>
        </main>

        <footer className="border-t mt-16">
          <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} riles. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

