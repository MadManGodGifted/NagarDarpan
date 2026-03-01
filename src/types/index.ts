
export interface CivicProject {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  status: 'In Progress' | 'Completed' | 'Upcoming';
  completionYear?: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  impactStats: {
    label: string;
    value: string;
    icon: string;
  }[];
  workHighlights: string[];
  budget: string;
  timeline: {
    event: string;
    date: string;
    status: 'completed' | 'current' | 'future';
  }[];
  imageKey: string;
  sourceUrl: string;
}

export interface Notification {
  id: string;
  projectId: string;
  projectName: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}
