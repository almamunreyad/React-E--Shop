export default function AboutPage() {
  return (
    <section className="text-slate-900 py-16 sm:py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance leading-tight">
              About Us
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We are a team of developers who are passionate about creating
              high-quality web applications.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We are a team of developers who are passionate about creating
              high-quality web applications. We are a team of developers who are
              passionate about creating high-quality web applications. We are a
              team of developers who are passionate about creating high-quality
              web applications. We are a team of developers who are passionate
              about creating high-quality web applications. We are a team of
              developers who are passionate about creating high-quality web
              applications. We are a team of developers who are passionate about
              creating high-quality web applications.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="About Us"
              className="w-full h-auto rounded-xl shadow-2xl border border-slate-800 object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
