export type PageId = 
  | 'home' 
  | 'about' 
  | 'academics' 
  | 'facilities' 
  | 'activities' 
  | 'rules' 
  | 'gallery' 
  | 'contact';

export interface SchoolInfo {
  name: string;
  subTitle: string;
  motto: string;
  establishedYear: string;
  levels: string;
  streams: string[];
  logoUrl: string;
  society: string;
  schoolCode: string;
  diseCode: string;
  googleMapsUrl: string;
  address: {
    landmark: string;
    road: string;
    village: string;
    tehsil: string;
    district: string;
    state: string;
    pin: string;
    full: string;
  };
  contacts: {
    principal: string;
    director: string;
    vicePrincipalAndTransport: string;
    busIncharge: string;
    accountSection: string;
    email: string;
  };
  parentPortalUrl?: string;
}

export interface Facility {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'Infrastructure' | 'Academic' | 'Technology' | 'Safety' | 'Sports';
  image: string;
  highlights: string[];
}

export interface Activity {
  id: string;
  name: string;
  category: 'Cultural' | 'Academic & Science' | 'Sports & Yoga' | 'Field Visits' | 'Social & Nature';
  description: string;
  iconName?: string;
  image?: string;
}

export interface House {
  name: string;
  colorName: string;
  hex: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  motto: string;
  namedAfter: string;
  description: string;
}

export interface UniformItem {
  category: string;
  schedule: string;
  items: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Campus' | 'Activities' | 'Celebrations' | 'Sports' | 'Academic';
  src: string;
  caption: string;
}

export interface SchoolTiming {
  slot: string;
  time: string;
  note?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  childGrade?: string;
  quote: string;
  avatarBg?: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  category: string;
  snippet: string;
  isUrgent?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  metric: string;
  description: string;
  badge: string;
}
