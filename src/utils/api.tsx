import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Function to fetch all categories
export const fetchCategories = async () => {
	try {
		const response = await axios.get(`${API_URL}/categories/featured`);
		return response.data;
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
};
