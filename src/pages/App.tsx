import { ArrowRight, BriefcaseBusiness, Code2, Database, Flame, Mail, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Scene } from "../components/Scene";
import { profile, projects, technologyRationale } from "../data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" }
};

export function App() {
  return (
    <div className="shell">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <motion.p className="eyebrow" {...fadeUp}>Portfolio für Bewerbungen</motion.p>
            <motion.h1 {...fadeUp}>
              {profile.name}
              <span>{profile.role}</span>
            </motion.h1>
            <motion.p className="hero-text" {...fadeUp}>{profile.intro}</motion.p>
            <motion.div className="hero-actions" {...fadeUp}>
              <a className="primary-button" href="#projects">
                Projekte ansehen <ArrowRight size={18} />
              </a>
              <a className="ghost-button" href={`mailto:${profile.email}`}>
                Kontakt <Mail size={18} />
              </a>
            </motion.div>
            <motion.div className="metric-row" {...fadeUp}>
              <div><strong>C#/.NET</strong><span>Schwerpunkt</span></div>
              <div><strong>4</strong><span>Showcase-Projekte</span></div>
              <div><strong>MSSQL</strong><span>Daten & Backend</span></div>
            </motion.div>
          </div>
          <div className="hero-scene" aria-hidden="true">
            <Scene />
          </div>
        </section>

        <section className="section profile-grid">
          {profile.highlights.map((item, index) => (
            <motion.article className="glass-panel" key={item} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }}>
              {[<Code2 />, <BriefcaseBusiness />, <ShieldCheck />][index]}
              <p>{item}</p>
            </motion.article>
          ))}
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Ausgewählte Arbeit</p>
            <h2>Projekte</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.slug}
                style={{ "--accent": project.accent } as React.CSSProperties}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              >
                <div className="project-orbit" />
                <div className="project-card-top">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <div className="tag-row">
                  {project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link to={`/projects/${project.slug}`} className="card-link">
                  Projekt öffnen <ArrowRight size={17} />
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section split" id="skills">
          <motion.div className="section-heading sticky-heading" {...fadeUp}>
            <p className="eyebrow">Stack</p>
            <h2>Technisch breit, beruflich klar auf .NET fokussiert.</h2>
            <p>
              Mein beruflicher Schwerpunkt liegt auf C#/.NET, WPF, Blazor und Microsoft SQL Server.
              Private Projekte nutze ich zusätzlich, um Produktideen schnell sichtbar zu machen und technische Breite aufzubauen.
            </p>
          </motion.div>
          <div className="skill-list">
            <motion.div className="skill-block rationale-block" {...fadeUp}>
              <h3>{technologyRationale.title}</h3>
              <p>{technologyRationale.text}</p>
              <div className="rationale-list">
                {technologyRationale.points.map((point) => <span key={point}>{point}</span>)}
              </div>
            </motion.div>
            {Object.entries(profile.skills).map(([group, items]) => (
              <motion.div className="skill-block" key={group} {...fadeUp}>
                <h3>{group}</h3>
                <div className="tag-row">
                  {items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section timeline">
          <div className="section-heading">
            <p className="eyebrow">Lebenslauf</p>
            <h2>Praxis in Unternehmenssoftware und eigene Produktideen.</h2>
          </div>
          {profile.timeline.map((item) => (
            <motion.article className="timeline-item" key={`${item.period}-${item.title}`} {...fadeUp}>
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <strong>{item.company}</strong>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="section contact" id="contact">
          <Flame size={30} />
          <h2>Bereit für den nächsten Schritt.</h2>
          <p>
            Für Gespräche über .NET, Webentwicklung, Datenbanken oder eigene Projekte bin ich direkt erreichbar.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={`mailto:${profile.email}`}>
              <Mail size={18} /> E-Mail schreiben
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
