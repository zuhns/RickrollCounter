export interface Participant {
  name: string;
  score: number;
  avatar?: string;
}

export interface RickrollEntry {
  id: string;
  perpetrator: string;
  victim: string;
  description: string;
  date: string;
  method: string;
  creativity: number; // 1-5 stars
  timestamp: Date;
}

export interface Rule {
  id: number;
  title: string;
  description: string;
  icon: string;
  examples?: string[];
  forbidden?: string[];
}