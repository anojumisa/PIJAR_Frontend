import axios, { AxiosResponse } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
	throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export const fetchCategories = async () => {
	try {
		const response = await axios.get(`${API_URL}/categories/`, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching categories:", error);
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
export const fetchFeaturedMentors = async (
	page = 1,
	pagesize = 10,
	categoryid?: number
) => {
	try {
		const response = await axios.get(`${API_URL}/mentors/landingpage`, {
			headers: {
				"Content-Type": "application/json",
			},
			params: {
				page,
				pagesize,
				categoryid,
			},
		});
		return response.data.data; // Extract the data field
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
