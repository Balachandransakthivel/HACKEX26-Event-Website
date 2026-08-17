import { useEffect, useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

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

export function Prizes() {
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
            {[[30, 'Innovation'], [30, 'Impact'], [25, 'Technical execution'], [15, 'Presentation design']].map(([number, label], index) => <div className="criterion" key={label as string}><div className="criterion-head"><span>{label}</span><b>{number}%</b></div><div className="criterion-bar"><i style={{ ['--bar-width' as string]: `${number}%`, width: 0, animationDelay: `${index * 0.12}s` }} /></div></div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
