export type QuestStep = {
  id: string;
  // Optional step number shown before the title, e.g. "5.3".
  label?: string;
  title: string;
  description: string;
  altersPlaythrough: boolean;
  consequence: string | null;
};

export type Ending = {
  id: string;
  order: number;
  title: string;
  steps: QuestStep[];
};

export type WalkthroughZone = {
  id: string;
  title: string;
  steps: QuestStep[];
};

export type EndingsData = {
  endings: Ending[];
};
