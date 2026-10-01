import ReferenceGrid from "@/components/ReferenceGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pink-400 mb-3">Grid Delas</p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Referências femininas no automobilismo, reunidas num só lugar.
          </h1>
          <p className="text-neutral-400 mt-5 max-w-xl leading-relaxed">
            Muita gente cresce apaixonada por automobilismo sem nunca ter visto uma mulher — cis, trans,
            negra, de qualquer origem — trabalhando dentro dele. Esse site existe pra mudar isso: mulheres
            reais, em pilotagem, engenharia, estratégia, mídia e gestão, que provam que esse espaço também é
            delas.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <ReferenceGrid />

        <p className="text-xs text-neutral-600 mt-12 text-center">
          Lista em construção — feita pra crescer. Conhece outra referência que devia estar aqui?
        </p>
      </main>
    </div>
  );
}
