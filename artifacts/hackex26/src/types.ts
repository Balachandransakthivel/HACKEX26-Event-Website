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
};

export type Registration = FormState & {
  registrationId: string;
  submittedAt: string;
  remoteSubmitted: boolean;
};
