export const profile = {
  name: "André Krämer",
  role: "Softwareentwickler (.NET)",
  email: "andrekraemer94@gmail.com",
  github: "https://github.com/AkRs660",
  location: "Ostrhauderfehn, Niedersachsen",
  intro:
    "Softwareentwickler mit beruflichem Schwerpunkt auf C#, .NET, WPF, Blazor und Microsoft SQL Server. In privaten Projekten nutze ich bewusst auch React, Next.js und Python, weil sich damit Ideen schnell als sichtbare Prototypen, Web-Tools oder interaktive Anwendungen umsetzen lassen.",
  highlights: [
    "C#/.NET als gelernter und beruflich eingesetzter Schwerpunkt mit WPF, Blazor und MSSQL",
    "Praxis in Unternehmenssoftware, Testing, Git und Azure DevOps",
    "Private Projekte bewusst technologieoffen: React für UI-Prototypen, Python für Automatisierung und Logik"
  ],
  skills: {
    "Programmiersprachen": ["C#", "Python", "C++", "TypeScript", "HTML5", "CSS3"],
    "Frameworks": [".NET", "WPF", "Blazor", "Next.js", "React"],
    "Daten & Backend": ["Microsoft SQL Server", "HMAC-signierte APIs", "Docker", "REST"],
    "Arbeitsweise": ["Git", "Azure DevOps", "Scrum", "Unit Testing", "Spec Testing"]
  },
  timeline: [
    {
      period: "Seit 08/2025",
      title: "Softwareentwickler (.NET)",
      company: "J. Bünting Beteiligungs AG",
      text:
        "Entwicklung und Weiterentwicklung von Softwarelösungen mit C#/.NET, WPF, Blazor und Microsoft SQL Server. Arbeit im Scrum-Team mit Git, Azure DevOps, Unit-Tests, Spec-Tests und laufender Optimierung bestehender Anwendungen."
    },
    {
      period: "08/2022 - 07/2025",
      title: "Ausbildung Fachinformatiker Anwendungsentwicklung",
      company: "J. Bünting Beteiligungs AG",
      text:
        "Duale Ausbildung mit anerkanntem ersten Ausbildungsjahr durch die IHK. Abschluss im Juli 2025."
    },
    {
      period: "Seit 08/2021",
      title: "Aushilfe und technische Konfiguration",
      company: "Alting Landtechnik GmbH",
      text:
        "Programmierung und individuelle Konfiguration von Rasenmährobotern, Einrichtung, Funktionsprüfung und Unterstützung im Tagesgeschäft."
    }
  ]
};

