import { themes } from '@/constants';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Themes() {
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
        <div className="theme-note">
          <span>
            <strong>Special Feature:</strong> Themes will be selected during Round 2, and the exact <strong>Problem Statement will be revealed ON THE SPOT!</strong>
          </span>
          <span className="mono">[ ON THE SPOT REVEAL ]</span>
        </div>
      </div>
    </section>
  );
}
