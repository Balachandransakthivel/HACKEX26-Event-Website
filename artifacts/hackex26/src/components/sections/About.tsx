import { MessageCircleQuestion, Rocket, Trophy, Users } from 'lucide-react';
import officialPoster from '@assets/WhatsApp_Image_2026-08-17_at_12.39.44_PM_1786957997551.jpeg';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal>
            <SectionHeading eyebrow="01 / the premise" title="Make the next 36 hours count." copy="HACKEX’26 is a national-level offline hackathon for student builders who want to take a practical idea from first sketch to working prototype. Bring the problem you cannot stop thinking about. Bring the people who will help you solve it." />
            <p className="about-lead">Not a notice. <strong>A launchpad.</strong></p>
            <p className="body-copy">Hosted by Excel Engineering College with the Techno Debuggers Club and Department of Computer Science & Engineering, HACKEX is where useful ideas get the pressure, feedback and momentum to become real.</p>
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
