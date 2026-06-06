import React from 'react'

export default function ProjectCard({title,desc,tech=[]}){
  return (
    <article className="card flex flex-col gap-3">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
      <div className="mt-2 flex gap-2 flex-wrap">
        {tech.map(t=> <span key={t} className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded">{t}</span>)}
      </div>
    </article>
  )
}
