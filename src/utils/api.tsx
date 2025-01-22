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

privateService.interceptors.response.use((resp) => {
	return resp;
}, (error) => {
	if (error.status == axios.HttpStatusCode.Unauthorized) {
		delete_cookie("isLoggedIn");
		alert("Session Expired, Please Login Again");
		document.location.replace("/signin");
	}
	console.log(error.status)
});

export const fetchCategories = async () => {
	try {
		const response = await publicService.get(`/categories`);
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
		const response = await authService.post(`/users/register`, userData);
		return response.data;
	} catch (error) {
		console.error("Error registering user:", error);
		throw error;
	}
};

export const UserSignUpGAuth = async (
	session: any,
	entity: "learner" | "mentor"
) => {
	try {
		const response = await authService.get(`/auth/google/register`, {
			params: {
				entity: entity,
				access_token: session.accessToken,
			},
		});
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
		const response = await authService.post(`/users/login`, userData);
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


export const fetchNotifications = async (): Promise<
	AxiosResponse<NotificationsResponse>
> => {
	try {
		// API Call for protected
		const response = await privateService.get(`/users/notifications`);
		return response.data;
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

export const fetchLearnersInterests = async (): Promise<
	AxiosResponse<LearnersInterestResponse>
> => {
	try {
		const response = await privateService.get(`/learners/interests`);
		return response.data;
	} catch (error) {
		console.error("Error fetching learner interests:", error);
		throw error;
	}
};

// Function for Fetching Landing Page Category
export const fetchLandingPageCategories = async () => {
	try {
		const response = await publicService.get(`/categories/featured`);
		return response.data; // Return the data directly
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
};

// Function for Fetching Featured Mentors
export const fetchFeaturedMentors = async () => {
	try {
		const response = await publicService.get(`/mentors/landingpage`);
		return response.data;
	} catch (error) {
		console.error("Error fetching mentors:", error);
		throw error;
	}
};

// Function to fetch upcoming sessions
export const fetchUpcomingSessions = async () => {
	try {
		const response = await privateService.get(`/sessions/upcoming`);
		return response.data.sessions;
	} catch (error) {
		console.error("Error fetching upcoming sessions:", error);
		throw error;
	}
};

// Function to post learner interests
export const postLearnerInterest = async (categoryIds: number[]) => {
	try {
		const response = await privateService.post(`/learners/interest`, {
			category_id: categoryIds,
		});
		return response.data;
	} catch (error) {
		console.error("Error posting learner interests:", error);
		throw error;
	}
};

// Function to fetch mentor details
export const fetchMentorDetail = async (id: string | number) => {
	try {
		const response = await publicService.get(`/mentors/${id}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching mentor detail:", error);
		throw error;
	}
};

// Function to fetch session class
export const fetchSessionClass = async (userId: number) => {
	try {
		const response = await publicService.get(`/mentors/${userId}/sessions`);
		return response.data;
	} catch (error) {
		console.error("Error fetching session class:", error);
		throw error;
	}
};

// Function to fetch learner profile
export const fetchLearnerProfile = async (id: number) => {
	try {
		const response = await privateService.get(`/learners/${id}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching learner profile:", error);
		throw error;
	}
};

// Function to fetch session detail by id
export const fetchSessionDetails = async (sessionId: number) => {
	try {
		const response = await publicService.get(`/sessions/${sessionId}`);
		return response.data;
	} catch (error) {
		console.error("Error fetching session details:", error);
		throw error;
	}
};

// Function to add review
export const addReview = async (
	sessionId: number,
	rating: number,
	review: string,
) => {
	try {
		const response = await privateService.post(
			`/sessions/${sessionId}/review`,
			{
				rating,
				review,
			}
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching session details:", error);
		throw error;
	}
};

// Function to fetch reviews
export const fetchReviews = async (sessionId: number) => {
	try {
		const response = await publicService.get("/sessions/${sessionId}/review");
		return response.data;
	} catch (error) {
		console.error("Error fetching session details:", error);
		throw error;
	}
};

// Function to toggle follow mentor
export const toggleFollowMentor = async (
	mentorId: number,
	isFollowing: boolean
) => {
	try {
		console.log("Mentor ID:", mentorId);
		console.log("Is Following:", isFollowing);
		const response = await privateService.post(`/mentors/${mentorId}/follow`);
		return response.data;
	} catch (error) {
		console.error("Error toggling follow status:", error);
		throw error;
	}
};

// Function to fetch follow status
export const getMentorFollowStatus = async (
	mentorId: number,
) => {
	try {
		console.log("Mentor ID:", mentorId);
		const response = await privateService.get(`/mentors/${mentorId}/status`);
		console.log("Response:", response);
		return response.data; // Response includes `is_following`
	} catch (error) {
		console.error("Error fetching follow status:", error);
		throw error;
	}
};
