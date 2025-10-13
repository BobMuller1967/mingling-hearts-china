"use client";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* HERO (brand-forward, gradient, bold typography) */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200"
        />
        {/* Decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-300/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-rose-400/30 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-300/60 bg-white/70 px-3 py-1 text-xs font-semibold text-rose-700 shadow-sm">
              Private, guided matchmaking
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Where <span className="text-rose-700">East</span> meets <span className="text-rose-700">West</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-800/90 max-w-prose">
              It’s never too late to find love—sometimes, she’s just across the sea.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-neutral-900/90">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-rose-600" />
                Curated introductions with cultural guidance
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-rose-600" />
                Bilingual coaching & translation support
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-rose-600" />
                Identity verification & privacy-first practices
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 font-semibold text-white shadow hover:bg-rose-700"
              >
                Join the Mingling Hearts community
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 font-semibold hover:bg-white"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Hero image area — replace later with your AI hero (/hero.jpg) */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl overflow-hidden ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
                alt="Elegant couple with warm light"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="rounded-2xl bg-white shadow-xl p-4 w-64">
                <p className="text-sm font-semibold">Gentle pacing, sincere intent</p>
                <p className="text-xs text-neutral-600 mt-1">
                  Introductions that respect culture, language, and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY (kept, with stronger cards) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">A warm, elegant vibe</h2>
          <p className="mt-2 text-neutral-700">
            AI-generated photos of Chinese women and American men—well dressed, sincere, and smiling.
          </p>

          <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1520975922224-c0e5fe7c3d00?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1475724017904-b712052c192a?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1525517450344-d08c7e4c6a87?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
            ].map((src, i) => (
              <div
                key={i}
                className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-black/5 shadow-sm"
              >
                <img src={src} alt="Smiling couple" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (unchanged content, refined visuals) */}
      <section id="how" className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">How it works</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "1) Apply", desc: "Share your values, lifestyle, and relationship goals." },
              { title: "2) Verify", desc: "ID + liveness video checks for safety on both sides." },
              { title: "3) Match", desc: "Curated introductions with bilingual coaching." },
              { title: "4) Meet", desc: "Video calls → in-person visits when it feels right." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Our values</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { title: "Respect", desc: "Kindness, clarity, and sincerity at every step." },
              { title: "Culture", desc: "Bridging East & West with empathy and guidance." },
              { title: "Safety", desc: "Verification, moderation, and privacy-first practices." },
            ].map((v, i) => (
              <div key={i} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="font-semibold text-lg">{v.title}</h3>
                <p className="mt-2 text-neutral-700 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY / CONTACT (visible email now; we can wire to send later) */}
      <section id="apply" className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">Apply to join the community</h2>
              <p className="mt-4 text-neutral-700">
                Tell us a little about yourself and what you’re looking for. We’ll reach out privately.
              </p>
              <div className="mt-6 text-sm text-neutral-700">
                Prefer email? Write us at{" "}
                <a
                  href="mailto:info@minglingheartschina.com"
                  className="font-semibold text-rose-700 hover:underline"
                >
                  info@minglingheartschina.com
                </a>
                .
              </div>
            </div>

            <form
              className="rounded-2xl border border-neutral-200 p-6 shadow-sm bg-white"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We’ll be in touch shortly.");
              }}
            >
              <div className="grid gap-4">
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Full name</span>
                  <input
                    required
                    type="text"
                    className="rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="John Smith"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    required
                    type="email"
                    className="rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="john@example.com"
                  />
                </label>
                <label className="grid gap-1">
                  <span className="text-sm font-medium">What are you looking for?</span>
                  <textarea
                    rows={4}
                    className="rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Share a bit about your values and goals..."
                  />
                </label>
                <button className="mt-2 rounded-full bg-rose-600 px-5 py-3 font-semibold text-white hover:bg-rose-700">
                  Submit
                </button>
                <p className="text-xs text-neutral-500">
                  By submitting, you agree to our respectful conduct policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Mingling Hearts China. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#how" className="hover:text-rose-700">How it works</a>
            <a href="#apply" className="hover:text-rose-700">Apply</a>
            <a href="mailto:info@minglingheartschina.com" className="hover:text-rose-700">info@minglingheartschina.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
