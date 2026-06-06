import React from 'react'

export default function Contact(){
  return (
    <section className="card mt-6">
      <h3 className="text-xl font-bold">Contact</h3>
      <p className="text-sm text-gray-300 mt-2">josephjohn.laborada@gmail.com • +63 960-360-9748</p>
      <div className="mt-3 flex gap-2">
        <a href="https://github.com/moshiverse" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-primary text-white rounded">GitHub</a>
        <a href="/resume.pdf" className="text-sm px-3 py-2 border border-white/10 rounded">Download Resume</a>
      </div>
    </section>
  )
}
