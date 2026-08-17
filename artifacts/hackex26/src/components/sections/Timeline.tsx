import { Check } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Timeline() {
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
            {items.map(([date, title, copy], index) => <Reveal key={title} className="timeline-reveal"><div className={`timeline-item ${index < 2 ? 'active' : ''}`}><div className="timeline-dot">{index < 2 ? <Check size={14} /> : `0${index + 1}`}</div><div className="timeline-content"><span className="timeline-date">{date}</span><h3>{title}</h3><p>{copy}</p></div></div></Reveal>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
