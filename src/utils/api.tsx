import axios, { AxiosResponse } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
	throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

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

// Function for searching category by keyword
export const searchDataByKeyword = async (keyword: string | number) => {
  try {
    console.log(`Fetching courses for keyword: ${keyword}`);
    const response = await axios.get(`${API_URL}/search`, {
      params: { keyword },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Search response:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};


export const fetchCourseSession = async (id: string | number) => {
	try {
		console.log(`Fetching course by category for: ${id}`);
		const response = await axios.get(`${API_URL}/sessions`, {
			params: {
				categoryid: id,
			},
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log("Course sessions response:", response.data);
		return response.data;
	} catch (error) {
		console.error("Error fetching course session:", error);
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
		const response = await axios.get(`${API_URL}/users/notifications`, {
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

export interface LearnersInterest {
	category_id: string;
	category_name: string;
}

interface LearnersInterestResponse {
	message: string;
	data: LearnersInterest[];
}

export const fetchLearnersInterests = async (
	accessToken: string
): Promise<AxiosResponse<LearnersInterestResponse>> => {
	try {
		const response = await axios.get(`${API_URL}/learners/interests`, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		});
		return response;
	} catch (error) {
		console.error("Error fetching learner interests:", error);
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

// Function to fetch mentor details
export const fetchMentorDetail = async (id: string | number) => {
	try {
		const response = await axios.get(`${API_URL}/mentors/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching mentor detail:", error);
		throw error;
	}
};

// Function to fetch session class
export const fetchSessionClass = async (userId: number) => {
	try {
		const response = await axios.get(`${API_URL}/mentors/${userId}/sessions`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching session class:", error);
		throw error;
	}
};

// Function to fetch learner profile
export const fetchLearnerProfile = async (id: number) => {
	try {
		const response = await axios.get(`${API_URL}/learners/${id}`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching learner profile:", error);
		throw error;
	}
};

// Function to fetch session detail by id
export const fetchSessionDetails = async (sessionId: number) => {
	try {
		const response = await axios.get(`${API_URL}/sessions/${sessionId}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching session details:", error);
		throw error;
	}
};
