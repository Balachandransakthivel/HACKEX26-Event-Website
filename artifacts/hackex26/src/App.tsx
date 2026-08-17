import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowDownRight, ArrowRight, Check, CircleCheck, Code2, Download, Factory, GraduationCap,
  HeartPulse, Lightbulb, Mail, Menu, MessageCircleQuestion, Plus, Rocket, Send, ShieldCheck,
  Trophy, Users, WalletCards, X,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import officialPoster from '@assets/WhatsApp_Image_2026-08-17_at_12.39.44_PM_1786957997551.jpeg';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

type FormState = {
  teamName: string; teamSize: string; leader: string; phone: string; email: string;
  member2: string; member3: string; member4: string; college: string; department: string; year: string;
  theme: string; problem: string; solution: string; technology: string; portfolio: string;
};

type Registration = FormState & { registrationId: string; submittedAt: string; remoteSubmitted: boolean };

const themes = [
  { name: 'Healthcare', description: 'Build for healthier, more accessible lives.', icon: HeartPulse },
  { name: 'Edutech', description: 'Reimagine how knowledge moves and sticks.', icon: GraduationCap },
  { name: 'Fintech', description: 'Make the financial system work harder for everyone.', icon: WalletCards },
  { name: 'Industrial 5.0', description: 'Put people and precision back in the factory.', icon: Factory },
  { name: 'Open Innovation', description: 'Your sharpest idea does not need a category.', icon: Lightbulb },
];

const navItems = [
  ['About', '#about'], ['Themes', '#themes'], ['Timeline', '#timeline'], ['Prizes', '#prizes'],
  ['Rules', '#rules'], ['FAQ', '#faq'],
];

