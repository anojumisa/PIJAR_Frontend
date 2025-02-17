//cetegory fetch
export interface Category {
  id: number;
  category_name: string;
  sub_categories: SubCategory[];
  image_url?: string;
}

export interface SubCategory {
  category_id: number;
  sub_category_name:string
}


//mentor detail
export interface MentorExperience {
  company_name: string;
  end_date: string;
  occupation: string;
  start_date: string;
}

export interface MentorExpertise {
  category: string;
  expertise: string;
}

export interface Mentor {
  id:number;
  fullname: string;
  image_url: string;
  image_baground?: string;
  mentor_bio: string;
  mentor_experiences: MentorExperience[];
  mentor_expertise: MentorExpertise[];
  occupation: string;
  user_id: number;
  email: string;
  isFollowing: boolean;
}


export interface Education {
  id: number;
  school_name: string;
  year: string;
  major: string;
  description: string;
}

export interface MentorDetails {
  mentor_id: number;
  fullname: string;
  image_url: string;
}

export interface MentorSession {
  mentor_session_title: string;
  short_description: string;
  image_url: string;
  schedule: string; 
  mentor_details: MentorDetails;
  average_rating: number;
  session_id: number;
}

export interface Sessions {
  id:number;
  sessions: MentorSession[];
  total: number;
  page: number;
  page_size: number;
  image_url: string;
  schedule: string;
  short_description: string;
  title: string;
  session_id: number;
}

export interface Topic {
  id:number;
  category_name: string;
  image_url:string
}


export interface Session {
  session_id: number;
  mentor_details: MentorDetails;
  category: string;
  title: string;
  short_description: string;
  detail: string;
  schedule: string; 
  duration: number;
  image_url: string;
  id: number;

}