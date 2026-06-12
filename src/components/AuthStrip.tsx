export default function AuthStrip() {
  return (
    <div className="bg-[#2d4a26] py-5 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 max-lg:flex-col max-lg:text-center">
        <div className="w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0" />
        <span className="text-[.72rem] font-light tracking-[.08em] uppercase text-white/75">
          Every image on this site is a <strong className="text-white font-semibold">real project by our team.</strong> No AI-generated images. No stock photography. This is our work — our art.
        </span>
        <div className="w-1.5 h-1.5 bg-white/50 rounded-full flex-shrink-0" />
      </div>
    </div>
  )
}
