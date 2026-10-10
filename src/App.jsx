import React, { useState } from "react";
const motion = {
  div: ({ children, className, style, onClick, id }) => <div className={className} style={style} onClick={onClick} id={id}>{children}</div>,
  span: ({ children, className, style }) => <span className={className} style={style}>{children}</span>,
  h1: ({ children, className, style }) => <h1 className={className} style={style}>{children}</h1>,
  h2: ({ children, className, style }) => <h2 className={className} style={style}>{children}</h2>,
  p: ({ children, className, style }) => <p className={className} style={style}>{children}</p>,
  aside: ({ children, className, style }) => <aside className={className} style={style}>{children}</aside>,
  article: ({ children, className, style }) => <article className={className} style={style}>{children}</article>,
};
import {
  ArrowRight, Download, Github, Linkedin, Mail, MapPin, Menu, X,
  ExternalLink, Eye, Sparkles, MessageCircle, FileText, Code2, Terminal,
} from "lucide-react";
const smartCollegeImg = "/college-management.jpg";

const profile = {
  name: "Mani Chandan",
  role: "Full Stack Java Developer",
  college: "Chaitanya Deemed to be University",
  location: "Hyderabad, India",
  email: "manichandan@example.com",
  whatsapp: "917995179907",
  linkedin: "https://www.linkedin.com/in/manichandan-manupati-07a02741a/",
  github: "https://github.com/manupatimanichandan127",
};

const skills = [
  { name: "Python",     emoji: "🐍", tone: "yellow" },
  { name: "Java",       emoji: "☕", tone: "orange" },
  { name: "HTML",       emoji: "🌐", tone: "orange" },
  { name: "CSS",        emoji: "🎨", tone: "purple" },
  { name: "JavaScript", emoji: "⚡", tone: "yellow" },
  { name: "React",      emoji: "⚛️",  tone: "purple" },
  { name: "Node.js",    emoji: "🟢", tone: "green" },
  { name: "MySQL",      emoji: "🗄️",  tone: "orange" },
  { name: "Git",        emoji: "🔀", tone: "red" },
  { name: "GitHub",     emoji: "🐙", tone: "white" },
  { name: "VS Code",    emoji: "💻", tone: "purple" },
  { name: "Postman",    emoji: "📮", tone: "pink" },
];

