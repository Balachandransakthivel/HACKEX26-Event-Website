import { Factory, GraduationCap, HeartPulse, Lightbulb, WalletCards } from 'lucide-react';
import type { FormState } from './types';

export const themes = [
  { name: 'Healthcare', description: 'Build for healthier, more accessible lives.', icon: HeartPulse },
  { name: 'Edutech', description: 'Reimagine how knowledge moves and sticks.', icon: GraduationCap },
  { name: 'Fintech', description: 'Make the financial system work harder for everyone.', icon: WalletCards },
  { name: 'Industrial 5.0', description: 'Put people and precision back in the factory.', icon: Factory },
  { name: 'Open Innovation', description: 'Your sharpest idea does not need a category.', icon: Lightbulb },
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
};