const initialForm: FormState = {
  teamName: '', teamSize: '4', leader: '', phone: '', email: '', member2: '', member3: '', member4: '',
  college: '', department: '', year: '', theme: '', problem: '', solution: '', technology: '', portfolio: '',
};

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { node.classList.add('is-visible'); observer.unobserve(node); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className={`section-heading ${light ? 'light-heading' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display">{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" data-testid="link-brand">
          <span className="brand-mark"><span>HX</span></span>
          <span>HACKEX’26<small>EXCEL ENGINEERING COLLEGE</small></span>
        </a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)} data-testid={`link-nav-${label.toLowerCase()}`}>{label}</a>
          ))}
          <a href="#register" onClick={() => setMenuOpen(false)} data-testid="link-nav-register">Register</a>
        </nav>
        <a href="#register" className="nav-cta" data-testid="link-nav-cta">Register now <ArrowRight size={14} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} data-testid="button-menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-circuit" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="hero-kicker"><span /> Excel Engineering College / Techno Debuggers Club</div>
            <h1 className="display">HACKEX<em>’26</em></h1>
            <p className="hero-subtitle">A NATIONAL LEVEL HACKATHON <strong>///</strong></p>
            <p className="mono" style={{ color: '#5d6c8b', fontSize: 12, marginTop: 12, letterSpacing: '.04em' }}>CODE. COLLABORATE. CREATE IMPACT.</p>
            <div className="hero-actions">
              <a href="#register" className="button-primary" data-testid="button-hero-register">Register now <ArrowDownRight size={15} /></a>
              <a href="#about" className="button-secondary" data-testid="button-hero-explore">Explore HACKEX’26 <ArrowRight size={15} /></a>
            </div>
            <div className="hero-facts">
              <div className="fact"><b>25–26</b><span>September<br />2026</span></div>
              <div className="fact"><b>36 hrs</b><span>Non-stop<br />build</span></div>
              <div className="fact"><b>4</b><span>Members<br />per team</span></div>
              <div className="fact"><b>Offline</b><span>On campus<br />Excel EEC</span></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Illustration of a coding laptop">
            <div className="orbit" aria-hidden="true"><span className="orbit-dot" /></div>
            <div className="laptop">
              <div className="laptop-screen">
                <div className="screen-inner">
                  <div className="screen-code"><i>const</i> team = [<br />&nbsp;&nbsp;<b>'imagine'</b>,<br />&nbsp;&nbsp;<b>'build'</b>,<br />&nbsp;&nbsp;<b>'impact'</b><br />];</div>
                  <div className="screen-chip"><Code2 size={23} /></div>
                </div>
              </div>
              <div className="laptop-base" />
            </div>
            <div className="hero-stamp">36 HOURS<br /><strong>ONE SHARED<br />MISSION</strong></div>
          </div>
        </div>
      </section>
      <Countdown />
    </>
  );
}

function Countdown() {
  const target = useMemo(() => new Date('2026-09-25T09:00:00+05:30').getTime(), []);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const tick = () => {
      const distance = Math.max(0, target - Date.now());
      setTime({
        days: Math.floor(distance / 86400000),
        hours: Math.floor(distance / 3600000) % 24,
        minutes: Math.floor(distance / 60000) % 60,
        seconds: Math.floor(distance / 1000) % 60,
      });
    };
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [target]);
  const values = [['days', time.days], ['hrs', time.hours], ['min', time.minutes], ['sec', time.seconds]];
  return (
    <section className="countdown-band" aria-label="Countdown to HACKEX 26">
      <div className="container countdown-layout">
        <div className="countdown-label">The clock starts<br /><strong>25 September 2026 / 09:00</strong></div>
        <div className="countdown">
          {values.map(([label, value], index) => (
            <div className="count-box" key={label as string}>
              <b data-testid={`countdown-${label}`}>{String(value).padStart(2, '0')}</b><span>{label}</span>
              {index < values.length - 1 && <i className="count-separator">:</i>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <SectionHeading eyebrow="01 / the premise" title="Make the next 36 hours count." copy="HACKEX’26 is a national-level offline hackathon for student builders who want to take a practical idea from first sketch to working prototype. Bring the problem you cannot stop thinking about. Bring the people who will help you solve it." />
            <p className="about-lead">Not a notice. <strong>A launchpad.</strong></p>
            <p className="body-copy">Hosted by Excel Engineering College with the Techno Debuggers Club and Department of Computer Science & Engineering, HACKEX is where useful ideas get the pressure, feedback and momentum to become real.</p>
          </Reveal>
          <Reveal>
            <figure className="poster-card">
              <img src={officialPoster} alt="Official HACKEX 26 event poster from Excel Engineering College" />
              <figcaption><span>Official visual reference</span><span>HACKEX / 26</span></figcaption>
            </figure>
          </Reveal>
        </div>
        <Reveal className="why-strip">
          <h3 className="display">Why put your name on the line?</h3>
          <div className="why-items">
            {[
              [Rocket, 'Build real-world solutions, not just slide decks.'],
              [Users, 'Find your strongest collaborators under pressure.'],
              [Trophy, 'Compete for exciting prizes and recognition.'],
              [MessageCircleQuestion, 'Get feedback from mentors who have shipped.'],
            ].map(([Icon, text], index) => {
              const FeatureIcon = Icon as typeof Rocket;
              return <div className="why-item" key={index}><FeatureIcon size={20} /><span>{text as string}</span></div>;
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Themes() {
  return (
    <section className="section themes grid-bg" id="themes">
      <div className="container">
        <Reveal><SectionHeading eyebrow="02 / choose your arena" title="Five directions. Infinite ways in." copy="Pick the problem space where your curiosity has teeth. Your prototype can be ambitious, useful and unfinished — that is what the 36 hours are for." /></Reveal>
        <div className="theme-grid">
          {themes.map(({ name, description, icon: Icon }, index) => (
            <Reveal key={name}>
              <article className="theme-card" data-testid={`card-theme-${index + 1}`}>
                <span className="theme-index">0{index + 1} / THEME</span>
                <div className="theme-art" aria-hidden="true" />
                <div className="theme-icon"><Icon size={28} /></div>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="theme-note"><span>Theme selection happens during registration. Open Innovation is for ideas that refuse to sit still.</span><span className="mono">[ NO WRONG STARTING POINT ]</span></div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ['01', 'Register your team', 'Round 1 is free. Submit your team details and a sharp first take on the problem.'],
    ['02', 'Get selected', 'Confirmation happens on 8–9 September. Selected teams unlock Round 2.'],
    ['03', 'Show up and build', 'Pay ₹1,500 per selected team, then bring your best work to campus.'],
    ['04', 'Demo with conviction', 'Present your working prototype to the jury on 26 September.'],
  ];
  return (
    <section className="section process" id="experience">
      <div className="container">
        <Reveal><SectionHeading light eyebrow="03 / the format" title="A clear path from idea to demo." copy="The rules are straightforward so your energy can go into the work. One campus. One team. One very full day and a half." /></Reveal>
        <div className="process-grid">
          <div className="process-list">
            {steps.map(([number, title, copy]) => (
              <Reveal key={number}>
                <div className="process-step"><span className="process-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div><Check size={18} /></div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div>
              <div className="experience-card"><span className="eyebrow">36-hour experience</span><h3 className="display">Build with the room behind you.</h3><p>Mentors, checkpoints, late-night debugging and a final room full of people waiting to see what you made.</p><div className="experience-clock">25 SEP 09:00 → 26 SEP 21:00</div></div>
              <div className="fee-grid"><div className="fee"><b>₹0</b><span>Round 1<br />Register it free</span></div><div className="fee"><b>₹1,500</b><span>Round 2<br />Per selected team</span></div></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const items = [
    ['08–09 SEP', 'Confirmation', 'Selected teams receive the next-step details and payment instructions.'],
    ['25 SEP / 09:00', 'Hackathon begins', 'Campus check-in, opening briefing, mentor connects and the first commit.'],
    ['36 HOURS', 'Build window', 'Keep iterating, testing and asking better questions.'],
    ['26 SEP', 'Final presentation', 'Show the jury what changed because your team built it.'],
  ];
  return (
    <section className="section timeline" id="timeline">
      <div className="container">
        <Reveal><SectionHeading eyebrow="04 / mark the dates" title="The moments that matter." copy="Plan your semester around the build. We will take care of the pace once you are here." /></Reveal>
        <Reveal className="timeline-wrap">
          <div className="timeline-line"><div className="timeline-progress" /></div>
          <div className="timeline-items">
            {items.map(([date, title, copy], index) => <div className={`timeline-item ${index < 2 ? 'active' : ''}`} key={title}><div className="timeline-dot">{index < 2 ? <Check size={14} /> : `0${index + 1}`}</div><div><span className="timeline-date">{date}</span><h3>{title}</h3><p>{copy}</p></div></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let current = 0;
    const increment = Math.max(1, Math.ceil(value / 32));
    const interval = window.setInterval(() => {
      current = Math.min(value, current + increment);
      setNumber(current);
      if (current === value) window.clearInterval(interval);
    }, 28);
    return () => window.clearInterval(interval);
  }, [value]);
  return <>{number.toLocaleString('en-IN')}</>;
}

function Prizes() {
  return (
    <section className="section prizes" id="prizes">
      <div className="container">
        <div className="prize-layout">
          <Reveal><SectionHeading eyebrow="05 / make it count" title="Good work deserves a stage." copy="The prize is not the only reason to build. It is a useful reason to take the idea seriously." /><div className="prize-total"><span>Total prize pool</span><strong>₹<AnimatedNumber value={45000} /></strong><small>Across three winning teams</small></div></Reveal>
          <Reveal>
            <div className="prize-podium">
              <div className="prize"><span className="prize-rank">02 / runner up</span><h3>Second prize</h3><strong>₹<AnimatedNumber value={15000} /></strong></div>
              <div className="prize first"><span className="prize-rank">01 / winner</span><h3>First prize</h3><strong>₹<AnimatedNumber value={20000} /></strong></div>
              <div className="prize"><span className="prize-rank">03 / finalist</span><h3>Third prize</h3><strong>₹<AnimatedNumber value={10000} /></strong></div>
            </div>
          </Reveal>
        </div>
        <Reveal className="criteria">
          <h3 className="display">What the jury looks for.</h3>
          <div className="criteria-list">
            {[[30, 'Innovation'], [30, 'Impact'], [25, 'Technical execution'], [15, 'Presentation']].map(([number, label]) => <div className="criterion" key={label as string}><b>{number}%</b><span>{label}</span></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Rules() {
  const rules = [
    ['01', 'Who can participate', 'Open to students from institutions across India. Every team member must carry valid student identification.'],
    ['02', 'Team composition', 'Teams must have up to 4 members. One person can be the leader; each member should contribute meaningfully.'],
    ['03', 'Build on site', 'HACKEX’26 is an offline, on-campus event. Teams are expected to be present for the full 36-hour experience.'],
    ['04', 'Original work', 'Build something new during the event. Existing libraries and APIs are welcome; copied projects are not.'],
    ['05', 'Respect the room', 'Keep the space safe, inclusive and constructive. The organisers’ decision on eligibility is final.'],
    ['06', 'Round 2 payment', 'Only selected teams pay ₹1,500 after confirmation. Round 1 registration is completely free.'],
  ];
  return (
    <section className="section rules" id="rules">
      <div className="container">
        <Reveal><SectionHeading eyebrow="06 / read before you build" title="The fine print, without the fog." copy="Clear expectations make better teams. Read these once, then get back to the idea." /></Reveal>
        <div className="rules-grid">{rules.map(([number, title, copy]) => <Reveal key={number}><div className="rule"><span className="rule-num">{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div></Reveal>)}</div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ['Is Round 1 really free?', 'Yes. Register your team and submit the initial idea at no cost. Only selected teams move to Round 2, which is ₹1,500 per team.'],
    ['Can students from different colleges team up?', 'Yes. Cross-college teams are welcome as long as every member is an eligible student and can attend the offline event.'],
    ['What should we bring?', 'Bring your student IDs, laptops, chargers, any hardware your prototype needs and the willingness to iterate in public.'],
    ['Do we need a finished idea to register?', 'No. We ask for the problem, a first solution direction and your technology choices. The idea can sharpen as you build.'],
    ['Where can I ask a question?', 'Email hackex2026@gmail.com or reach out to the Excel CSE team on Instagram. We will point you in the right direction.'],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container faq-layout">
        <Reveal><SectionHeading eyebrow="07 / quick answers" title="Still thinking?" copy="The useful answers are here. The useful next step is in the next section." /><a href="#register" className="button-primary" style={{ marginTop: 30 }} data-testid="button-faq-register">Start your registration <ArrowRight size={14} /></a></Reveal>
        <Reveal><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? 'open' : ''}`} key={question}><button className="faq-trigger" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} data-testid={`button-faq-${index + 1}`}><span>{question}</span>{open === index ? <X size={18} /> : <Plus size={18} />}</button>{open === index && <div className="faq-answer">{answer}</div>}</div>)}</div></Reveal>
      </div>
    </section>
  );
}

