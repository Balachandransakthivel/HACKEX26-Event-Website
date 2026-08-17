import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, Check, CircleCheck, Download, Search, Send } from 'lucide-react';
import { initialForm, themes } from '@/constants';
import type { FormState, Registration as RegistrationType } from '@/types';
import { Reveal } from '@/components/ui/Reveal';

function Field({ label, value, onChange, placeholder, type = 'text', required = false, name, error }: { label: string; value: string; onChange: (value: string) => void; placeholder?: string; type?: string; required?: boolean; name: string; error?: string }) {
  return <div className="field"><label htmlFor={name}>{label}{required && ' *'}</label><input id={name} name={name} type={type} required={required} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} data-testid={`input-${name}`} />{error && <span className="field-error">{error}</span>}</div>;
}

function ThemePicker({ value, onChange, error }: { value: string; onChange: (value: string) => void; error?: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const filtered = themes.filter((theme) => theme.name.toLowerCase().includes(query.trim().toLowerCase()));
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next) window.setTimeout(() => inputRef.current?.focus(), 0);
  };
  const select = (name: string) => { onChange(name); setOpen(false); setQuery(''); };
  return (
    <div className={`field theme-picker ${open ? 'open' : ''}`} ref={wrapRef}>
      <label htmlFor="theme-search">Primary theme *</label>
      <button type="button" className="theme-picker-trigger" onClick={toggle} data-testid="theme-picker-trigger">
        <span className={value ? '' : 'placeholder'}>{value || 'Choose your arena'}</span>
        <span className="theme-picker-arrow">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="theme-picker-dropdown">
          <div className="theme-picker-search">
            <Search size={16} />
            <input id="theme-search" ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search themes…" data-testid="theme-picker-search" />
          </div>
          <ul className="theme-picker-list">
            {filtered.map((theme) => {
              const Icon = theme.icon;
              return (
                <li key={theme.name}>
                  <button type="button" className={`theme-picker-item ${value === theme.name ? 'selected' : ''}`} onClick={() => select(theme.name)} data-testid={`theme-option-${theme.name}`}>
                    <span className="theme-picker-icon"><Icon size={18} /></span>
                    <span className="theme-picker-text"><strong>{theme.name}</strong><small>{theme.description}</small></span>
                    {value === theme.name && <Check size={16} className="theme-picker-check" />}
                  </button>
                </li>
              );
            })}
            {filtered.length === 0 && <li className="theme-picker-empty">No themes match “{query}”.</li>}
          </ul>
        </div>
      )}
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return <div className="review-row"><span>{label}</span><strong>{value || '—'}</strong></div>;
}

async function submitToGoogleSheet(payload: RegistrationType) {
  const endpoint = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string | undefined;
  if (!endpoint) return { remote: false };
  const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
  if (!response.ok) throw new Error(`Google Sheet endpoint returned ${response.status}.`);
  return { remote: true };
}

