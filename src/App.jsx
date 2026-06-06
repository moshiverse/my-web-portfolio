import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectList from './components/ProjectList'
import Contributions from './components/Contributions'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="app-root min-h-screen">
      <Header />
      <main className="container">
        <Hero />
        <ProjectList />
        <Experience />
        <Skills />
        <Contributions username="moshiverse" />
        <Contact />
      </main>
    </div>
  )
}
