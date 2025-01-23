import axios, { AxiosResponse } from "axios";
import { delete_cookie, set_cookie } from "@/lib/utils";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!API_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

// Manggil API tanpa auth headers
const publicService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Manggil API yang ngisi auth headers, sign in & sign up
const authService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

authService.interceptors.response.use((resp) => {
  if (resp.status == axios.HttpStatusCode.Ok) {
    set_cookie("isLoggedIn", "true");
  }
  return resp;
});

// Manggil API yang butuh auth headers
const privateService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

privateService.interceptors.response.use(
  (resp) => {
    return resp;
  },
  (error) => {
    if (error.status == axios.HttpStatusCode.Unauthorized) {
      delete_cookie("isLoggedIn");
      alert("Session Expired, Please Login Again");
      document.location.replace("/signin");
    }
    console.log(error.status);
  }
);

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`, {
      maxRedirects: 10,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Function for searching category by keyword
export const searchDataByKeyword = async (keyword: string | number) => {
  try {
    if (typeof keyword === "string" && keyword.length < 3) {
      throw new Error("Keyword must be at least 3 characters long");
    }
    const response = await publicService.get(`/search`, {
      params: { keyword },
    });
    console.log("Search response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchCourseSession = async (id: string | number) => {
  try {
    console.log(`Fetching course by category for: ${id}`);
    const response = await publicService.get(`/sessions`, {
      params: {
        categoryid: id,
      },
    });
    console.log("Course sessions response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching course session:", error);
    throw error;
  }
};

export const UserLogOut = async () => {
  try {
    const response = await authService.post(`/users/logout`);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// Function for User Registration
export const UserSignUp = async (userData: {
  email: string;
  fullname: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const UserSignInGAuth = async (
  session: any,
  entity: "learner" | "mentor"
) => {
  try {
    const response = await authService.get(`/auth/google/login`, {
      params: {
        entity: entity,
        access_token: session.accessToken,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error login user:", error);
    throw error;
  }
};

// Function for User Login
export const UserSignIn = async (userData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error;
  }
};

export const UpdateUserDetails = async (userData: {
  birth_date?: string,
  fullname?: string,
  image_url?: string,
  phone_number?: string,
  is_mentor?: string
}) => {
  try {
    const response = await axios.patch(`${API_URL}/users/me/details`, userData);
    return response.data;
  } catch (error) {
    console.error("Error updating in user:", error);
    throw error;
  }
};

export interface NotificationItem {
  is_read: boolean;
  message: string;
  type: string;
}

interface NotificationsResponse {
  message: string;
  notification: NotificationItem[];
}

export const fetchNotifications = async (
  accessToken: string
): Promise<AxiosResponse<NotificationsResponse>> => {
  try {
    // API Call for protected
    const response = await axios.get(`${API_URL}/users/notifications/`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

// Function for Fetching Landing Page Category
export const fetchLandingPageCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories/featured`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Function for Fetching Featured Mentors
export const fetchFeaturedMentors = async () => {
  try {
    const response = await axios.get(`${API_URL}/mentors/landingpage`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching mentors:", error);
    throw error;
  }
};

// Function for Fetching Detail Mentors
export const fetchMentorDetail = async (id: string | number) => {
  try {
    console.log("Fetching mentor detail for ID:", id);
    const response = await axios.get(`${API_URL}/mentors/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Mentor detail response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching mentor detail:", error);
    throw error;
  }
};

// Function for Fetching Session class
export const fetchSessionClass = async (id: string | number) => {
  try {
    console.log("Fetching session class for ID:", id);
    const response = await axios.get(`${API_URL}/sessions/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Session Class response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Session Class:", error);
    throw error;
  }
};

// Function to fetch upcoming sessions
export const fetchUpcomingSessions = async () => {
  try {
    const response = await axios.get(`${API_URL}/sessions/upcoming`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.sessions;
  } catch (error) {
    console.error("Error fetching upcoming sessions:", error);
    throw error;
  }
};

// Function to post learner interests
export const postLearnerInterest = async (categoryIds: number[]) => {
  try {
    const response = await axios.post(
      `${API_URL}/learners/interest`,
      {
        category_id: categoryIds,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting learner interests:", error);
    throw error;
  }
};

export interface SessionSearchResultItem {
  title: string;
  short_description: string;
  schedule: string;
  image_url: string;
}
export interface MentorSearchResultItem {
  fullname: string;
  email: string;
  image_url: string;
}
export interface TopicSearchResultItem {
  category_name: string;
}
export interface SearchResultResponse {
  mentors: MentorSearchResultItem[];
  sessions: SessionSearchResultItem[];
  topics: TopicSearchResultItem[];
}

// Function to get search bar results
//   export const getSearchResult = async (
// 	keyword: string
//   ): Promise<AxiosResponse<SearchResultResponse>> => {
// 	try {
// 	  const params = new URLSearchParams();
// 	  params.append("keyword", keyword);
// 	  const resp = await axios.get(`${API_URL}/search`, { params });
// 	  return resp;
// 	} catch (error) {
// 	  console.error("Error getting search result:", error);
// 	  throw error;
// 	}
//   };

export const getSearchResult = async (query: string): Promise<string> => {
  return `${API_URL}/search?query=${query}`;
};
