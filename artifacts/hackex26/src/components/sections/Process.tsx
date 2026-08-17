import { Check } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Process() {
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
