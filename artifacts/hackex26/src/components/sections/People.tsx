import { ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function People() {
  return (
    <section className="section people" id="contact">
      <div className="container">
        <Reveal><SectionHeading eyebrow="08 / the people behind it" title="A serious build needs a good room." copy="Reach the organisers before the event, and find the right people once you are on campus." /></Reveal>
        <div className="people-grid">
          <Reveal><div className="people-column"><h3>Faculty coordinators</h3>{[['Dr. K. Geetha M.E., Ph.D', 'Professor / 97152 50646'], ['Mr. E. Deepan Kumar M.E', 'Assistant Professor / 99523 02646']].map(([name, role]) => <div className="person" key={name}><div><strong>{name}</strong><span>{role}</span></div><ShieldCheck size={19} /></div>)}</div></Reveal>
          <Reveal><div className="people-column"><h3>Student coordinators</h3>{[['S. Akashresi', 'IV-Year / 87785 28831'], ['S. Balachandran', 'IV-Year / 93427 27360']].map(([name, role]) => <div className="person" key={name}><div><strong>{name}</strong><span>{role}</span></div><Users size={19} /></div>)}</div></Reveal>
        </div>
        <Reveal><div className="contact-band"><div><span>Email the team</span><strong>hackex2026@gmail.com</strong></div><div><span>Follow the build</span><strong>@excel_cse_official</strong></div><a href="#register" className="button-primary" data-testid="button-contact-register">Register now <ArrowRight size={14} /></a></div></Reveal>
      </div>
    </section>
  );
}
