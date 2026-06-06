import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'IEEE Docs Evaluator',
    desc: 'Frontend for AI-powered document evaluation. React + Google OAuth + Drive/Sheets integration.',
    tech: ['React', 'Vite', 'Axios']
  },
  {
    title: 'InTurn.AI — Internship Assistant',
    desc: 'AI chatbot + internship tracker. FastAPI backend, MongoDB, GPT-4 for recommendations.',
    tech: ['FastAPI', 'MongoDB', 'OpenAI']
  }
]

export default function ProjectList(){
  return (
    <section id="projects" className="card mt-6">
      <h3 className="text-xl font-bold">Selected Projects</h3>
      <div className="project-grid">
        {projects.map(p=> <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
