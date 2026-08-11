import { ArrowLeft, Layers3, Rocket } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { getProject, projects } from "../data/profile";

export function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug ?? "");

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const otherProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <div className="shell project-page">
      <Header />
      <main>
        <section className="project-hero" style={{ "--accent": project.accent } as React.CSSProperties}>
          <Link to="/" className="back-link"><ArrowLeft size={17} /> Zurück</Link>
          <div className="project-title-wrap">
            <p className="eyebrow">{project.type} / {project.year}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="tag-row">
              {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="project-device">
            <div className="device-bar"><span /><span /><span /></div>
            <div className="device-grid">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </section>

        <section className="section detail-grid">
          <article className="detail-panel">
            <Layers3 size={24} />
            <h2>Was gebaut wurde</h2>
            <ul>
              {project.details.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="detail-panel">
            <Rocket size={24} />
            <h2>Warum es stark ist</h2>
            <ul>
              {project.impact.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </section>

        {project.image || project.video ? (
          <section className="section project-media-section">
            {project.video ? (
              <video controls preload="metadata">
                <source src={project.video} type="video/mp4" />
                Ihr Browser kann dieses Video nicht abspielen.
              </video>
            ) : (
              <img src={project.image} alt={project.imageAlt ?? `Screenshot von ${project.title}`} />
            )}
          </section>
        ) : null}

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Mehr Projekte</p>
            <h2>Weitere Showcase-Arbeiten</h2>
          </div>
          <div className="mini-projects">
            {otherProjects.map((item) => (
              <Link to={`/projects/${item.slug}`} className="mini-project" key={item.slug}>
                <span style={{ background: item.accent }} />
                <strong>{item.title}</strong>
                <small>{item.type}</small>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
