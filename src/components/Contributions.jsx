import React from 'react'
import GitHubCalendar from 'react-github-calendar/build/index.js'

export default function Contributions({ username = 'moshiverse' }){
  return (
    <section className="card mt-6">
      <h3 className="text-lg font-bold">GitHub Contributions</h3>
      <p className="text-sm text-gray-400 mt-1">Recent contributions</p>
      <div className="mt-4 overflow-auto">
        <GitHubCalendar username={username} />
      </div>
    </section>
  )
}
