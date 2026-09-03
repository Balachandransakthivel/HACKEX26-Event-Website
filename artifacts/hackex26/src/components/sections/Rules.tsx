import { FileText, ExternalLink } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GUIDELINES_PDF_URL } from '@/constants';

export function Rules() {
  const rules = [
    ['01', 'Round 1 - Online PPT Selection', 'Choose your problem statement and submit your innovative project idea & PPT through the registration form before 13 September 2026. Round 1 is 100% FREE.'],
    ['02', 'Selection & Confirmation', 'Shortlisted teams based on PPT evaluation will receive confirmation on 13–14 September 2026.'],
    ['03', 'Round 2 Payment', 'Selected PPT teams pay ₹1,500 per team ONLY AFTER selection in Round 1.'],
    ['04', 'Round 2 On-Campus Build', 'Selected teams move to Round 2 to build their project prototype on campus at Excel Engineering College.'],
    ['05', 'Offline Event Dates', 'Round 2 is an offline hackathon at Excel Engineering College campus on 25 & 26 September 2026.'],
    ['06', 'Original Work & Identity', 'Open to college students with valid IDs. All builds must be original work created during the event.'],
  ];
  return (
    <section className="section rules" id="rules">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="06 / read before you build" title="The fine print, without the fog." copy="Clear expectations make better teams. Read these once, then get back to the idea." />
        </Reveal>

        <Reveal>
          <div className="guidelines-pdf-banner" data-testid="guidelines-pdf-banner">
            <div className="guidelines-pdf-content">
              <div className="guidelines-icon-box">
                <FileText size={24} style={{ color: '#00e5ff' }} />
              </div>
              <div>
                <h4>Official HACKEX ’26 Guidelines (PDF)</h4>
                <p>
                  Download or open the complete 10-page official guidelines document containing detailed event rules, theme descriptions, Round 1 PPT requirements, Round 2 offline schedule, and coordinator contacts.
                </p>
              </div>
            </div>
            <div className="guidelines-pdf-actions">
              <a
                href={GUIDELINES_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
                data-testid="button-open-guidelines-pdf"
              >
                <FileText size={16} />
                <span>Open Guidelines PDF</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="rules-grid">{rules.map(([number, title, copy]) => <Reveal key={number}><div className="rule"><span className="rule-num">{number}</span><div><h3>{title}</h3><p>{copy}</p></div></div></Reveal>)}</div>
      </div>
    </section>
  );
}
