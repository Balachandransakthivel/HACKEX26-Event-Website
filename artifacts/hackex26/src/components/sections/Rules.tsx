import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Rules() {
  const rules = [
    ['01', 'Round 1 Submission', 'Round 1 registration is 100% FREE. Submit your project idea and upload your project PPT online before the deadline.'],
    ['02', 'Selection Confirmation', 'Shortlisted teams will receive confirmation on 8–9 September 2026 with next-step instructions.'],
    ['03', 'Round 2 Payment', 'Selected teams pay ₹1,500 per team ONLY AFTER selection in Round 1.'],
    ['04', 'On-The-Spot Problem Statement', 'Themes are selected during Round 2, and exact problem statements are revealed ON THE SPOT at kickoff!'],
    ['05', 'Offline Venue', 'Round 2 is a 36-hour offline event at Excel Engineering College campus on 25 & 26 September.'],
    ['06', 'Original Work & Identity', 'Open to college students with valid IDs. All builds must be original work created during the 36-hour window.'],
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