const projects = [
  {
    title: "Student Discussion Forum",
    tags: ["React", "Tailwind CSS", "LocalStorage"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    link: profile.github,
  },
  {
    title: "Movie Ticket Management System",
    tags: ["React", "Node.js", "MySQL"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    link: profile.github,
  },
  {
    title: "Quiz Application",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    link: profile.github,
  },
  {
    title: "Smart College Management System",
    tags: ["React", "Node.js", "MySQL"],
    image: smartCollegeImg,
    link: profile.github,
  },
];

const education = [
  { years: "2022 – 2026", title: "B.Tech in Computer Science Engineering", place: profile.college, result: "CGPA: 7.8" },
  { years: "2020 – 2022", title: "Intermediate (MPC)", place: "Trinity Junior College", result: "Percentage: 59.4%" },
  { years: "2018 – 2020", title: "SSC", place: "Vignan High School, Sultanabad", result: "CGPA: 9.3" },
];

const certifications = [
  { title: "React.js Developer Certification", provider: "Udemy",      emoji: "⚛️" },
  { title: "Java Full Stack Developer",         provider: "TekS Academy", emoji: "☕" },
  { title: "Python Programming",               provider: "Coursera",   emoji: "🐍" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function PanelTitle({ title }) {
  return (
    <div className="panel-title">
      <span className="panel-title-bar" />
      <h2>{title}</h2>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Education", "Projects", "Certifications", "Resume", "Contact"];
  return (
    <header className="navbar glass">
      <a className="brand" href="#home" aria-label="Mani Chandan home">M<span>C</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map((link, i) => <a key={link} className={i === 0 ? "active" : ""} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
      </nav>
      <a className="button button-primary nav-cta" href="#contact">Let's Talk <ArrowRight size={15} /></a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero glass section-anchor" id="home">
      <div className="hero-copy">
        <motion.span className="hello" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>Hi, I'm</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>Mani <span>Chandan</span></motion.h1>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>A {profile.role}</motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Passionate about building modern web applications and exploring new technologies. Currently pursuing B.Tech in Computer Science Engineering.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <a href="#projects" className="button button-primary">View My Projects <ArrowRight size={16} /></a>
          <a href="#resume" className="button button-outline"><Download size={16} /> Download Resume</a>
        </motion.div>
        <div className="socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="portrait-orbit orbit-one" />
        <div className="portrait-orbit orbit-two" />
        <div className="portrait-glow" />
        <div className="avatar-glass-emblem">
          <Code2 size={56} className="emblem-icon" />
          <span className="emblem-title">Mani Chandan</span>
          <span className="emblem-sub">Full Stack Java Developer</span>
        </div>
      </div>

      <motion.aside className="hero-info glass-inner" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }}>
        <div className="availability"><span className="status-icon"><Sparkles size={19} /></span><div><strong>Open to Opportunities</strong><small><i /> Available for opportunities</small></div></div>
        <div className="info-row"><span className="info-icon"><MapPin /></span><div><small>Location</small><strong>{profile.location}</strong></div></div>
        <div className="info-row"><span className="info-icon"><Mail /></span><div><small>Email</small><strong>{profile.email}</strong></div></div>
        <div className="info-row"><span className="info-icon whatsapp"><MessageCircle /></span><div><small>WhatsApp</small><strong>+91 7995179907</strong></div></div>
      </motion.aside>
    </section>
  );
}

function About() {
  return (
    <section className="section-anchor" id="about">
      <PanelTitle title="About Me" />
      <div className="about-grid">
        <motion.div className="glass panel about-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="about-avatar-wrap">
            <div className="about-avatar">
              <Terminal size={32} />
              <span>Full Stack Java Developer</span>
            </div>
          </div>
          <p>I am Mani Chandan, a final year B.Tech CSE student with a strong interest in web development. I love building modern, user-friendly web applications and continuously learning new technologies. My goal is to become a successful Full Stack Java Developer and contribute to real-world projects.</p>
        </motion.div>
        <motion.div className="glass panel facts-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {[["Name", profile.name], ["Degree", "B.Tech"], ["Branch", "Computer Science Engineering"], ["College", profile.college], ["Location", profile.location]].map(([k, v]) => <div className="fact" key={k}><span>{k}</span><strong>{v}</strong></div>)}
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-anchor" id="skills">
      <PanelTitle title="My Skills" />
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div className="glass skill-card" key={skill.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
            <span className="skill-emoji">{skill.emoji}</span>
            <strong>{skill.name}</strong>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-anchor" id="education">
      <PanelTitle title="Education" />
      <div className="glass panel timeline">
        {education.map((item, i) => (
          <motion.article className="timeline-item" key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <span className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-years">{item.years}</span>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <small>{item.result}</small>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-anchor" id="projects">
      <div className="projects-section-header">
        <PanelTitle title="My Projects" />
        <a href={profile.github} target="_blank" rel="noreferrer" className="view-all-btn">View All +</a>
      </div>
      <div className="projects-grid-2x2">
        {projects.map((project, i) => (
          <motion.article className="glass project-card" key={project.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              <span className="image-overlay" />
            </div>
            <div className="project-body">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub`}><ExternalLink size={14} /></a>
              </div>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="section-anchor" id="certifications">
      <PanelTitle title="Certifications" />
      <div className="cert-list">
        {certifications.map((cert, i) => (
          <motion.article className="glass cert-card" key={`${cert.title}-${i}`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="cert-emoji">{cert.emoji}</span>
            <div><h3>{cert.title}</h3><p>{cert.provider}</p></div>
            <ExternalLink className="cert-external" size={15} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="section-anchor" id="resume">
      <PanelTitle title="My Resume" />
      <div className="glass resume-card">
        <div className="pdf-icon"><FileText size={43} /><span>PDF</span></div>
        <div className="resume-copy">
          <h3>Mani Chandan</h3>
          <strong>{profile.role}</strong>
          <p>Download my latest resume to know more about my education, skills, projects and experience.</p>
          <div className="resume-actions">
            <a className="button button-primary" href="/resume.pdf" download><Download size={16} /> Download Resume</a>
            <a className="button button-outline" href="/resume.pdf" target="_blank" rel="noreferrer"><Eye size={16} /></a>
          </div>
        </div>
        <div className="resume-art"><div className="doc-sheet"><span /><span /><span /><span /><span /></div><div className="pdf-badge">PDF</div></div>
      </div>
    </section>
  );
}

function Contact() {
  const contacts = [
    { title: "Email",    value: profile.email,      icon: Mail,          href: `mailto:${profile.email}`,                      tone: "white" },
    { title: "WhatsApp", value: "+91 7995179907",     icon: MessageCircle, href: `https://wa.me/${profile.whatsapp}`,             tone: "white" },
    { title: "Location", value: profile.location,   icon: MapPin,        href: "https://maps.google.com/?q=Hyderabad,India",    tone: "white" },
  ];
  return (
    <section className="section-anchor" id="contact">
      <PanelTitle title="Contact Me" />
      <p className="contact-sub">Feel free to connect with me for opportunities or just a friendly chat!</p>
      <div className="contact-grid-3">
        {contacts.map(c => {
          const Icon = c.icon;
          return (
            <a className="glass contact-card" href={c.href} target={c.title !== "Email" ? "_blank" : undefined} rel="noreferrer" key={c.title}>
              <span className={`contact-icon ${c.tone}`}><Icon size={22} /></span>
              <strong>{c.title}</strong>
              <span>{c.value}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="ambient ambient-three" />
      <div className="site-container">
        <Navbar />
        <main>
          <Hero />
          <div className="content-grid">
            <About /><Skills /><Education /><Projects /><Certifications /><Resume /><Contact />
          </div>
        </main>
        <footer><a className="brand" href="#home">Mani<span>Chandan</span></a><p>Designed &amp; built by Mani Chandan</p><a href="#home" className="back-top">Back to top ↑</a></footer>
      </div>
    </div>
  );
}