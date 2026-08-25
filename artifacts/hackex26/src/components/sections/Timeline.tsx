import { Clock, Calendar, CheckCircle2, Flame, Award, Code, Users, Rocket, Sparkles, Layers, Wifi, Utensils, ShieldCheck, MapPin, Laptop } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

type ScheduleItem = {
  id: number;
  dateTime: string;
  timeElapsed: string;
  phase: string;
  title: string;
  description: string;
  day: 'Day 1 (Sep 25)' | 'Day 2 (Sep 26)';
  icon: typeof Rocket;
};

export function Timeline() {
  const schedule: ScheduleItem[] = [
    {
      id: 1,
      dateTime: 'Sep 25, 09:00 AM - 10:30 AM',
      timeElapsed: 'Hour 00 - 01.5',
      phase: 'Kickoff',
      title: 'Opening Ceremony',
      description: 'Official inauguration, track guidelines, and problem statement announcements.',
      day: 'Day 1 (Sep 25)',
      icon: Sparkles,
    },
    {
      id: 2,
      dateTime: 'Sep 25, 10:30 AM - 02:00 PM',
      timeElapsed: 'Hour 01.5 - 05',
      phase: 'Execution',
      title: 'Hacking Begins',
      description: 'Repository setup, architecture layout, and core coding kickoff.',
      day: 'Day 1 (Sep 25)',
      icon: Code,
    },
    {
      id: 3,
      dateTime: 'Sep 25, 02:00 PM - 05:00 PM',
      timeElapsed: 'Hour 05 - 08',
      phase: 'Evaluation',
      title: 'First Evaluation',
      description: 'Initial mentor review of problem scope, design architecture, and tech stack.',
      day: 'Day 1 (Sep 25)',
      icon: Award,
    },
    {
      id: 4,
      dateTime: 'Sep 25, 05:00 PM - 09:00 PM',
      timeElapsed: 'Hour 08 - 12',
      phase: 'Execution',
      title: 'Core Features',
      description: 'Developing core functionality, database schema, and primary API endpoints.',
      day: 'Day 1 (Sep 25)',
      icon: Layers,
    },
    {
      id: 5,
      dateTime: 'Sep 25, 09:00 PM - 11:30 PM',
      timeElapsed: 'Hour 12 - 14.5',
      phase: 'Evaluation',
      title: 'Second Evaluation',
      description: 'Mid-hack judge checkpoint evaluating functional progress & working components.',
      day: 'Day 1 (Sep 25)',
      icon: CheckCircle2,
    },
    {
      id: 6,
      dateTime: 'Sep 25, 11:30 PM - 03:00 AM',
      timeElapsed: 'Hour 14.5 - 18',
      phase: 'Overnight',
      title: 'Midnight Push',
      description: 'Heavy overnight coding session, debugging complex logic, and mentor check-ins.',
      day: 'Day 1 (Sep 25)',
      icon: Flame,
    },
    {
      id: 7,
      dateTime: 'Sep 26, 03:00 AM - 07:00 AM',
      timeElapsed: 'Hour 18 - 22',
      phase: 'Overnight',
      title: 'Nocturnal Code Surge (Late Night Sprint)',
      description: 'Powering through algorithms with hot beverages and continuous dev energy.',
      day: 'Day 2 (Sep 26)',
      icon: Flame,
    },
    {
      id: 8,
      dateTime: 'Sep 26, 07:00 AM - 10:00 AM',
      timeElapsed: 'Hour 22 - 25',
      phase: 'Execution',
      title: 'Day 2 Alignment',
      description: 'Morning standup, rapid progress sync against deadlines, and quick pivots.',
      day: 'Day 2 (Sep 26)',
      icon: Clock,
    },
    {
      id: 9,
      dateTime: 'Sep 26, 10:00 AM - 01:30 PM',
      timeElapsed: 'Hour 25 - 28.5',
      phase: 'Execution',
      title: 'Integration',
      description: 'Connecting frontend interfaces with backend services and database pipelines.',
      day: 'Day 2 (Sep 26)',
      icon: Code,
    },
    {
      id: 10,
      dateTime: 'Sep 26, 01:30 PM - 04:30 PM',
      timeElapsed: 'Hour 28.5 - 31.5',
      phase: 'Polishing',
      title: 'Code Freeze',
      description: 'Bug squashing, visual polish, repository freeze, and stopping new feature additions.',
      day: 'Day 2 (Sep 26)',
      icon: CheckCircle2,
    },
    {
      id: 11,
      dateTime: 'Sep 26, 04:30 PM - 06:00 PM',
      timeElapsed: 'Hour 31.5 - 33',
      phase: 'Submission',
      title: 'Platform Upload',
      description: 'Uploading source code, project documentation, slides, and demo video link.',
      day: 'Day 2 (Sep 26)',
      icon: Rocket,
    },
    {
      id: 12,
      dateTime: 'Sep 26, 06:00 PM - 08:00 PM',
      timeElapsed: 'Hour 33 - 35',
      phase: 'Judging',
      title: 'Closing Hackathon Ends (3rd Evaluation)',
      description: '3rd evaluation pitches, live project demonstrations, and final judge assessments.',
      day: 'Day 2 (Sep 26)',
      icon: Users,
    },
    {
      id: 13,
      dateTime: 'Sep 26, 08:00 PM - 09:00 PM',
      timeElapsed: 'Hour 35 - 36',
      phase: 'Closing',
      title: 'Judging Award Ceremony, Prize Distribution Ceremony',
      description: 'Grand prize distribution, winner announcements, sponsor recognition, and event wrap-up.',
      day: 'Day 2 (Sep 26)',
      icon: Award,
    },
  ];

  return (
    <section className="section timeline" id="timeline">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="04 / 36-HOUR HACKATHON SCHEDULE"
            title="36-Hour Hackathon Schedule (25 Sep - 26 Sep)"
            copy="Every hour mapped out from kickoff to awards. Complete continuous timeline showing all 13 milestones."
          />
        </Reveal>

        {/* Schedule Subheader Indicator */}
        <Reveal>
          <div className="schedule-header-status">
            <span className="schedule-status-tag">
              <Clock size={14} className="animate-spin-slow" /> CONTINUOUS 36-HOUR TIMELINE • ALL PHASES INCLUDED
            </span>
            <span className="schedule-location-tag">
              <MapPin size={14} /> EXCEL ENGINEERING COLLEGE CAMPUS
            </span>
          </div>
        </Reveal>

        {/* Schedule Grid / Table Timeline */}
        <Reveal className="timeline-wrap">
          <div className="timeline-line">
            <div className="timeline-progress" />
          </div>

          <div className="schedule-cards-container">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.id} className="timeline-reveal">
                  <div className={`schedule-card ${index % 2 === 0 ? 'even' : 'odd'}`}>
                    <div className="schedule-card-left">
                      <div className="schedule-dot">
                        <Icon size={16} />
                      </div>
                      <div className="schedule-time-meta">
                        <span className="schedule-datetime">
                          <Calendar size={13} /> {item.dateTime}
                        </span>
                        <span className="schedule-elapsed">
                          <Clock size={12} /> {item.timeElapsed}
                        </span>
                      </div>
                    </div>

                    <div className="schedule-card-body">
                      <div className="schedule-card-header">
                        <span className={`phase-badge phase-${item.phase.toLowerCase()}`}>
                          {item.phase}
                        </span>
                        <span className="schedule-day-badge">{item.day}</span>
                      </div>
                      <h3 className="schedule-title">{item.title}</h3>
                      <p className="schedule-description">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        {/* On-Campus Amenities & Checklist Addition */}
        <Reveal>
          <div className="essentials-grid-card">
            <h3><ShieldCheck size={20} /> Round 2 On-Campus Facilities & Checklist</h3>
            <div className="essentials-items">
              <div className="essential-item">
                <Wifi size={20} />
                <div>
                  <strong>High-Speed Wi-Fi</strong>
                  <span>Dedicated high-bandwidth network for all registered teams.</span>
                </div>
              </div>
              <div className="essential-item">
                <Utensils size={20} />
                <div>
                  <strong>Food & Beverages</strong>
                  <span>Meals, snacks, tea, and midnight refreshments provided.</span>
                </div>
              </div>
              <div className="essential-item">
                <Laptop size={20} />
                <div>
                  <strong>What to Bring</strong>
                  <span>Laptops, extension cords, student ID cards & enthusiasm.</span>
                </div>
              </div>
              <div className="essential-item">
                <Users size={20} />
                <div>
                  <strong>Mentor Desks</strong>
                  <span>Domain experts & tech leads available throughout the 36 hours.</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Info Footer Note */}
        <Reveal>
          <div className="schedule-footer-note">
            <span>
              <strong>Note:</strong> All Round 2 participants are expected to be present at Excel Engineering College for the entire duration of the 36-hour schedule.
            </span>
            <span className="mono">[ ROUND 2 OFFLINE SCHEDULE ]</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


