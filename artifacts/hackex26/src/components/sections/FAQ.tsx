import { useState } from 'react';
import { ArrowRight, Plus, X } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function FAQ() {
  const faqs = [
    ['Is Round 1 really free?', 'Yes. Register your team and submit the initial idea at no cost. Only selected teams move to Round 2, which is ₹1,500 per team.'],
    ['Can students from different colleges team up?', 'Yes. Cross-college teams are welcome as long as every member is an eligible student and can attend the offline event.'],
    ['What should we bring?', 'Bring your student IDs, laptops, chargers, any hardware your prototype needs and the willingness to iterate in public.'],
    ['Do we need a finished idea to register?', 'No. We ask for the problem, a first solution direction and your technology choices. The idea can sharpen as you build.'],
    ['Where can I ask a question?', 'Email hackex2026@gmail.com or reach out to the Excel CSE team on Instagram. We will point you in the right direction.'],
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="container faq-layout">
        <Reveal><SectionHeading eyebrow="07 / quick answers" title="Still thinking?" copy="The useful answers are here. The useful next step is in the next section." /><a href="#register" className="button-primary" style={{ marginTop: 30 }} data-testid="button-faq-register">Start your registration <ArrowRight size={14} /></a></Reveal>
        <Reveal><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${open === index ? 'open' : ''}`} key={question}><button className="faq-trigger" onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} data-testid={`button-faq-${index + 1}`}><span>{question}</span>{open === index ? <X size={18} /> : <Plus size={18} />}</button>{open === index && <div className="faq-answer">{answer}</div>}</div>)}</div></Reveal>
      </div>
    </section>
  );
}
