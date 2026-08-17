import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Rules() {
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
