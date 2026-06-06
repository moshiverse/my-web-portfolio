import React from 'react'

export default function Hero(){
  return (
    <section className="card -mt-20">
      <div className="relative flex w-full z-10 overflow-hidden transform-gpu bg-[#090909] border border-white/[0.08] rounded-[24px] [box-shadow:0_0px_60px_-20px_#ffffff12_inset] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out h-full w-full p-5 md:p-8 flex flex-col justify-center">
        <div className="hidden md:block absolute top-0 right-0 p-4 opacity-5">
          <span className="text-6xl font-heading font-bold">INFO</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="relative shrink-0">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border border-white/20 p-1">
              <img alt="Portrait" className="w-full h-full object-cover rounded-full transition-all duration-700" src="/ghibli.webp" />
            </div>
          </div>

          <div>
            <h1 className="text-2xl md:text-5xl font-heading font-bold tracking-tighter text-white">John Joseph A. Laborada<span className="text-primary">.</span></h1>
            <p className="text-xs md:text-sm font-medium opacity-50 mt-1">@josephjohn.laborada</p>
          </div>
        </div>

        <div className="max-w-xl">
          <h2 className="text-base md:text-xl font-light leading-snug text-slate-100">Just a <span className="font-bold underline decoration-primary/40 underline-offset-4">normal human </span> trying really hard to become a developer.</h2>
        </div>
      </div>
    </section>
  )
}
