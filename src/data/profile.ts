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
  image?: string;
  imageAlt?: string;
  video?: string;
  videoTitle?: string;
  summary: string;
  details: string[];
  impact: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "schliesfach",
    title: "Schließfach",
    subtitle: "Onlineshop mit Abholung per Code und API-gesteuerten Schließfächern",
    type: "Full-Stack Web App",
    year: "2026",
    stack: ["Next.js 16", "React 19", "TypeScript", "MSSQL", "Docker", "HMAC"],
    accent: "#33d6ff",
    summary:
      "Dies ist eine Website, die einen Onlineshop abbildet. Kunden können hier Artikel kaufen, erhalten diese jedoch nicht per Post nach Hause geliefert.",
    details: [
      "Stattdessen bekommen sie einen Code per E-Mail zugeschickt, den sie anschließend vor Ort an einer Box eingeben können, um ihr Paket abzuholen.",
      "Im Hintergrund steuert eine API die Schließfächer und sorgt dafür, dass sich das jeweilige Fach nach Eingabe des korrekten Codes automatisch öffnet.",
      "Der Betreiber verfügt zudem über eine eigene Admin-Oberfläche zur Verwaltung."
    ],
    impact: [
      "Ursprünglich habe ich diese Seite im Rahmen meines Minijobs programmiert.",
      "Das Projekt verbindet Onlineshop, Code-Versand, Schließfachsteuerung und Administration zu einem vollständigen Ablauf.",
      "Es zeigt den Umgang mit Frontend, Backend, Datenbank und API-gesteuerter Hardware-Anbindung."
    ]
  },
  {
    slug: "mrpanini",
    title: "MrPanini",
    subtitle: "Mockup einer digitalen Bestellseite für ein Restaurant",
    type: "Produktnahe Web App",
    year: "2025",
    stack: ["Next.js 14", "React", "TypeScript", "Radix UI", "Tailwind", "Zod"],
    accent: "#ffb020",
    summary:
      "MrPanini war ein Mockup einer Bestellseite für ein Restaurant. Die Seite zeigt beispielhaft, wie Kunden Speisen online auswählen und bestellen könnten.",
    details: [
      "Das Projekt war bereits teilweise funktionsfähig umgesetzt.",
      "Es enthielt unter anderem eine Speisekarte, einen Warenkorb sowie eine eigene Admin-Oberfläche zur Verwaltung.",
      "Die Oberfläche bildet einen beispielhaften digitalen Bestellprozess für ein Restaurant ab."
    ],
    impact: [
      "Zeigt, wie ein Restaurant-Bestellprozess online strukturiert werden kann.",
      "Verbindet Kundensicht und Verwaltungsoberfläche in einem Projekt.",
      "Dient als praxisnahes Beispiel für UI-Aufbau, Warenkorb-Logik und Admin-Funktionen."
    ]
  },
  {
    slug: "speechtomindmap",
    title: "SpeechToMindMap",
    subtitle: "Gespräche aufnehmen, auswerten und automatisch als Mindmap visualisieren",
    type: "Produktivitäts-Tool",
    year: "2025",
    stack: ["JavaScript", "Tailwind CSS", "Prompt Engineering", "UI Prototyping"],
    accent: "#8cffc1",
    image: "/projects/speechtomindmap.png",
    imageAlt: "Screenshot der SpeechToMindMap Anwendung mit Mindmap und Aufnahme-Seitenleiste",
    summary:
      "Dieses Projekt nimmt über ein Mikrofon Gespräche auf und wertet diese automatisch aus. Der aufgenommene Inhalt wird zusammengefasst und anschließend über eine API-Schnittstelle in ein passendes JSON-Format für eine Mindmap umgewandelt.",
    details: [
      "Aus dem zurückgelieferten JSON wird automatisch eine Mindmap generiert, die das Gespräch übersichtlich und strukturiert visualisiert.",
      "Die Anwendung ist speziell für Kickoff-Meetings gedacht und hält erste Ergebnisse und Ideen direkt während des Gesprächs fest.",
      "Zusätzlich verfügt das Projekt über ein Session-System, sodass einzelne Meetings als eigenständige Sitzungen verwaltet werden können."
    ],
    impact: [
      "Ergebnisse können ganz ohne Moderator gesammelt werden, der manuell mitschreibt oder die Diskussion zusammenfasst.",
      "Erstellte Mindmaps können gespeichert, wiedergefunden und im Nachhinein erneut aufgerufen werden.",
      "Das Projekt verbindet Audioaufnahme, Transkription, API-Verarbeitung und automatische Visualisierung."
    ]
  },
  {
    slug: "mindrunner",
    title: "MindRunner",
    subtitle: "Kleines Jump-and-Run-Minispiel mit Gegnern und Projektilen",
    type: "Game/Logic Project",
    year: "2025",
    stack: ["Python", "Game Loop", "OOP", "Collision Logic", "Asset Handling"],
    accent: "#ff5f7e",
    video: "/projects/mindrunner.mp4",
    videoTitle: "MindRunner Gameplay",
    summary:
      "MindRunner ist ein kleines Jump-and-Run-Minispiel. Der Spieler bewegt sich durch die Spielwelt, springt über Hindernisse und kann auf Gegner treffen, die sich abschießen lassen.",
    details: [
      "Der Spieler steuert eine Figur durch eine eigene Spielwelt.",
      "Hindernisse, Gegner und abschießbare Ziele sorgen für einfache Spielmechaniken.",
      "Die Spiellogik ist in mehrere Python-Module aufgeteilt."
    ],
    impact: [
      "Zeigt den Umgang mit Game Loop, Zuständen und Kollisionen.",
      "Macht interaktive Logik außerhalb klassischer Web- oder Business-Anwendungen sichtbar.",
      "Dient als kleines Beispiel für objektorientierte Strukturierung in Python."
    ]
  }
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
