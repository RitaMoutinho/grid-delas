import ReferenceGrid from "@/components/ReferenceGrid";

const caminhos = [
  { label: "Pilotagem", desc: "Alta performance e grandes desafios." },
  { label: "Engenharia", desc: "Dados e precisão por trás de cada volta." },
  { label: "Estratégia", desc: "Decisões que decidem o resultado." },
  { label: "Mídia", desc: "A voz que leva o esporte além da pista." },
  { label: "Gestão", desc: "Quem lidera e constrói o caminho pras próximas." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-extrabold tracking-tight text-lg">
            GRID <span className="text-[var(--pink)]">DELAS</span>
          </span>
          <span className="text-xs text-neutral-500 hidden sm:block">
            Referências femininas no automobilismo
          </span>
        </div>
      </nav>

      <header className="border-b border-white/10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse 700px 400px at 85% 0%, var(--pink), transparent 70%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--pink)] mb-4">
            Mais mulheres. Mais histórias. Mais referência.
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-[1.05] max-w-3xl">
            Mulheres que aceleram a história do{" "}
            <span className="text-[var(--pink)]">automobilismo</span>.
          </h1>
          <p className="text-neutral-400 mt-6 max-w-xl leading-relaxed text-base sm:text-lg">
            Muita gente cresce apaixonada por automobilismo sem nunca ter visto uma mulher — cis, trans,
            negra, de qualquer origem — trabalhando dentro dele. Esse site existe pra mudar isso: mulheres
            reais, em pilotagem, engenharia, estratégia, mídia e gestão, que provam que esse espaço também é
            delas.
          </p>
          <a
            href="#referencias"
            className="inline-block mt-8 rounded-full bg-[var(--pink)] text-black font-semibold px-6 py-3 text-sm hover:scale-105 transition-transform"
          >
            Explorar referências
          </a>
        </div>
      </header>

      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--pink)] mb-2">Caminhos</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Diferentes caminhos, a mesma paixão</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {caminhos.map((c) => (
              <div key={c.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-semibold text-sm">{c.label}</p>
                <p className="text-xs text-neutral-500 mt-1 leading-snug">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main id="referencias" className="max-w-6xl mx-auto px-4 py-14 scroll-mt-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--pink)] mb-2">
          Elas fazem a diferença
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Referências</h2>
        <ReferenceGrid />

        <p className="text-xs text-neutral-600 mt-14 text-center">
          Lista em construção, feita pra crescer — fotos via Wikimedia Commons (licença aberta). Conhece
          outra referência que devia estar aqui?
        </p>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-xs text-neutral-600">
          GRID DELAS — talento não tem gênero, tem potência.
        </div>
      </footer>
    </div>
  );
}
