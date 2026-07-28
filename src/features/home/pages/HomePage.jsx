export default function HomePage() {
  return (
    <section className="text-slate-900 py-16 sm:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Heading & Description */}
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance leading-tight">
              Build modern websites faster with Tailwind v4
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A lightweight, flexible foundation to launch your next idea. Clean
              code, responsive design, and effortless customization out of the
              box.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a
                href="#get-started"
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-semibold text-white transition-colors"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 font-semibold text-slate-200 border border-slate-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Code editor preview"
              className="w-full h-auto rounded-xl shadow-2xl border border-slate-800 object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
