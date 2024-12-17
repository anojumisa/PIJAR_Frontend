import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchCategories = async () => {
	try {
		const response = await axios.get(`${API_URL}/categories`)
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
