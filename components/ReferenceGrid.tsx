"use client";

import { useState } from "react";
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
                ? "bg-white text-black border-white"
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
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-3 hover:border-white/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black shrink-0"
                style={{ backgroundColor: r.color }}
              >
                {initials(r.name)}
              </div>
              <div className="min-w-0">
                <p className="font-semibold leading-tight truncate">{r.name}</p>
                <p className="text-xs text-neutral-400 truncate">
                  {r.role} · {r.org}
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">{r.blurb}</p>
            <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 mt-auto">
              Saiba mais →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
