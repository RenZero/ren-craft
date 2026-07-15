// Shared data model interfaces for all experience entries

export interface MetricBadge {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  highlight: string;
  metrics: MetricBadge[];
  techStack: string[];
}

export interface ManagementInfo {
  leadership: string;
  clientSLA?: string;
  devops?: string;
}

export interface DetailItem {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  company: string;
  department?: string;
  title: string;
  period: string;
  location?: string;
  summary: string;
  management?: ManagementInfo;
  projects?: Project[];
  details?: DetailItem[];
}

export interface WorkingHoliday {
  id: string;
  country: string;
  company: string;
  title: string;
  period: string;
  achievements: string[];
}
