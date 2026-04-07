export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-site px-6 text-center text-zinc-100">
      <div>
        <p className="mono text-xs uppercase tracking-[0.28em] text-zinc-500">404</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Page not found</h1>
        <a
          href="#home"
          className="mt-6 inline-block rounded-full border border-white/20 px-5 py-2 text-sm text-zinc-300 transition hover:border-white hover:text-white"
        >
          Back to homepage
        </a>
      </div>
    </main>
  );
}
