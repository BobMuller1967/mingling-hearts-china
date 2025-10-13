import "./globals.css";

export const metadata = {
  title: "Mingling Hearts China",
  description: "Respectful introductions. Real relationships.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        {/* Sticky Brand Nav */}
        <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex items-center gap-3 group">
                <div className="h-9 w-9 rounded-xl bg-rose-600 flex items-center justify-center text-white font-extrabold shadow-sm group-hover:scale-105 transition">
                  ♥
                </div>
                <span className="font-extrabold tracking-tight text-lg sm:text-xl">
                  Mingling Hearts <span className="text-rose-700">China</span>
                </span>
              </a>
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="#how" className="hover:text-rose-700">How it works</a>
                <a href="#apply" className="rounded-full bg-rose-600 px-4 py-2 text-white hover:bg-rose-700 shadow">
                  Apply
                </a>
              </nav>
            </div>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
