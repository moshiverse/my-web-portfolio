import React from 'react'

export default function Skills(){
  const groups = [
    {title:'Languages', items:['JavaScript','Python','Java','C++','PHP','SQL']},
    {title:'Frameworks/Tools', items:['React','Vite','FastAPI','Tailwind CSS','GitHub']},
    {title:'Other', items:['Figma','UI/UX','AWS Cloud']}
  ]

  return (
    <section className="card mt-6">
      <h3 className="text-xl font-bold">Skills</h3>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
        {groups.map(g=> (
          <div key={g.title}>
            <h4 className="font-medium text-gray-200">{g.title}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {g.items.map(i=> <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded">{i}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