function People() {
  return (
    <section className="section people" id="contact">
      <div className="container">
        <Reveal><SectionHeading eyebrow="08 / the people behind it" title="A serious build needs a good room." copy="Reach the organisers before the event, and find the right people once you are on campus." /></Reveal>
        <div className="people-grid">
          <Reveal><div className="people-column"><h3>Faculty coordinators</h3>{[['Dr. K. Geetha', 'Professor / CSE'], ['Mr. E. Deepan Kumar', 'Assistant Professor / CSE']].map(([name, role]) => <div className="person" key={name}><div><strong>{name}</strong><span>{role}</span></div><ShieldCheck size={19} /></div>)}</div></Reveal>
          <Reveal><div className="people-column"><h3>Student coordinators</h3>{[['S. Akashresi', 'Student coordinator'], ['S. Balachandran IV', 'Student coordinator']].map(([name, role]) => <div className="person" key={name}><div><strong>{name}</strong><span>{role}</span></div><Users size={19} /></div>)}</div></Reveal>
        </div>
        <Reveal><div className="contact-band"><div><span>Email the team</span><strong>hackex2026@gmail.com</strong></div><div><span>Follow the build</span><strong>@excel_cse_official</strong></div><a href="#register" className="button-primary" data-testid="button-contact-register">Register now <ArrowRight size={14} /></a></div></Reveal>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', required = false, name, error }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string; required?: boolean; name: string; error?: string }) {
  return <div className="field"><label htmlFor={name}>{label}{required && ' *'}</label><input id={name} name={name} type={type} required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} data-testid={`input-${name}`} />{error && <span className="field-error">{error}</span>}</div>;
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return <div className="review-row"><span>{label}</span><strong>{value || '—'}</strong></div>;
}

