import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import profilePhoto from "./assets/profile.jpg";
import "./index.css";

const linkedinUrl = "https://www.linkedin.com/in/vijayv123";
const githubUrl = "https://github.com/Vijayv123";

const projects = [
  {
    title: "Brand Identity Design",
    type: "Branding",
    year: "2026",
    description: "Complete visual identity concept with logo, colors, typography, and social media assets.",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
    tags: ["Logo", "Branding", "Visual Design"],
    demoUrl: "#contact",
    codeUrl: githubUrl,
  },
  {
    title: "School ERP Dashboard",
    type: "UI/UX Design",
    year: "2026",
    description: "Clean admin dashboard layout for students, fees, attendance, teachers, and reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Dashboard", "React", "UI Design"],
    demoUrl: "#contact",
    codeUrl: githubUrl,
  },
  {
    title: "To-Do App with Authentication",
    type: "Development",
    year: "2026",
    description: "Task management app with login, protected routes, CRUD features, and responsive UI.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "#contact",
    codeUrl: githubUrl,
  },
  {
    title: "Restaurant / Hotel Business Website",
    type: "Web Design",
    year: "2026",
    description: "Landing page concept for a food business with menu highlights, offers, and contact section.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Landing Page", "Food", "Responsive"],
    demoUrl: "#contact",
    codeUrl: githubUrl,
  },
];

const filters = ["All", "Web Design", "UI/UX Design", "Branding", "Development"];

function Icon({ name, className = "h-5 w-5" }) {
  const props = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" };
  const icons = {
    arrow: <svg {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>,
    external: <svg {...props}><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>,
    github: <svg {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.7-5.36-.7-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.3-.75 2.15-.67.3-2.35.85-3.25-1.15 0 0-.6-1.1-1.75-1.2 0 0-1.1 0-.08.7 0 0 .75.35 1.27 1.65 0 0 .68 2.1 3.78 1.4V22" /></svg>,
    linkedin: <svg {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
    mail: <svg {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-10 6L2 7" /></svg>,
    phone: <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.57 2.61a2 2 0 0 1-.45 2.11L8 9.67a16 16 0 0 0 6.33 6.33l1.23-1.23a2 2 0 0 1 2.11-.45c.84.25 1.71.45 2.61.57A2 2 0 0 1 22 16.92z" /></svg>,
    location: <svg {...props}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  };
  return icons[name] || null;
}

function Button({ children, href, variant = "primary", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition";
  const styles = variant === "primary" ? "bg-white text-slate-950 hover:bg-slate-100" : variant === "dark" ? "bg-slate-950 text-white hover:bg-slate-800" : "border border-white/25 text-white hover:bg-white/10";
  const classes = `${base} ${styles} ${className}`;
  if (href) return <a href={href} className={classes} {...props}>{children}</a>;
  return <button className={classes} {...props}>{children}</button>;
}

function ContactForm() {
  const [status, setStatus] = useState("");
  return (
    <form action="https://formsubmit.co/vijayvraj2000@gmail.com" method="POST" onSubmit={() => setStatus("Sending your message...")} className="grid gap-4">
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New portfolio contact message" />
      <input type="hidden" name="_template" value="table" />
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Your Name" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
        <input name="email" type="email" required placeholder="Your Email" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
      </div>
      <input name="subject" required placeholder="Subject" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
      <textarea name="message" required rows="5" placeholder="Your Message" className="resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600" />
      <button type="submit" className="w-full rounded-xl bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-slate-800 md:w-fit md:min-w-56">Send Message</button>
      {status && <p className="text-sm font-medium text-slate-600">{status}</p>}
    </form>
  );
}

function App() {
  const [filter, setFilter] = useState("All");
  const filteredProjects = useMemo(() => filter === "All" ? projects : projects.filter((project) => project.type === filter), [filter]);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section id="home" className="bg-[radial-gradient(circle_at_70%_35%,#1e3a8a55,transparent_30%),linear-gradient(135deg,#020617,#07111f_55%,#020617)] text-white">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-2xl font-black text-slate-950">V</span>
            <span><span className="block font-bold">VIJAY V</span><span className="text-sm text-slate-300">Designer & Developer</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="hover:text-blue-300">Home</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#projects" className="hover:text-blue-300">Projects</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </nav>
          <Button href="#contact" variant="outline">Let's Talk <Icon name="arrow" className="ml-2 h-4 w-4" /></Button>
        </header>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-2xl font-medium">Hi, I'm</p>
            <h1 className="mt-3 bg-gradient-to-r from-indigo-300 to-blue-400 bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-7xl">Vijay V</h1>
            <h2 className="mt-5 text-4xl font-bold md:text-5xl">Designer & Developer</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">I create clean, user-focused digital experiences that are beautiful, functional and impactful.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects">View My Work <Icon name="arrow" className="ml-2 h-4 w-4" /></Button>
              <Button href="#contact" variant="outline">Contact Me <Icon name="mail" className="ml-2 h-4 w-4" /></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm">
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-300"><span className="grid h-10 w-10 place-items-center rounded-full bg-blue-600"><Icon name="linkedin" /></span><span><b>LinkedIn</b><br />/in/vijayv123</span></a>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-300"><span className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-950"><Icon name="github" /></span><span><b>GitHub</b><br />/Vijayv123</span></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="flex justify-center">
            <div className="rounded-full border border-white/30 bg-white/10 p-4 shadow-2xl shadow-blue-950/50">
              <img src={profilePhoto} alt="Vijay V" className="h-72 w-72 rounded-full object-cover object-top md:h-[420px] md:w-[420px]" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-bold uppercase tracking-widest text-blue-600">About Me</p>
        <h2 className="mt-3 text-4xl font-black">Design-minded developer from India.</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">I enjoy creating simple, useful, and professional digital products. My work combines visual design, frontend development, and real business understanding from running my own hotel business.</p>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="font-bold uppercase tracking-widest text-blue-600">My Work</p><h2 className="mt-3 text-4xl font-black">Selected Projects</h2></div>
          <div className="flex flex-wrap gap-3">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-xl border px-4 py-2 text-sm font-medium ${filter === item ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"}`}>{item}</button>)}</div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="mt-3 inline-block rounded-lg bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{project.type}</span>
                <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
                <div className="mt-6 flex items-center justify-between gap-3 text-blue-700">
                  <a href={project.demoUrl} className="inline-flex items-center gap-2 font-semibold">View Project <Icon name="arrow" className="h-4 w-4" /></a>
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold">Code Link <Icon name="external" className="h-4 w-4" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-bold uppercase tracking-widest text-blue-600">Get In Touch</p>
            <h2 className="mt-3 text-4xl font-black">Contact Me</h2>
            <p className="mt-5 leading-7 text-slate-600">Have a project in mind or just want to say hi? Feel free to reach out.</p>
            <div className="mt-8 space-y-5 text-slate-700">
              <p className="flex items-center gap-4"><Icon name="mail" /> vijayvraj2000@gmail.com</p>
              <p className="flex items-center gap-4"><Icon name="phone" /> +91 98765 43210</p>
              <p className="flex items-center gap-4"><Icon name="location" /> India</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-slate-950 px-6 py-10 text-center text-slate-300">© 2026 Vijay V. All rights reserved.</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
