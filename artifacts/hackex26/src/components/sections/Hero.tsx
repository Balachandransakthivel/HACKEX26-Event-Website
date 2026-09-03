import { useEffect, useRef } from 'react';
import { ArrowDownRight, ArrowRight, BrainCircuit, Cloud, Code2, Database, ExternalLink, FileText, Lightbulb } from 'lucide-react';
import { GOOGLE_FORM_URL, GUIDELINES_PDF_URL } from '@/constants';
import { Countdown } from './Countdown';

export function Hero() {
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const art = artRef.current;
    if (!art) return;
    const handlePointerMove = (event: PointerEvent) => {
      const bounds = art.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      art.style.setProperty('--parallax-x', `${x * 18}px`);
      art.style.setProperty('--parallax-y', `${y * 14}px`);
      art.style.setProperty('--tilt-x', `${y * -3}deg`);
      art.style.setProperty('--tilt-y', `${x * 4}deg`);
    };
    const resetPointer = () => {
      art.style.setProperty('--parallax-x', '0px');
      art.style.setProperty('--parallax-y', '0px');
      art.style.setProperty('--tilt-x', '0deg');
      art.style.setProperty('--tilt-y', '0deg');
    };
    art.addEventListener('pointermove', handlePointerMove);
    art.addEventListener('pointerleave', resetPointer);
    return () => {
      art.removeEventListener('pointermove', handlePointerMove);
      art.removeEventListener('pointerleave', resetPointer);
    };
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-circuit" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="hero-kicker"><span /> Excel Engineering College / Techno Debuggers Club</div>
            <h1 className="display">HACKEX<em>’26</em></h1>
            <p className="hero-subtitle">A NATIONAL LEVEL HACKATHON <strong>///</strong></p>
            <p className="mono" style={{ color: '#5d6c8b', fontSize: 12, marginTop: 12, letterSpacing: '.04em' }}>CODE. COLLABORATE. CREATE IMPACT.</p>
            <div className="hero-actions">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="button-primary" data-testid="button-hero-register">Register now <ExternalLink size={15} /></a>
              <a href={GUIDELINES_PDF_URL} target="_blank" rel="noopener noreferrer" className="button-secondary" data-testid="button-hero-guidelines"><FileText size={15} /> Guidelines PDF</a>
              <a href="#about" className="button-secondary" data-testid="button-hero-explore">Explore HACKEX’26 <ArrowRight size={15} /></a>
            </div>
            <div className="hero-facts">
              <div className="fact"><b>Round 1</b><span>Online PPT<br />Selection (Free)</span></div>
              <div className="fact"><b>13 Sep</b><span>PPT Submit<br />Deadline</span></div>
              <div className="fact"><b>13–14 Sep</b><span>Confirmation<br />Date</span></div>
              <div className="fact"><b>25–26 Sep</b><span>36-Hour Offline<br />Hackathon</span></div>
            </div>
          </div>
          <div ref={artRef} className="hero-art" aria-label="Illustration of a coding laptop">
            <div className="orbit" aria-hidden="true"><span className="orbit-dot" /></div>
            <div className="float-node node-code" aria-hidden="true"><span><Code2 size={20} /></span></div>
            <div className="float-node node-ai" aria-hidden="true"><span><BrainCircuit size={20} /></span></div>
            <div className="float-node node-cloud" aria-hidden="true"><span><Cloud size={20} /></span></div>
            <div className="float-node node-data" aria-hidden="true"><span><Database size={20} /></span></div>
            <div className="float-node node-idea" aria-hidden="true"><span><Lightbulb size={20} /></span></div>
            <div className="laptop-stage">
              <div className="laptop">
                <div className="laptop-screen">
                  <div className="screen-inner">
                    <div className="screen-code"><i>const</i> team = [<br />&nbsp;&nbsp;<b>'imagine'</b>,<br />&nbsp;&nbsp;<b>'build'</b>,<br />&nbsp;&nbsp;<b>'impact'</b><br />];</div>
                    <div className="screen-chip"><Code2 size={23} /></div>
                  </div>
                </div>
                <div className="laptop-base" />
              </div>
            </div>
            <div className="hero-stamp">36 HOURS<br /><strong>ONE SHARED<br />MISSION</strong></div>
          </div>
        </div>
      </section>
      <Countdown />
    </>
  );
}