async function submitToGoogleSheet(payload: Registration) {
  const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string | undefined;
  if (!endpoint) return { remote: false };
  const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error(`Google Sheet endpoint returned ${response.status}.`);
  return { remote: true };
}

function downloadRegistration(registration: Registration) {
  const text = [
    'HACKEX’26 — REGISTRATION CONFIRMATION', `Registration ID: ${registration.registrationId}`, '',
    `Team: ${registration.teamName}`, `Leader: ${registration.leader}`, `Email: ${registration.email}`, `Phone: ${registration.phone}`,
    `Team size: ${registration.teamSize}`, `Theme: ${registration.theme}`, `College: ${registration.college}`, `Department: ${registration.department}`, `Year: ${registration.year}`, '',
    `Problem: ${registration.problem}`, `Solution: ${registration.solution}`, `Technology: ${registration.technology}`,
  ].join('\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = `${registration.registrationId}-hackex26.txt`; anchor.click(); URL.revokeObjectURL(url);
}

function Registration() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [registration, setRegistration] = useState<Registration | null>(() => {
    if (typeof window === 'undefined') return null;
    const raw = window.localStorage.getItem('hackex26-registration');
    return raw ? JSON.parse(raw) as Registration : null;
  });
  const update = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const size = Number(form.teamSize) || 4;
  const validate = (targetStep: number) => {
    const nextErrors: Record<string, string> = {};
    if (targetStep === 0) {
      if (!form.teamName.trim()) nextErrors.teamName = 'Give your team a name.';
      if (!form.leader.trim()) nextErrors.leader = 'Add the team leader.';
      if (!/^\+?[\d\s-]{10,}$/.test(form.phone.trim())) nextErrors.phone = 'Enter a valid phone number.';
      if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email.';
    }
    if (targetStep === 1) {
      [2, 3, 4].forEach((member) => {
        const key = `member${member}` as keyof FormState;
        if (member <= size && !form[key].trim()) nextErrors[key] = `Add member ${member}.`;
      });
    }
    if (targetStep === 2) {
      if (!form.college.trim()) nextErrors.college = 'Add your college.';
      if (!form.department.trim()) nextErrors.department = 'Add your department.';
      if (!form.year) nextErrors.year = 'Select your year.';
    }
    if (targetStep === 3) {
      if (!form.theme) nextErrors.theme = 'Choose a theme.';
      if (form.problem.trim().length < 20) nextErrors.problem = 'Tell us a little more (20 characters minimum).';
      if (form.solution.trim().length < 20) nextErrors.solution = 'Describe the solution (20 characters minimum).';
      if (!form.technology.trim()) nextErrors.technology = 'List your technology.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };
  const goNext = () => { if (validate(step)) { setStep((current) => Math.min(4, current + 1)); setErrors({}); } };
  const goBack = () => { setStep((current) => Math.max(0, current - 1)); setErrors({}); };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate(3)) { setStep(3); return; }
    setPending(true); setSubmitError('');
    const registrationPayload: Registration = {
      ...form,
      registrationId: `HX26-${Date.now().toString(36).slice(-5).toUpperCase()}-${Math.floor(Math.random() * 90 + 10)}`,
      submittedAt: new Date().toISOString(),
      remoteSubmitted: false,
    };
    try {
      const result = await submitToGoogleSheet(registrationPayload);
      const finalRegistration = { ...registrationPayload, remoteSubmitted: result.remote };
      window.localStorage.setItem('hackex26-registration', JSON.stringify(finalRegistration));
      setRegistration(finalRegistration);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'The Google Sheet endpoint could not be reached. Your registration was not marked as submitted.');
    } finally { setPending(false); }
  };
  const startNew = () => { window.localStorage.removeItem('hackex26-registration'); setRegistration(null); setForm(initialForm); setStep(0); setErrors({}); };
  const endpointAvailable = Boolean(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL);

  return (
    <section className="register" id="register">
      <div className="container">
        <Reveal><div className="register-heading"><div><span className="eyebrow">09 / your turn</span><h2 className="display">Assemble your team.</h2></div><p className="register-intro">Five short steps. One clear idea. Registration is free in Round 1.</p></div></Reveal>
        <Reveal>
          <div className="register-shell">
            <aside className="register-sidebar">
              <span className="eyebrow">HACKEX’26 / FORM</span>
              <h3>Make it real.</h3>
              <div className="step-list">{['Team details', 'Members', 'College', 'Idea', 'Review'].map((label, index) => <div className={`step-item ${index === step && !registration ? 'active' : ''} ${index < step && !registration ? 'done' : ''}`} key={label}><span className="step-circle">{index < step && !registration ? <Check size={13} /> : index + 1}</span><span>{label}</span></div>)}</div>
              <div style={{ marginTop: 66, color: '#9cb1dc', fontSize: 12, lineHeight: 1.6 }}>Team size is capped at 4. Choose the problem you want to spend 36 hours making better.</div>
            </aside>
            {registration ? (
              <div className="success-card">
                <div className="success-content">
                  <div className="success-check"><CircleCheck size={34} /></div>
                  <span className="eyebrow">Registration received</span>
                  <h3 className="display">You’re on the grid.</h3>
                  <p>{registration.remoteSubmitted ? 'Your team details have been sent to the HACKEX’26 organisers.' : 'Your confirmation is saved on this device. The organiser Google Sheet endpoint is not connected yet.'}</p>
                  <div className="success-id" data-testid="status-registration-id">{registration.registrationId}</div>
                  <div className="success-meta"><span>{registration.teamName}</span><span>{registration.theme}</span><span>{registration.teamSize} members</span></div>
                  <div className="success-actions"><button className="button-primary" onClick={() => downloadRegistration(registration)} data-testid="button-download-registration"><Download size={15} /> Save confirmation</button><button className="button-secondary" onClick={startNew} data-testid="button-new-registration">Register another team</button></div>
                </div>
              </div>
            ) : (
              <main className="register-main">
                <div className="form-top"><h3>{['Team details', 'Your crew', 'College details', 'The idea', 'Review & submit'][step]}</h3><span>STEP 0{step + 1} / 05</span></div>
                {submitError && <div className="submit-error" role="alert">{submitError}</div>}
                <form onSubmit={handleSubmit}>
                  {step === 0 && <div className="form-grid">
                    <Field name="teamName" label="Team name" value={form.teamName} onChange={(v) => update('teamName', v)} placeholder="Something worth remembering" required error={errors.teamName} />
                    <div className="field"><label>Team size *</label><div className="size-options">{['2', '3', '4'].map((value) => <button type="button" className={`size-button ${form.teamSize === value ? 'selected' : ''}`} onClick={() => update('teamSize', value)} key={value} data-testid={`button-team-size-${value}`}>{value}</button>)}</div></div>
                    <Field name="leader" label="Team leader" value={form.leader} onChange={(v) => update('leader', v)} placeholder="Full name" required error={errors.leader} />
                    <Field name="phone" label="Phone" type="tel" value={form.phone} onChange={(v) => update('phone', v)} placeholder="+91 98765 43210" required error={errors.phone} />
                    <Field name="email" label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} placeholder="team@college.edu" required error={errors.email} />
                  </div>}
                  {step === 1 && <div className="form-grid">{[2, 3, 4].filter((member) => member <= size).map((member) => <Field key={member} name={`member${member}`} label={`Member ${member} full name`} value={form[`member${member}` as keyof FormState]} onChange={(v) => update(`member${member}` as keyof FormState, v)} placeholder="Full name" required error={errors[`member${member}`]} />)}<p className="submit-note">The team leader is already counted as member 1. Add the other people who will be in the room.</p></div>}
                  {step === 2 && <div className="form-grid">
                    <Field name="college" label="College / institution" value={form.college} onChange={(v) => update('college', v)} placeholder="Full institution name" required error={errors.college} />
                    <Field name="department" label="Department" value={form.department} onChange={(v) => update('department', v)} placeholder="Computer Science & Engineering" required error={errors.department} />
                    <div className="field"><label htmlFor="year">Current year *</label><select id="year" value={form.year} onChange={(e) => update('year', e.target.value)} data-testid="select-year"><option value="">Select year</option><option>First year</option><option>Second year</option><option>Third year</option><option>Final year</option><option>Postgraduate</option></select>{errors.year && <span className="field-error">{errors.year}</span>}</div>
                  </div>}
                  {step === 3 && <div className="form-grid">
                    <div className="field"><label htmlFor="theme">Primary theme *</label><select id="theme" value={form.theme} onChange={(e) => update('theme', e.target.value)} data-testid="select-theme"><option value="">Choose your arena</option>{themes.map((theme) => <option key={theme.name}>{theme.name}</option>)}</select>{errors.theme && <span className="field-error">{errors.theme}</span>}</div>
                    <Field name="technology" label="Technology / stack" value={form.technology} onChange={(v) => update('technology', v)} placeholder="React, Python, IoT..." required error={errors.technology} />
                    <div className="field full"><label htmlFor="problem">What problem are you solving? *</label><textarea id="problem" value={form.problem} onChange={(e) => update('problem', e.target.value)} placeholder="Make the problem specific. Who feels it? What is at stake?" data-testid="textarea-problem" />{errors.problem && <span className="field-error">{errors.problem}</span>}</div>
                    <div className="field full"><label htmlFor="solution">What will you build? *</label><textarea id="solution" value={form.solution} onChange={(e) => update('solution', e.target.value)} placeholder="Give us the first version of the solution in plain language." data-testid="textarea-solution" />{errors.solution && <span className="field-error">{errors.solution}</span>}</div>
                    <Field name="portfolio" label="GitHub / portfolio (optional)" value={form.portfolio} onChange={(v) => update('portfolio', v)} placeholder="https://github.com/..." />
                  </div>}
                  {step === 4 && <div><div className="review"><ReviewRow label="Team" value={`${form.teamName} / ${form.teamSize} members`} /><ReviewRow label="Leader" value={`${form.leader} / ${form.email}`} /><ReviewRow label="Members" value={[form.member2, form.member3, form.member4].filter(Boolean).join(', ')} /><ReviewRow label="College" value={`${form.college} / ${form.department} / ${form.year}`} /><ReviewRow label="Theme" value={form.theme} /><ReviewRow label="Idea" value={form.solution} /><ReviewRow label="Stack" value={form.technology} /></div><p className="submit-note">By submitting, you confirm your team is eligible, your information is accurate and you agree to the event rules. {endpointAvailable ? 'This form will securely send a copy to the organiser Google Sheet.' : 'This build currently saves confirmation locally; add VITE_GOOGLE_APPS_SCRIPT_URL to connect the organiser Google Sheet.'}</p></div>}
                  <div className="form-actions">{step > 0 ? <button type="button" className="button-muted" onClick={goBack} data-testid="button-form-back">← Back</button> : <span />}{step < 4 ? <button type="button" className="button-primary" onClick={goNext} data-testid="button-form-next">Continue <ArrowRight size={15} /></button> : <button type="submit" className="button-primary" disabled={pending} data-testid="button-submit-registration">{pending ? 'Sending…' : 'Submit registration'} <Send size={14} /></button>}</div>
                </form>
              </main>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div><div className="footer-brand display">HACKEX’26</div><p>A national-level hackathon by Excel Engineering College, Techno Debuggers Club and the Department of Computer Science & Engineering.</p></div>
          <div><h3>Navigate</h3>{[['About', '#about'], ['Themes', '#themes'], ['Timeline', '#timeline'], ['Prizes', '#prizes']].map(([label, href]) => <a href={href} key={href} data-testid={`link-footer-${label.toLowerCase()}`}>{label}</a>)}</div>
          <div><h3>Say hello</h3><a href="mailto:hackex2026@gmail.com" data-testid="link-footer-email"><Mail size={13} style={{ verticalAlign: 'middle', marginRight: 7 }} />hackex2026@gmail.com</a><a href="#contact" data-testid="link-footer-coordinators">Coordinators</a><a href="#register" data-testid="link-footer-register"><ArrowRight size={13} style={{ verticalAlign: 'middle', marginRight: 7 }} />Register your team</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 HACKEX / Excel Engineering College</span><span>Built for builders, with a deadline.</span></div>
      </div>
    </footer>
  );
}

function Home() {
  return <div className="site-shell"><div className="grain" aria-hidden="true" /><Header /><main><Hero /><About /><Themes /><Process /><Timeline /><Prizes /><Rules /><FAQ /><People /><Registration /></main><Footer /></div>;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  useEffect(() => {
    document.title = 'HACKEX’26 — A National Level Hackathon';
    const description = document.querySelector('meta[name="description"]') ?? document.createElement('meta');
    description.setAttribute('name', 'description');
    description.setAttribute('content', 'HACKEX’26 is a 36-hour national-level hackathon at Excel Engineering College on 25–26 September 2026.');
    document.head.appendChild(description);
  }, []);
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;