export type Area = "Pilotagem" | "Engenharia" | "Estratégia" | "Mídia" | "Gestão";

export interface Reference {
  name: string;
  role: string;
  org: string;
  area: Area;
  blurb: string;
  link: string;
  color: string;
  photo?: string;
  photoCredit?: string;
}

const COMMONS = "https://commons.wikimedia.org/wiki/Special:FilePath/";

// Curated list of real, publicly known women working across motorsport — not a
// complete list, a starting point. Every entry links to a public source so it can
// be verified and expanded. Photos are pulled live from Wikimedia Commons (freely
// licensed), never generated or taken from a press agency without a license.
export const references: Reference[] = [
  {
    name: "Susie Wolff",
    role: "Diretora administrativa",
    org: "F1 Academy",
    area: "Gestão",
    blurb:
      "Ex-piloto de testes da Williams na F1, hoje comanda a F1 Academy, a categoria que forma pilotas mulheres para o automobilismo de alto nível.",
    link: "https://pt.wikipedia.org/wiki/Susie_Wolff",
    color: "#00A3E0",
    photo: `${COMMONS}Susie_Wolff_2022.jpg`,
    photoCredit: "Wikimedia Commons",
  },
  {
    name: "Hannah Schmitz",
    role: "Chefe de estratégia",
    org: "Red Bull Racing",
    area: "Estratégia",
    blurb:
      "Principal estrategista da equipe campeã mundial, primeira mulher a vencer o prêmio de Estrategista do Ano da F1.",
    link: "https://en.wikipedia.org/wiki/Hannah_Schmitz",
    color: "#3671C6",
    photo: `${COMMONS}F%C3%B3rmula_1_%E2%80%93_Grande_Pr%C3%AAmio_do_Brasil_de_F1_2019_(49080039668)_(cropped)HannahSchmitz.jpg`,
    photoCredit: "Wikimedia Commons",
  },
  {
    name: "Leena Gade",
    role: "Engenheira de corrida",
    org: "Audi Sport (Le Mans)",
    area: "Engenharia",
    blurb:
      "Primeira mulher a vencer as 24 Horas de Le Mans como engenheira de corrida — e venceu três vezes.",
    link: "https://en.wikipedia.org/wiki/Leena_Gade",
    color: "#BB0A30",
    photo: `${COMMONS}Leena_Gade.jpg`,
    photoCredit: "Wikimedia Commons",
  },
  {
    name: "Naomi Schiff",
    role: "Comentarista e ex-piloto",
    org: "Sky Sports F1",
    area: "Mídia",
    blurb:
      "Ex-piloto de GT, hoje uma das principais vozes femininas e negras na cobertura de Fórmula 1 ao redor do mundo.",
    link: "https://en.wikipedia.org/wiki/Naomi_Schiff",
    color: "#C8102E",
    photo: `${COMMONS}2019_Brands_Hatch_W_Series_round_04.jpg`,
    photoCredit: "Wikimedia Commons",
  },
  {
    name: "Jamie Chadwick",
    role: "Piloto",
    org: "F1 Academy / IndyCar NXT",
    area: "Pilotagem",
    blurb: "Tricampeã da W Series, uma das pilotas mais vitoriosas da história do automobilismo feminino.",
    link: "https://pt.wikipedia.org/wiki/Jamie_Chadwick",
    color: "#229971",
  },
  {
    name: "Michèle Mouton",
    role: "Ex-piloto e dirigente",
    org: "FIA",
    area: "Gestão",
    blurb:
      "Única mulher a vencer uma prova do Mundial de Rali (WRC), hoje referência histórica e dirigente esportiva na FIA.",
    link: "https://pt.wikipedia.org/wiki/Mich%C3%A8le_Mouton",
    color: "#6692FF",
    photo: `${COMMONS}Mich%C3%A8le_Mouton_-_1985_Welsh_Rally_(interview).jpg`,
    photoCredit: "Wikimedia Commons",
  },
  {
    name: "Charlie Martin",
    role: "Piloto",
    org: "Endurance / GT racing",
    area: "Pilotagem",
    blurb:
      "Piloto trans britânica, uma das vozes mais ativas por inclusão de pessoas trans e LGBTQ+ no automobilismo mundial.",
    link: "https://en.wikipedia.org/wiki/Charlie_Martin_(racing_driver)",
    color: "#F472B6",
  },
  {
    name: "Bia Figueiredo",
    role: "Presidente",
    org: "Comissão Feminina de Automobilismo (CBA)",
    area: "Gestão",
    blurb:
      "Uma das pilotas brasileiras mais vitoriosas da Stock Car e IndyCar, hoje à frente da comissão que criou o Girls on Track Brasil.",
    link: "https://pt.wikipedia.org/wiki/Ana_Beatriz_Figueiredo",
    color: "#FFD230",
    photo: `${COMMONS}2010_IZOD_IndyCar_Series_-_S%C3%A3o_Paulo_Indy_300_Bia_Figueiredo_(Ana_Beatriz)_durante_os_treinos_de_S%C3%A1bado_-_Ana_Beatriz_during_Saturday_practice_session_(26479250344).jpg`,
    photoCredit: "Wikimedia Commons",
  },
  {
    name: "Claire Williams",
    role: "Ex-vice-diretora",
    org: "Williams Racing",
    area: "Gestão",
    blurb: "Comandou uma equipe de Fórmula 1 por anos, uma das poucas mulheres a liderar um time no grid.",
    link: "https://en.wikipedia.org/wiki/Claire_Williams",
    color: "#64C4FF",
  },
];