function downloadRegistration(registration: RegistrationType) {
  const text = [
    'HACKEX’26 — REGISTRATION CONFIRMATION', `Registration ID: ${registration.registrationId}`, '',
    `Team: ${registration.teamName}`, `Leader: ${registration.leader}`, `Email: ${registration.email}`, `Phone: ${registration.phone}`,
    `Team size: ${registration.teamSize}`, `Theme: ${registration.theme}`, `College: ${registration.college}`, `Department: ${registration.department}`, `Year: ${registration.year}`, '',
    `Problem: ${registration.problem}`, `Solution: ${registration.solution}`, `Technology: ${registration.technology}`,
  ].join('\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url; anchor.download = `${registration.registrationId}-hackex26.txt`; anchor.click(); URL.revokeObjectURL(url);
}

export function Registration() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [registration, setRegistration] = useState<RegistrationType | null>(() => {
    if (typeof window === 'undefined') return null;
    const raw = window.localStorage.getItem('hackex26-registration');
    return raw ? JSON.parse(raw) as RegistrationType : null;
  });
  const update = (key: keyof FormState, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const size = Number(form.teamSize) || 4;
  const validate = (targetStep: number) => {
    const nextErrors: Record<string, string> = {};
    if (targetStep === 0) {
      if (!form.teamName.trim()) nextErrors.teamName = 'Give your team a name.';
      if (!form.leader.trim()) nextErrors.leader = 'Add the team leader.';
      if (!/^\+?[\d\s-]{10,}$/.test(form.phone.trim())) nextErrors.phone = 'Enter a valid phone number.';
      if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = 'Enter a valid email.';
    }
    if (targetStep === 1) {
      [2, 3, 4].forEach((member) => {
        const key = `member${member}` as keyof FormState;
        if (member <= size && !form[key].trim()) nextErrors[key] = `Add member ${member}.`;
      });
    }
    if (targetStep === 2) {
      if (!form.college.trim()) nextErrors.college = 'Add your college.';
      if (!form.department.trim()) nextErrors.department = 'Add your department.';
      if (!form.year) nextErrors.year = 'Select your year.';
    }
    if (targetStep === 3) {
      if (!form.theme) nextErrors.theme = 'Choose a theme.';
      if (form.problem.trim().length < 20) nextErrors.problem = 'Tell us a little more (20 characters minimum).';
      if (form.solution.trim().length < 20) nextErrors.solution = 'Describe the solution (20 characters minimum).';
      if (!form.technology.trim()) nextErrors.technology = 'List your technology.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };
  const goNext = () => { if (validate(step)) { setStep((current) => Math.min(4, current + 1)); setErrors({}); } };
  const goBack = () => { setStep((current) => Math.max(0, current - 1)); setErrors({}); };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validate(3)) { setStep(3); return; }
    setPending(true); setSubmitError('');
    const registrationPayload: RegistrationType = {
      ...form,
      registrationId: `HX26-${Date.now().toString(36).slice(-5).toUpperCase()}-${Math.floor(Math.random() * 90 + 10)}`,
      submittedAt: new Date().toISOString(),
      remoteSubmitted: false,
    };
    try {
      const result = await submitToGoogleSheet(registrationPayload);
      const finalRegistration = { ...registrationPayload, remoteSubmitted: result.remote };
      window.localStorage.setItem('hackex26-registration', JSON.stringify(finalRegistration));
      setRegistration(finalRegistration);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'The Google Sheet endpoint could not be reached. Your registration was not marked as submitted.');
    } finally { setPending(false); }
  };
  const startNew = () => { window.localStorage.removeItem('hackex26-registration'); setRegistration(null); setForm(initialForm); setStep(0); setErrors({}); };
  const endpointAvailable = Boolean(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL);

  return (
    <section className="register" id="register">
      <div className="container">
        <Reveal>
          <div className="register-shell">
            <aside className="register-sidebar">
              <span className="eyebrow">HACKEX’26 / FORM</span>
              <h3>Make it real.</h3>
              <div className="step-list">{['Team details', 'Members', 'College', 'Idea', 'Review'].map((label, index) => <div className={`step-item ${index === step && !registration ? 'active' : ''} ${index < step && !registration ? 'done' : ''}`} key={label}><span className="step-circle">{index < step && !registration ? <Check size={13} /> : index + 1}</span><span>{label}</span></div>)}</div>
              <div style={{ marginTop: 66, color: '#9cb1dc', fontSize: 12, lineHeight: 1.6 }}>Team size is capped at 4. Choose the problem you want to spend 36 hours making better.</div>
            </aside>
            {registration ? (
              <div className="success-card">
                <div className="success-content">
                  <div className="success-check"><CircleCheck size={34} /></div>
                  <span className="eyebrow">Registration received</span>
                  <h3 className="display">You’re on the grid.</h3>
                  <p>{registration.remoteSubmitted ? 'Your team details have been sent to the HACKEX’26 organisers.' : 'Your confirmation is saved on this device. The organiser Google Sheet endpoint is not connected yet.'}</p>
                  <div className="success-id" data-testid="status-registration-id">{registration.registrationId}</div>
                  <div className="success-meta"><span>{registration.teamName}</span><span>{registration.theme}</span><span>{registration.teamSize} members</span></div>
                  <div className="success-actions"><button className="button-primary" onClick={() => downloadRegistration(registration)} data-testid="button-download-registration"><Download size={15} /> Save confirmation</button><button className="button-secondary" onClick={startNew} data-testid="button-new-registration">Register another team</button></div>
                </div>
              </div>
            ) : (
              <main className="register-main">
                <div className="form-top"><h3>{['Team details', 'Your crew', 'College details', 'The idea', 'Review & submit'][step]}</h3><span>STEP 0{step + 1} / 05</span></div>
                {submitError && <div className="submit-error" role="alert">{submitError}</div>}
                <form onSubmit={handleSubmit}>
                  {step === 0 && <div className="form-grid">
                    <Field name="teamName" label="Team name" value={form.teamName} onChange={(v) => update('teamName', v)} placeholder="Something worth remembering" required error={errors.teamName} />
                    <div className="field"><label>Team size *</label><div className="size-options">{['2', '3', '4'].map((value) => <button type="button" className={`size-button ${form.teamSize === value ? 'selected' : ''}`} onClick={() => update('teamSize', value)} key={value} data-testid={`button-team-size-${value}`}>{value}</button>)}</div></div>
                    <Field name="leader" label="Team leader" value={form.leader} onChange={(v) => update('leader', v)} placeholder="Full name" required error={errors.leader} />
                    <Field name="phone" label="Phone" type="tel" value={form.phone} onChange={(v) => update('phone', v)} placeholder="+91 98765 43210" required error={errors.phone} />
                    <Field name="email" label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} placeholder="team@college.edu" required error={errors.email} />
                  </div>}
                  {step === 1 && <div className="form-grid">{[2, 3, 4].filter((member) => member <= size).map((member) => <Field key={member} name={`member${member}`} label={`Member ${member} full name`} value={form[`member${member}` as keyof FormState]} onChange={(v) => update(`member${member}` as keyof FormState, v)} placeholder="Full name" required error={errors[`member${member}`]} />)}<p className="submit-note">The team leader is already counted as member 1. Add the other people who will be in the room.</p></div>}
                  {step === 2 && <div className="form-grid">
                    <Field name="college" label="College / institution" value={form.college} onChange={(v) => update('college', v)} placeholder="Full institution name" required error={errors.college} />
                    <Field name="department" label="Department" value={form.department} onChange={(v) => update('department', v)} placeholder="Computer Science & Engineering" required error={errors.department} />
                    <div className="field"><label htmlFor="year">Current year *</label><select id="year" value={form.year} onChange={(e) => update('year', e.target.value)} data-testid="select-year"><option value="">Select year</option><option>First year</option><option>Second year</option><option>Third year</option><option>Final year</option><option>Postgraduate</option></select>{errors.year && <span className="field-error">{errors.year}</span>}</div>
                  </div>}
                  {step === 3 && <div className="form-grid">
                    <ThemePicker value={form.theme} onChange={(v) => update('theme', v)} error={errors.theme} />
                    <Field name="technology" label="Technology / stack" value={form.technology} onChange={(v) => update('technology', v)} placeholder="React, Python, IoT..." required error={errors.technology} />
                    <div className="field full"><label htmlFor="problem">What problem are you solving? *</label><textarea id="problem" value={form.problem} onChange={(e) => update('problem', e.target.value)} placeholder="Make the problem specific. Who feels it? What is at stake?" data-testid="textarea-problem" />{errors.problem && <span className="field-error">{errors.problem}</span>}</div>
                    <div className="field full"><label htmlFor="solution">What will you build? *</label><textarea id="solution" value={form.solution} onChange={(e) => update('solution', e.target.value)} placeholder="Give us the first version of the solution in plain language." data-testid="textarea-solution" />{errors.solution && <span className="field-error">{errors.solution}</span>}</div>
                    <Field name="portfolio" label="GitHub / portfolio (optional)" value={form.portfolio} onChange={(v) => update('portfolio', v)} placeholder="https://github.com/..." />
                  </div>}
                  {step === 4 && <div><div className="review"><ReviewRow label="Team" value={`${form.teamName} / ${form.teamSize} members`} /><ReviewRow label="Leader" value={`${form.leader} / ${form.email}`} /><ReviewRow label="Members" value={[form.member2, form.member3, form.member4].filter(Boolean).join(', ')} /><ReviewRow label="College" value={`${form.college} / ${form.department} / ${form.year}`} /><ReviewRow label="Theme" value={form.theme} /><ReviewRow label="Idea" value={form.solution} /><ReviewRow label="Stack" value={form.technology} /></div><p className="submit-note">By submitting, you confirm your team is eligible, your information is accurate and you agree to the event rules. {endpointAvailable ? 'This form will securely send a copy to the organiser Google Sheet.' : 'This build currently saves confirmation locally; add VITE_GOOGLE_APPS_SCRIPT_URL to connect the organiser Google Sheet.'}</p></div>}
                  <div className="form-actions">{step > 0 ? <button type="button" className="button-muted" onClick={goBack} data-testid="button-form-back">← Back</button> : <span />}{step < 4 ? <button type="button" className="button-primary" onClick={goNext} data-testid="button-form-next">Continue <ArrowRight size={15} /></button> : <button type="submit" className="button-primary" disabled={pending} data-testid="button-submit-registration">{pending ? 'Sending…' : 'Submit registration'} <Send size={14} /></button>}</div>
                </form>
              </main>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
