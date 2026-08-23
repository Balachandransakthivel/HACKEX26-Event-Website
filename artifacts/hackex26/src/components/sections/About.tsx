import { MessageCircleQuestion, Rocket, Trophy, Users } from 'lucide-react';
import officialPoster from '@assets/hackex26_new_official_poster.jpg';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <SectionHeading eyebrow="01 / the premise" title="Choose your problem statement & build on campus." copy="HACKEX’26 is a national-level hackathon. In Round 1 (Online PPT Selection), teams choose a problem statement, submit their innovative project idea, and upload their project PPT. Selected PPT teams move to Round 2 on campus at Excel Engineering College to build their working prototype!" />
            <p className="about-lead">Select your track. <strong>Build the future.</strong></p>
            <p className="body-copy">Jointly organized by Techno Debuggers Club and the Department of Computer Science and Engineering, Excel Engineering College (Autonomous), in association with Cube AI Solutions.</p>
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
