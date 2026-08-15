export type QuestStep = {
  id: string;
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

export type EndingsData = {
  endings: Ending[];
};
