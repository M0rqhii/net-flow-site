import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen items-center justify-center px-6 py-20">
      <div className="glass-panel w-full max-w-3xl rounded-[2.8rem] p-8 text-center sm:p-10">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-white/34">
          404 / missing route
        </p>
        <h1 className="font-display mt-6 text-[3rem] leading-[0.92] tracking-[-0.06em] text-white sm:text-[4.4rem]">
          Ta strona nie istnieje,
          <span className="text-gradient block">ale standard nadal tak.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
          Wr\u00f3\u0107 na g\u0142\u00f3wn\u0105 stron\u0119 Net-Flow i zobacz kierunek, w kt\u00f3rym
          projektujemy premium web, commerce i operational control.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 hover:-translate-y-0.5"
        >
          Wr\u00f3\u0107 na start
        </Link>
      </div>
    </main>
  );
}
