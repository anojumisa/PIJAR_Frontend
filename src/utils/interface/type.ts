//cetegory fetch

export interface Category {
  id: number;
  category_name: string;
}

export interface MentorDetails {
  mentor_id: number;
  fullname: string;
}

export interface Course {
  id: number;
  title: string;
  image_url: string;
  category_id: number;
  mentor_details: MentorDetails;
  average_rate: number;
  is_replay: boolean;
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
  fullname: string;
  image_url: string;
  image_baground?: string;
  mentor_bio: string;
  mentor_experiences: MentorExperience[];
  mentor_expertise: MentorExpertise[];
  occupation: string;
  user_id: number;
}

export interface Education {
  id: number;
  school_name: string;
  year: string;
  major: string;
  description: string;
}


