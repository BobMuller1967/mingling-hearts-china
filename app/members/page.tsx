export default function MembersPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Members</h1>
        <p className="mt-3 text-neutral-700 max-w-prose">
          Private area for approved members. Profiles here will be visible according to your privacy settings.
          (Women will only see men; men will only see women.)
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map(i => (
            <article key={i} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100" />
              <h3 className="mt-3 font-semibold">Member #{i}</h3>
              <p className="text-sm text-neutral-700">Age • City • Interests</p>
              <button className="mt-3 rounded-full bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700">
                View Profile
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
