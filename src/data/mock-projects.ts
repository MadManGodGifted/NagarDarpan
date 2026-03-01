
import { CivicProject, Notification } from "@/types";

export const MOCK_PROJECTS: CivicProject[] = [
  {
    id: "aiims-wing",
    name: "AIIMS Hospital (New Wing)",
    description: "Multi-specialty wing addition with 200+ beds.",
    longDescription: "A major expansion of the All India Institute of Medical Sciences (AIIMS) to include a state-of-the-art surgical and pediatric wing. This project aims to address the critical shortage of specialty beds in the capital.",
    status: "Completed",
    completionYear: 2025,
    location: {
      lat: 28.5672,
      lng: 77.2100,
      address: "Ansari Nagar East, New Delhi"
    },
    impactStats: [
      { label: "Patient Capacity", value: "50k/year", icon: "Users" },
      { label: "Wait Times", value: "-40%", icon: "Clock" },
      { label: "New Beds", value: "200+", icon: "Bed" }
    ],
    workHighlights: [
      "200 additional high-care beds",
      "10 Advanced Operation Theaters",
      "Dedicated Pediatric Oncology unit",
      "Solar-powered energy grid for the wing"
    ],
    budget: "₹1,200 Crores",
    timeline: [
      { event: "Proposal", date: "Jan 2022", status: "completed" },
      { event: "Groundbreaking", date: "May 2022", status: "completed" },
      { event: "Structure Ready", date: "Dec 2023", status: "completed" },
      { event: "Inauguration", date: "Feb 2025", status: "completed" }
    ],
    imageKey: "hospital",
    sourceUrl: "https://example-govt.gov.in/projects/aiims-wing"
  },
  {
    id: "du-library",
    name: "DU North Campus (Central Library)",
    description: "Digital-first library and research center.",
    longDescription: "The new library at Delhi University is designed as a carbon-neutral space for 5,000 students simultaneously. It features high-speed digital research labs and 24/7 accessible reading zones.",
    status: "In Progress",
    location: {
      lat: 28.6900,
      lng: 77.2100,
      address: "University Enclave, North Delhi"
    },
    impactStats: [
      { label: "Daily Footfall", value: "8,000", icon: "BookOpen" },
      { label: "Research Lab", value: "24/7", icon: "Zap" },
      { label: "Digital Access", value: "1M+", icon: "FileText" }
    ],
    workHighlights: [
      "100% digital resource catalog",
      "LEED Platinum certified building",
      "Seating capacity for 5,000 students",
      "Integrated career counseling hub"
    ],
    budget: "₹450 Crores",
    timeline: [
      { event: "Construction Start", date: "Jun 2023", status: "completed" },
      { event: "Roofing", date: "Dec 2024", status: "completed" },
      { event: "Digital Setup", date: "May 2025", status: "current" },
      { event: "Launch", date: "Sep 2025", status: "future" }
    ],
    imageKey: "university",
    sourceUrl: "https://example-govt.gov.in/projects/du-library"
  },
  {
    id: "signature-bridge",
    name: "Signature Bridge Widening",
    description: "Lane expansion to reduce bottleneck traffic.",
    longDescription: "An essential infrastructure project to widen the approach roads of the Signature Bridge to 8 lanes. This project is vital for commuters traveling between North and North-East Delhi.",
    status: "In Progress",
    location: {
      lat: 28.7000,
      lng: 77.2300,
      address: "Wazirabad, North Delhi"
    },
    impactStats: [
      { label: "Travel Time", value: "-20 mins", icon: "Navigation" },
      { label: "Daily Commuters", value: "1.2 Lakh", icon: "Car" },
      { label: "Road Width", value: "8 Lanes", icon: "ArrowRightLeft" }
    ],
    workHighlights: [
      "Expansion from 4 to 8 lanes",
      "Seismic reinforcement of pillars",
      "Dedicated cycling lanes on approach",
      "New LED high-mast lighting system"
    ],
    budget: "₹850 Crores",
    timeline: [
      { event: "Draft Plan", date: "Mar 2023", status: "completed" },
      { event: "Land Acquisition", date: "Oct 2023", status: "completed" },
      { event: "Paving Phase 1", date: "Apr 2024", status: "current" },
      { event: "Final Completion", date: "Dec 2025", status: "future" }
    ],
    imageKey: "bridge",
    sourceUrl: "https://example-govt.gov.in/projects/bridge-widening"
  },
  {
    id: "metro-upgrade",
    name: "Yellow Line Platform Upgrade",
    description: "New safety barriers and high-speed transit tech.",
    longDescription: "Modernization of critical Yellow Line stations to include Platform Screen Doors (PSDs) and updated signaling systems to decrease intervals between trains to 90 seconds.",
    status: "Completed",
    completionYear: 2024,
    location: {
      lat: 28.6139,
      lng: 77.2090,
      address: "Rajiv Chowk Metro, New Delhi"
    },
    impactStats: [
      { label: "Safety Incidents", value: "-95%", icon: "ShieldCheck" },
      { label: "Train Frequency", value: "90s", icon: "Train" },
      { label: "Accessibility", value: "100%", icon: "Accessibility" }
    ],
    workHighlights: [
      "Automatic Platform Screen Doors",
      "AI-driven crowd management sensors",
      "Refurbished elevators and escalators",
      "Upgraded 5G signal for commuters"
    ],
    budget: "₹210 Crores",
    timeline: [
      { event: "Contract Award", date: "Aug 2022", status: "completed" },
      { event: "Barrier Install", date: "Feb 2023", status: "completed" },
      { event: "Final Testing", date: "Dec 2023", status: "completed" },
      { event: "Full Operation", date: "Jan 2024", status: "completed" }
    ],
    imageKey: "metro",
    sourceUrl: "https://example-govt.gov.in/projects/metro-upgrade"
  },
  {
    id: "flyover-repair",
    name: "Moti Bagh Flyover Repair",
    description: "Structural overhaul and surface relayering.",
    longDescription: "Full structural maintenance of the Moti Bagh flyover. This involves replacing expansion joints and applying a new high-friction asphalt surface for improved monsoon safety.",
    status: "Completed",
    completionYear: 2024,
    location: {
      lat: 28.5700,
      lng: 77.1700,
      address: "Moti Bagh, South Delhi"
    },
    impactStats: [
      { label: "Traffic Flow", value: "+30%", icon: "Activity" },
      { label: "Surface Life", value: "15 Years", icon: "Calendar" },
      { label: "Repair Scope", value: "4.2 KM", icon: "Ruler" }
    ],
    workHighlights: [
      "Replacement of all expansion joints",
      "Micro-surfacing for better grip",
      "Reinforced concrete support beams",
      "Modernized drainage system"
    ],
    budget: "₹85 Crores",
    timeline: [
      { event: "Survey", date: "Sep 2023", status: "completed" },
      { event: "Joint Replace", date: "Nov 2023", status: "completed" },
      { event: "Surface Laying", date: "Feb 2024", status: "completed" },
      { event: "Inspection", date: "Mar 2024", status: "completed" }
    ],
    imageKey: "flyover",
    sourceUrl: "https://example-govt.gov.in/projects/moti-bagh-repair"
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "n1",
    projectId: "aiims-wing",
    projectName: "AIIMS New Wing",
    message: "You're near AIIMS New Wing! This upgrade added 200 beds and reduced wait times by 40%. Learn more →",
    timestamp: "2 mins ago",
    isRead: false
  },
  {
    id: "n2",
    projectId: "metro-upgrade",
    projectName: "Metro Upgrade",
    message: "New platform screen doors at Rajiv Chowk are now operational for your safety.",
    timestamp: "1 day ago",
    isRead: true
  }
];
