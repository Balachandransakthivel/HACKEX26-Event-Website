export type ProblemStatement = {
  id: string;
  themeId: string;
  themeName: string;
  title: string;
  description: string;
  isOpenInnovation?: boolean;
  suggestedAreas?: string[];
  submissionFormat?: {
    label: string;
    description: string;
  }[];
};

export type FormState = {
  teamName: string;
  teamSize: string;
  leader: string;
  phone: string;
  email: string;
  member2: string;
  member3: string;
  member4: string;
  college: string;
  department: string;
  year: string;
  theme: string;
  problem: string;
  solution: string;
  technology: string;
  portfolio: string;
  pptUrl: string;
};

export type Registration = FormState & {
  registrationId: string;
  submittedAt: string;
  remoteSubmitted: boolean;
};
