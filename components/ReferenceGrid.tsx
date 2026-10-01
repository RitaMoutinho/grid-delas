"use client";

import { useState } from "react";
import Image from "next/image";
import { references, type Area } from "@/lib/references";

const areas: Area[] = ["Pilotagem", "Engenharia", "Estratégia", "Mídia", "Gestão"];

function initials(name: string): string {
  return name
    .split(" ")
    .filter((w) => w.length > 2 || w === name.split(" ")[0])
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ReferenceGrid() {
  const [filter, setFilter] = useState<Area | "Todas">("Todas");

  const shown = filter === "Todas" ? references : references.filter((r) => r.area === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {(["Todas", ...areas] as const).map((a) => (
          <button
            key={a}
            onClick={() => setFilter(a)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
              filter === a
                ? "bg-[var(--pink)] text-black border-[var(--pink)]"
                : "border-white/20 text-neutral-300 hover:border-white/50"
            }`}
          >
            {a}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {shown.map((r) => (
          <a
            key={r.name}
            href={r.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col hover:border-[var(--pink)]/50 transition-colors"
          >
            <div className="relative aspect-[4/3] bg-neutral-900">
              {r.photo ? (
                <Image
                  src={r.photo}
                  alt={r.name}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-3xl font-bold text-black"
                  style={{ backgroundColor: r.color }}
                >
                  {initials(r.name)}
                </div>
              )}
              <span
                className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-black"
                style={{ backgroundColor: r.color }}
              >
                {r.area}
              </span>
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1">
              <div>
                <p className="font-semibold leading-tight">{r.name}</p>
                <p className="text-xs text-neutral-400">
                  {r.role} · {r.org}
                </p>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">{r.blurb}</p>
              <span className="text-xs font-medium text-neutral-500 group-hover:text-[var(--pink)] mt-auto pt-2">
                Saiba mais →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
