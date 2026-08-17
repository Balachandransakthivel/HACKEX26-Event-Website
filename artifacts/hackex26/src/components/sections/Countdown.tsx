import { useEffect, useMemo, useState } from 'react';

export function Countdown() {
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

  const values = [
    ['days', time.days],
    ['hrs', time.hours],
    ['min', time.minutes],
    ['sec', time.seconds],
  ];

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
