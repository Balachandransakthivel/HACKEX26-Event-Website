import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Rules() {
  const rules = [
    ['01', 'Round 1 - Online PPT Selection', 'Choose your problem statement and submit your innovative project idea & PPT through the registration form. Round 1 is 100% FREE.'],
    ['02', 'Selection & Confirmation', 'Shortlisted teams based on PPT evaluation will receive confirmation on 8–9 September 2026.'],
    ['03', 'Round 2 Payment', 'Selected PPT teams pay ₹1,500 per team ONLY AFTER selection in Round 1.'],
    ['04', 'Round 2 On-Campus Build', 'Selected teams move to Round 2 to build their project prototype on campus at Excel Engineering College.'],
    ['05', 'Offline Event Dates', 'Round 2 is an offline hackathon at Excel Engineering College campus on 25 & 26 September 2026.'],
    ['06', 'Original Work & Identity', 'Open to college students with valid IDs. All builds must be original work created during the event.'],
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
