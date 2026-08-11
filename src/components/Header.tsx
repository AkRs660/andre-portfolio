import { Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Startseite">
        AK
      </Link>
      <nav>
        <a href="/#projects">Projekte</a>
        <a href="/#skills">Skills</a>
        <a href="/#contact">Kontakt</a>
      </nav>
      <div className="header-actions">
        <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
          <Github size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="E-Mail">
          <Mail size={18} />
        </a>
      </div>
    </header>
  );
}