export const technologyRationale = {
  title: "Warum private Projekte oft React oder Python nutzen",
  text:
    "C# und .NET sind mein fachlicher Schwerpunkt aus Ausbildung und Beruf. Für private Projekte wähle ich die Technologie aber nach Ziel und Umsetzungsgeschwindigkeit: React/Next.js eignet sich sehr gut, um Ideen schnell als moderne Weboberfläche sichtbar zu machen, während Python stark ist für Prototypen, Automatisierung, Spiel- und Datenlogik. Das ist keine Abkehr von C#, sondern ein bewusster Weg, neben dem beruflichen .NET-Stack zusätzliche Perspektiven auf Frontend, Produktentwicklung und schnelle Iteration aufzubauen.",
  points: [
    "C#/.NET bleibt die Grundlage für professionelle Anwendungsentwicklung und Unternehmenssoftware.",
    "React/Next.js nutze ich privat, wenn eine Idee schnell testbar, klickbar und im Browser erreichbar sein soll.",
    "Python nutze ich privat für Logik, Automatisierung und experimentelle Projekte, bei denen schnelle Iteration wichtiger ist als ein kompletter Enterprise-Stack."
  ]
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  year: string;
  stack: string[];
  repo?: string;
  summary: string;
  details: string[];
  impact: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "schliesfach",
    title: "Schliesfach",
    subtitle: "Full-Stack-Plattform mit Next.js, MSSQL und abgesicherter Purchase-API",
    type: "Full-Stack Web App",
    year: "2026",
    stack: ["Next.js 16", "React 19", "TypeScript", "MSSQL", "Docker", "HMAC"],
    accent: "#33d6ff",
    summary:
      "Schliesfach ist das technisch stärkste Projekt im Portfolio: eine moderne Webanwendung mit Datenbank, serverseitiger Kaufweitergabe und sauberer Trennung zwischen Frontend, Datenmodell und Python-API.",
    details: [
      "Next.js-App mit Artikel-, Auth- und Kaufprozessen auf Basis von Microsoft SQL Server.",
      "Serverseitige Purchase-API-Anbindung mit gemeinsamem Secret, Timestamp und HMAC-Signatur.",
      "Dockerisierte MSSQL-Entwicklungsumgebung mit Initialisierungsskripten für reproduzierbare Datenbankzustände."
    ],
    impact: [
      "Zeigt Full-Stack-Denken über UI, Datenbank, API-Sicherheit und Betrieb hinweg.",
      "Passt fachlich zu .NET/MSSQL-Unternehmensumfeldern, weil Datenmodellierung und saubere Prozessgrenzen sichtbar werden.",
      "Geeignet als Gesprächsanker für Sicherheit, Deployment, Fehlerbehandlung und Schnittstellendesign."
    ]
  },
  {
    slug: "mrpanini",
    title: "MrPanini",
    subtitle: "Bestell- und Admin-Erlebnis für ein digitales Food-/Menüsystem",
    type: "Produktnahe Web App",
    year: "2025",
    stack: ["Next.js 14", "React", "TypeScript", "Radix UI", "Tailwind", "Zod"],
    accent: "#ffb020",
    summary:
      "MrPanini wirkt wie ein echtes Produkt: Menü, Warenkorb, Bestellung, Login/Register, Kontakt und Admin-Bereiche sind als zusammenhängender digitaler Workflow aufgebaut.",
    details: [
      "App-Router-Struktur mit getrennten Bereichen für Menü, Order-Flow, Kontakt, Login, Registrierung und Administration.",
      "Komponentenbasierte Oberfläche mit Radix UI, Formularlogik, Validierung und wiederverwendbaren UI-Bausteinen.",
      "Admin-nahe Seiten für Verwaltungsszenarien, die über reine Showcase-UI hinausgehen."
    ],
    impact: [
      "Demonstriert Produktverständnis: Nutzerführung, Bestellprozess und Verwaltungsoberfläche greifen zusammen.",
      "Starker Nachweis für moderne React-/Next.js-Architektur und komponentenorientiertes Arbeiten.",
      "Bietet gutes Material für Bewerbungsgespräche über UX, Datenflüsse und saubere Frontend-Strukturen."
    ]
  },
  {
    slug: "speechtomindmap",
    title: "SpeechToMindMap",
    subtitle: "Ideen aus Sprache und Notizen in strukturierte Mindmaps bringen",
    type: "Produktivitäts-Tool",
    year: "2025",
    stack: ["JavaScript", "Tailwind CSS", "Prompt Engineering", "UI Prototyping"],
    accent: "#8cffc1",
    summary:
      "SpeechToMindMap ist ein kompaktes Tool-Konzept, das unstrukturierte Eingaben in eine visuell besser nutzbare Denkstruktur übersetzt.",
    details: [
      "Tailwind-basierte Oberfläche mit Fokus auf schnelle Eingabe und visuelle Strukturierung.",
      "Prompt- und Ausgabeoptimierung als Kern der Produktidee.",
      "Lokale und offizielle Varianten zeigen Iteration von Experiment zu stabilerer Version."
    ],
    impact: [
      "Zeigt Interesse an KI-nahen Workflows und nutzerorientierten Produktivitätstools.",
      "Guter Beleg für schnelles Prototyping und Verbesserung durch Prompt-Iteration.",
      "Ergänzt das Portfolio um ein Tool abseits klassischer CRUD-Anwendungen."
    ]
  },
  {
    slug: "mindrunner",
    title: "MindRunner",
    subtitle: "Python-Game mit eigener Spiellogik, Gegnern und Projektilsystem",
    type: "Game/Logic Project",
    year: "2025",
    stack: ["Python", "Game Loop", "OOP", "Collision Logic", "Asset Handling"],
    accent: "#ff5f7e",
    summary:
      "MindRunner zeigt, dass André nicht nur Business-UIs baut, sondern auch Zustände, Interaktion, Gegnerverhalten und Timing in einer eigenen Spielwelt strukturieren kann.",
    details: [
      "Eigene Python-Module für Character, Controller, Enemy, Projectile, Title Screen und Game Over Screen.",
      "Mehrere Logikbereiche getrennt in Dateien statt als monolithisches Script.",
      "Spielzustände, Gegner- und Projektilverhalten als objektorientierte Struktur umgesetzt."
    ],
    impact: [
      "Demonstriert algorithmisches Denken, Zustandsmanagement und interaktive Systeme.",
      "Macht technische Vielseitigkeit sichtbar, ohne vom .NET-Schwerpunkt abzulenken.",
      "Guter Gesprächseinstieg zu Architekturentscheidungen in kleinen Projekten."
    ]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
