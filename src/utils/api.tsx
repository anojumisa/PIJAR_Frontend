import axios, { AxiosResponse } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

// Function for User Registration
export const UserSignUp = async (userData: { email: string; fullname: string; password: string }) => {
    try {
        const response = await axios.post(`${API_URL}/users/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

// Function for User Login
export const UserSignIn = async (userData: { email: string; password: string }) => {
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

export const fetchNotifications = async (accessToken: string): Promise<AxiosResponse<NotificationsResponse>> => {
    try {
        // API Call for protected
        const response = await axios.get(`${API_URL}/users/notifications/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response
    } catch (error) {
        console.error("Error fetching notifications:", error);
        throw error;
    }
}
