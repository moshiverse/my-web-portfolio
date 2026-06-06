import React from 'react'

export default function Experience(){
  const experiences = [
    {
      title: 'IT Intern — Knowles Training Institute (Remote)',
      date: 'Jan 2026 – Apr 2026',
      bullets: [
        'Built responsive booking site using WordPress & Elementor',
        'Designed UI/UX for desktop and mobile',
        'Implemented email handling for bookings'
      ]
    }
  ]

  return (
    <section className="card mt-6">
      <h3 className="text-xl font-bold">Experience</h3>
      <div className="mt-4 space-y-4">
        {experiences.map((e,i)=> (
          <div key={i}>
            <div className="flex items-baseline justify-between">
              <h4 className="font-semibold">{e.title}</h4>
              <span className="text-sm text-gray-400">{e.date}</span>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
              {e.bullets.map((b,idx)=> <li key={idx}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
