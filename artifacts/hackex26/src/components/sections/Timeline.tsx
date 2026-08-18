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
      dateTime: 'Sep 25, 09:00 AM - 10:00 AM',
      timeElapsed: 'Hour 00 - 01',
      phase: 'Kickoff',
      title: 'Opening Ceremony',
      description: 'Rules, tracks, and sponsor prompts revealed. On-the-spot problem statement announcement.',
      day: 'Day 1 (Sep 25)',
      icon: Sparkles,
    },
    {
      id: 2,
      dateTime: 'Sep 25, 10:00 AM - 11:00 AM',
      timeElapsed: 'Hour 01 - 02',
      phase: 'Ideation',
      title: 'Team Formation',
      description: 'Pitching ideas and networking to lock teams and align on target problem statement.',
      day: 'Day 1 (Sep 25)',
      icon: Users,
    },
    {
      id: 3,
      dateTime: 'Sep 25, 11:00 AM - 01:00 PM',
      timeElapsed: 'Hour 02 - 04',
      phase: 'Planning',
      title: 'Scope Definition',
      description: 'Finalising tech stack, roles, and MVP features.',
      day: 'Day 1 (Sep 25)',
      icon: Layers,
    },
    {
      id: 4,
      dateTime: 'Sep 25, 01:00 PM - 05:00 PM',
      timeElapsed: 'Hour 04 - 08',
      phase: 'Execution',
      title: 'Hacking Begins',
      description: 'Setting up repositories, initial backend, and UI wireframes.',
      day: 'Day 1 (Sep 25)',
      icon: Code,
    },
    {
      id: 5,
      dateTime: 'Sep 25, 05:00 PM - 09:00 PM',
      timeElapsed: 'Hour 08 - 12',
      phase: 'Execution',
      title: 'Core Features',
      description: 'Connecting databases and primary API endpoints.',
      day: 'Day 1 (Sep 25)',
      icon: Code,
    },
    {
      id: 6,
      dateTime: 'Sep 25, 09:00 PM - Sep 26, 01:00 AM',
      timeElapsed: 'Hour 12 - 16',
      phase: 'Overnight',
      title: 'Midnight Push',
      description: 'Heavy coding, debugging, and mentor check-ins.',
      day: 'Day 1 (Sep 25)',
      icon: Flame,
    },
    {
      id: 7,
      dateTime: 'Sep 26, 01:00 AM - 05:00 AM',
      timeElapsed: 'Hour 16 - 20',
      phase: 'Overnight',
      title: 'Graveyard Shift',
      description: 'Powering through logic, short rest/nap rotations.',
      day: 'Day 2 (Sep 26)',
      icon: Flame,
    },
    {
      id: 8,
      dateTime: 'Sep 26, 05:00 AM - 09:00 AM',
      timeElapsed: 'Hour 20 - 24',
      phase: 'Execution',
      title: 'Day 2 Alignment',
      description: 'Reviewing progress against deadlines; quick pivots.',
      day: 'Day 2 (Sep 26)',
      icon: Clock,
    },
    {
      id: 9,
      dateTime: 'Sep 26, 09:00 AM - 01:00 PM',
      timeElapsed: 'Hour 24 - 28',
      phase: 'Execution',
      title: 'Integration',
      description: 'Linking front-end design to the functional backend.',
      day: 'Day 2 (Sep 26)',
      icon: Code,
    },
    {
      id: 10,
      dateTime: 'Sep 26, 01:00 PM - 05:00 PM',
      timeElapsed: 'Hour 28 - 32',
      phase: 'Polishing',
      title: 'Code Freeze',
      description: 'Bug fixes, visual polish, and stopping new features.',
      day: 'Day 2 (Sep 26)',
      icon: CheckCircle2,
    },
    {
      id: 11,
      dateTime: 'Sep 26, 05:00 PM - 07:00 PM',
      timeElapsed: 'Hour 32 - 34',
      phase: 'Submission',
      title: 'Platform Upload',
      description: 'Recording video demos and submitting to Devpost/GitHub.',
      day: 'Day 2 (Sep 26)',
      icon: Rocket,
    },
    {
      id: 12,
      dateTime: 'Sep 26, 07:00 PM - 08:00 PM',
      timeElapsed: 'Hour 34 - 35',
      phase: 'Judging',
      title: 'Hacking Ends',
      description: 'Live presentations, pitches, and judge Q&A panels.',
      day: 'Day 2 (Sep 26)',
      icon: Users,
    },
    {
      id: 13,
      dateTime: 'Sep 26, 08:00 PM - 09:00 PM',
      timeElapsed: 'Hour 35 - 36',
      phase: 'Closing',
      title: 'Awards Ceremony',
      description: 'Winner announcements, sponsor prizes, and wrap-up.',
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


