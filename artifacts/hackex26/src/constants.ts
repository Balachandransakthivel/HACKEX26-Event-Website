import { Factory, GraduationCap, HeartPulse, Lightbulb, WalletCards } from 'lucide-react';
import type { FormState } from './types';

export const GOOGLE_FORM_URL = (import.meta.env.VITE_GOOGLE_FORM_URL as string | undefined) || 'https://docs.google.com/forms/d/e/1FAIpQLScvTjbgZrsRsoLp-Fyl-I4PHcDn8eUlSoo1vTqx_cZ5A3BfMw/viewform?usp=dialog';

export const themes = [
  {
    id: 'healthcare',
    name: 'HEALTHCARE',
    description: 'Build for healthier, more accessible lives.',
    icon: HeartPulse,
    tag: 'BioTech • Digital Health • AI Care',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.05))',
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  {
    id: 'edutech',
    name: 'EDUTECH',
    description: 'Reimagine how knowledge moves and sticks.',
    icon: GraduationCap,
    tag: 'Smart Learning • Skill Platforms • AI Tutors',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(59, 130, 246, 0.05))',
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  {
    id: 'fintech',
    name: 'FINTECH',
    description: 'Make the financial system work harder for everyone.',
    icon: WalletCards,
    tag: 'Smart Banking • Micro-Finance • Security',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(16, 185, 129, 0.05))',
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  {
    id: 'industrial',
    name: 'INDUSTRIAL 5.0',
    description: 'Put people and precision back in the factory.',
    icon: Factory,
    tag: 'Smart Robotics • IoT • Cyber-Physical',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(2, 132, 199, 0.05))',
    borderColor: 'rgba(249, 115, 22, 0.3)',
  },
  {
    id: 'openinno',
    name: 'OPEN INNOVATION',
    description: 'Your sharpest idea does not need a category.',
    icon: Lightbulb,
    tag: 'Frontier Tech • Web3 • AI Breakthroughs',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(6, 182, 212, 0.05))',
    borderColor: 'rgba(236, 72, 153, 0.3)',
  },
];

export const navItems = [
  ['About', '#about'],
  ['Themes', '#themes'],
  ['Timeline', '#timeline'],
  ['Prizes', '#prizes'],
  ['Rules', '#rules'],
  ['FAQ', '#faq'],
];

export const initialForm: FormState = {
  teamName: '',
  teamSize: '4',
  leader: '',
  phone: '',
  email: '',
  member2: '',
  member3: '',
  member4: '',
  college: '',
  department: '',
  year: '',
  theme: '',
  problem: '',
  solution: '',
  technology: '',
  portfolio: '',
  pptUrl: '',
};
